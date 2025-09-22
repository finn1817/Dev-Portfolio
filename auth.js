// Lightweight cross-page auth utility
// Works across paths and subdomains (best-effort) using both localStorage and cookies.
(function(){
  const KEY = 'auth_user';
  const COOKIE_JSON = 'auth_user';
  const COOKIE_SIMPLE = 'df_auth';
  let current = null;

  function getRootDomain(){
    const host = location.hostname;
    if (!host || host === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(host)) return null; // IP/localhost: don't set Domain
    const parts = host.split('.');
    if (parts.length <= 2) return '.' + host; // example.com
    // naive last two labels (works for most, not perfect for co.uk)
    return '.' + parts.slice(-2).join('.');
  }

  function setCookie(name, value, days){
    const expires = new Date(Date.now() + (days||365) * 864e5).toUTCString();
    const domain = getRootDomain();
    const domainAttr = domain ? `; Domain=${domain}` : '';
    document.cookie = `${name}=${encodeURIComponent(value)}; Expires=${expires}; Path=/${domainAttr}; SameSite=Lax`;
  }

  function getCookie(name){
    return document.cookie.split('; ').find(r=>r.startsWith(name+'='))?.split('=')[1];
  }

  function deleteCookie(name){
    // Delete default host cookie
    document.cookie = `${name}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax`;
    // And try root domain deletion
    const domain = getRootDomain();
    if (domain){
      document.cookie = `${name}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; Domain=${domain}; SameSite=Lax`;
    }
  }

  function save(user){
    if (!user){ return clear(); }
    try { localStorage.setItem(KEY, JSON.stringify(user)); } catch(_){}
    try { setCookie(COOKIE_JSON, JSON.stringify(user)); } catch(_){}
    try { setCookie(COOKIE_SIMPLE, user.username || ''); } catch(_){}
    current = user;
    return current;
  }

  function load(){
    // 1) localStorage
    try {
      const raw = localStorage.getItem(KEY);
      if (raw && raw !== 'null' && raw !== 'undefined'){
        current = JSON.parse(raw);
        // sync cookies if missing
        if (!getCookie(COOKIE_JSON)) setCookie(COOKIE_JSON, JSON.stringify(current));
        if (!getCookie(COOKIE_SIMPLE)) setCookie(COOKIE_SIMPLE, current.username || '');
        return current;
      }
    } catch(e){ /* fall through */ }

    // 2) cookie (JSON)
    try {
      const c = getCookie(COOKIE_JSON);
      if (c){
        current = JSON.parse(decodeURIComponent(c));
        try { localStorage.setItem(KEY, JSON.stringify(current)); } catch(_){ }
        return current;
      }
    } catch(e){ /* fall through */ }

    // 3) cookie (simple username)
    try {
      const u = getCookie(COOKIE_SIMPLE);
      if (u){
        current = { username: decodeURIComponent(u) };
        try { localStorage.setItem(KEY, JSON.stringify(current)); } catch(_){ }
        setCookie(COOKIE_JSON, JSON.stringify(current));
        return current;
      }
    } catch(e){ /* fall through */ }

    current = null;
    return null;
  }

  function clear(){
    try { localStorage.removeItem(KEY); } catch(_){ }
    deleteCookie(COOKIE_JSON);
    deleteCookie(COOKIE_SIMPLE);
    current = null;
    return null;
  }

  function get(){ return current; }

  // Initialize early so pages can reference immediately
  load();

  window.Auth = { save, load, clear, getUser: get, isSignedIn: () => !!get() };
})();
