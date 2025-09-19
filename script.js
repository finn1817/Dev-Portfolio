// Easter Egg #26: Console messages and ASCII art
console.log(`
🎉 WELCOME TO THE EASTER EGG HUNT! 🎉

██████╗ ███████╗██╗   ██╗    ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔════╝██║   ██║    ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██║  ██║█████╗  ██║   ██║    ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██║  ██║██╔══╝  ╚██╗ ██╔╝    ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██████╔╝███████╗ ╚████╔╝     ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═════╝ ╚══════╝  ╚═══╝      ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 

🕵️ You found the console! Here are some hints:
• Try clicking the logo 5 times
• Type 'konami' anywhere on the page
• Click the avatar multiple times
• Use the terminal (press Ctrl+T)
• Look for hidden messages in the HTML
• Try the secret commands in terminal: help, matrix, joke, secret
`);

// Easter Egg #27: Hidden global variables with secret messages
window.secretMessage = "🎯 You're getting warmer! Keep exploring!";
window.easterEggCount = 0;
window.foundEggs = [];

// Easter Egg #28: Console commands
window.showHint = () => console.log("💡 Hint: Try clicking on different elements multiple times!");
window.revealSecret = () => console.log("🔍 Secret: The Konami code is ↑↑↓↓←→←→BA");
window.easterEggList = () => console.log("🥚 Found eggs:", window.foundEggs);

class EasterEggHunt {
    constructor() {
        this.logoClicks = 0;
        this.avatarClicks = 0;
        this.konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
        this.konamiProgress = 0;
        this.secretMode = false;
        this.terminalCommands = {
            help: "Available commands: matrix, joke, secret, clear, hint",
            matrix: "🔴💊 You take the red pill... Welcome to the Matrix!",
            joke: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
            secret: "🎉 The secret is... you're awesome for finding this!",
            clear: "clear",
            hint: "💡 Try typing 'konami' on the main page!"
        };
        
        this.init();
    }
    
    init() {
        this.setupLogoClicks();
        this.setupAvatarClicks();
        this.setupKonamiCode();
        this.setupSecretKeyword();
        this.setupSkillCounters();
        this.setupProjectCards();
        this.setupCursorTrail();
        this.setupTerminal();
        this.setupMagicButton();
        this.setupSecretHovers();
        this.setupContactForm();
        this.addEasterEgg("Console Detective");
    }
    
    // Easter Egg #29: Logo click counter
    setupLogoClicks() {
        const logo = document.getElementById('secret-logo');
        logo.addEventListener('click', () => {
            this.logoClicks++;
            console.log(`🎯 Logo clicked ${this.logoClicks} times!`);
            
            if (this.logoClicks === 3) {
                logo.classList.add('rainbow');
                this.addEasterEgg("Rainbow Logo");
            }
            
            if (this.logoClicks === 5) {
                document.getElementById('secret-nav').style.display = 'block';
                this.addEasterEgg("Secret Navigation");
                this.playSecretSound();
            }
            
            if (this.logoClicks === 10) {
                this.showTerminal();
                this.addEasterEgg("Terminal Access");
            }
        });
    }
    
    // Easter Egg #30: Avatar click states
    setupAvatarClicks() {
        const avatar = document.getElementById('avatar');
        const faces = ['🧑‍💻', '😎', '🤖', '👨‍🚀', '🧙‍♂️', '🎉'];
        
        avatar.addEventListener('click', () => {
            this.avatarClicks++;
            const face = avatar.querySelector('.avatar-face');
            
            if (this.avatarClicks % 2 === 0) {
                avatar.classList.add('spin');
                setTimeout(() => avatar.classList.remove('spin'), 2000);
            } else {
                avatar.classList.add('bounce');
                setTimeout(() => avatar.classList.remove('bounce'), 1000);
            }
            
            face.textContent = faces[this.avatarClicks % faces.length];
            
            if (this.avatarClicks === 6) {
                this.addEasterEgg("Avatar Master");
                console.log("🎭 You've unlocked all avatar faces!");
            }
        });
    }
    
    // Easter Egg #31: Konami Code
    setupKonamiCode() {
        document.addEventListener('keydown', (e) => {
            if (e.code === this.konamiCode[this.konamiProgress]) {
                this.konamiProgress++;
                console.log(`🎮 Konami progress: ${this.konamiProgress}/${this.konamiCode.length}`);
                
                if (this.konamiProgress === this.konamiCode.length) {
                    this.activateMatrix();
                    this.konamiProgress = 0;
                }
            } else {
                this.konamiProgress = 0;
            }
        });
    }
    
    // Easter Egg #32: Secret keyword typing
    setupSecretKeyword() {
        let typedChars = '';
        document.addEventListener('keypress', (e) => {
            typedChars += e.key.toLowerCase();
            if (typedChars.length > 6) {
                typedChars = typedChars.slice(-6);
            }
            
            if (typedChars === 'konami') {
                document.body.classList.add('konami-activated');
                this.addEasterEgg("Secret Keyword");
                console.log("🌈 KONAMI MODE ACTIVATED!");
                setTimeout(() => {
                    document.body.classList.remove('konami-activated');
                }, 3000);
            }
        });
    }
    
    // Easter Egg #33: Skill click counters
    setupSkillCounters() {
        const skills = document.querySelectorAll('.skill-item');
        skills.forEach(skill => {
            let clicks = 0;
            skill.addEventListener('click', () => {
                clicks++;
                skill.classList.add('clicked');
                skill.querySelector('.click-counter').textContent = clicks;
                
                if (clicks === 5) {
                    skill.style.background = 'linear-gradient(135deg, #ff69b4, #8b5cf6)';
                    skill.style.color = 'white';
                    this.addEasterEgg(`${skill.dataset.skill} Master`);
                }
            });
        });
    }
    
    // Easter Egg #34: Project card transformation
    setupProjectCards() {
        const projectBtns = document.querySelectorAll('.project-btn');
        projectBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                let clicks = parseInt(btn.dataset.clicks) || 0;
                clicks++;
                btn.dataset.clicks = clicks;
                
                if (clicks === 5) {
                    const card = btn.closest('.project-card');
                    card.classList.add('secret-revealed');
                    this.addEasterEgg("Secret Project Revealed");
                }
            });
        });
    }
    
    // Easter Egg #35: Cursor trail effect
    setupCursorTrail() {
        let isTrailActive = false;
        
        // Activate trail with Ctrl+Click
        document.addEventListener('click', (e) => {
            if (e.ctrlKey) {
                isTrailActive = !isTrailActive;
                console.log(`✨ Cursor trail ${isTrailActive ? 'activated' : 'deactivated'}!`);
                if (isTrailActive) this.addEasterEgg("Cursor Trail");
            }
        });
        
        document.addEventListener('mousemove', (e) => {
            if (isTrailActive) {
                this.createTrailDot(e.clientX, e.clientY);
            }
        });
    }
    
    createTrailDot(x, y) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
        document.body.appendChild(dot);
        
        setTimeout(() => {
            dot.remove();
        }, 1000);
    }
    
    // Easter Egg #36: Terminal functionality
    setupTerminal() {
        const terminalCmd = document.getElementById('terminal-cmd');
        const terminalOutput = document.getElementById('terminal-output');
        const closeBtn = document.getElementById('close-terminal');
        
        // Ctrl+T to open terminal
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey && e.key === 't') {
                e.preventDefault();
                this.showTerminal();
            }
        });
        
        terminalCmd.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const command = e.target.value.toLowerCase().trim();
                this.executeTerminalCommand(command, terminalOutput);
                e.target.value = '';
            }
        });
        
        closeBtn.addEventListener('click', () => {
            document.getElementById('terminal').style.display = 'none';
        });
    }
    
    executeTerminalCommand(command, output) {
        const response = this.terminalCommands[command] || `Command not found: ${command}`;
        
        if (command === 'clear') {
            output.innerHTML = '<p>🎯 EASTER EGG TERMINAL ACTIVATED!</p><p>Available commands: help, matrix, joke, secret</p>';
        } else if (command === 'matrix') {
            this.activateMatrix();
        } else {
            output.innerHTML += `<p>user@portfolio:~$ ${command}</p><p>${response}</p>`;
        }
        
        output.scrollTop = output.scrollHeight;
        
        if (command in this.terminalCommands) {
            this.addEasterEgg(`Terminal Command: ${command}`);
        }
    }
    
    showTerminal() {
        document.getElementById('terminal').style.display = 'block';
        document.getElementById('terminal-cmd').focus();
    }
    
    // Easter Egg #37: Magic button effect
    setupMagicButton() {
        const magicBtn = document.getElementById('magic-button');
        magicBtn.addEventListener('click', () => {
            magicBtn.classList.add('magic');
            setTimeout(() => magicBtn.classList.remove('magic'), 1000);
            this.addEasterEgg("Magic Button");
            
            // Create sparkles
            for (let i = 0; i < 10; i++) {
                setTimeout(() => this.createSparkle(magicBtn), i * 100);
            }
        });
    }
    
    createSparkle(element) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.fontSize = '20px';
        sparkle.style.zIndex = '9999';
        
        const rect = element.getBoundingClientRect();
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        
        document.body.appendChild(sparkle);
        
        sparkle.animate([
            { transform: 'translateY(0px)', opacity: 1 },
            { transform: 'translateY(-50px)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => sparkle.remove();
    }
    
    // Easter Egg #38: Secret hover effects
    setupSecretHovers() {
        const secretTitle = document.getElementById('secret-title');
        const footerSecret = document.getElementById('footer-secret');
        
        secretTitle.addEventListener('mouseenter', () => {
            secretTitle.textContent = '🧙‍♂️ Easter Egg Hunter';
            this.addEasterEgg("Secret Title");
        });
        
        footerSecret.addEventListener('click', () => {
            footerSecret.textContent = '🥚 hidden treasures';
            this.addEasterEgg("Footer Secret");
        });
    }
    
    // Easter Egg #39: Contact form secrets
    setupContactForm() {
        const emailInput = document.querySelector('#contact-form input[type="email"]');
        const messageField = document.getElementById('message-field');
        
        emailInput.addEventListener('input', (e) => {
            if (e.target.value.includes('easter') || e.target.value.includes('egg')) {
                messageField.placeholder = "🥚 I see you're an easter egg hunter! Tell me about your discoveries...";
                this.addEasterEgg("Easter Email");
            }
        });
    }
    
    // Matrix activation
    activateMatrix() {
        document.getElementById('matrix').style.display = 'block';
        this.addEasterEgg("Matrix Mode");
        console.log("🔴💊 Welcome to the Matrix!");
        
        document.getElementById('exit-matrix').addEventListener('click', () => {
            document.getElementById('matrix').style.display = 'none';
        });
    }
    
    // Play secret sound
    playSecretSound() {
        const audio = document.getElementById('secret-sound');
        audio.play().catch(() => console.log("🔇 Audio play blocked by browser"));
    }
    
    // Easter egg tracking
    addEasterEgg(name) {
        if (!window.foundEggs.includes(name)) {
            window.foundEggs.push(name);
            window.easterEggCount++;
            console.log(`🥚 Easter Egg Found: ${name} (${window.easterEggCount} total)`);
            
            if (window.easterEggCount === 10) {
                console.log("🏆 CONGRATULATIONS! You're an Easter Egg Master!");
                this.showVictoryMessage();
            }
        }
    }
    
    showVictoryMessage() {
        const victory = document.createElement('div');
        victory.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                        background: linear-gradient(135deg, #ff69b4, #8b5cf6); color: white; 
                        padding: 2rem; border-radius: 20px; text-align: center; z-index: 10000;
                        box-shadow: 0 20px 50px rgba(0,0,0,0.3);">
                <h2>🏆 EASTER EGG MASTER! 🏆</h2>
                <p>You found ${window.easterEggCount} easter eggs!</p>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="background: white; color: #8b5cf6; border: none; padding: 0.5rem 1rem; 
                               border-radius: 10px; margin-top: 1rem; cursor: pointer; font-weight: bold;">
                    Amazing! 🎉
                </button>
            </div>
        `;
        document.body.appendChild(victory);
    }
}

// Easter Egg #40: Additional console functions
console.log("🎮 Available secret functions:");
console.log("• showHint() - Get a hint");
console.log("• revealSecret() - Reveal a secret");
console.log("• easterEggList() - Show found eggs");

// Initialize the easter egg hunt
document.addEventListener('DOMContentLoaded', () => {
    new EasterEggHunt();
    console.log("🎯 Easter egg hunt initialized! Start exploring!");
});
