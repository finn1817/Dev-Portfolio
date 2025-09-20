# Images Folder

This folder is prepared for future images that will enhance the portfolio.

## Planned Image Integration:

### Profile Images:
- `profile/` - Personal photos for the about section
- `profile/avatar.jpg` - Main profile picture
- `profile/developer-setup.jpg` - Workspace/coding setup photo

### Project Screenshots:
- `projects/` - Screenshots and previews of projects
- `projects/secret-game.png` - Secret game project preview
- `projects/analytics-dashboard.png` - Analytics dashboard screenshot
- `projects/easter-hunt.png` - Easter egg hunt preview

### Backgrounds:
- `backgrounds/` - Background images and textures
- `backgrounds/hero-bg.jpg` - Main hero section background
- `backgrounds/matrix-overlay.png` - Matrix effect overlay

### Icons and Assets:
- `icons/` - Custom icons and logos
- `icons/skills/` - Technology skill icons (HTML, CSS, JS, Python, etc.)
- `icons/social/` - Social media icons
- `assets/` - Misc assets like arrows, decorations

## Usage Examples:

```html
<!-- Profile picture in about section -->
<img src="Images/profile/avatar.jpg" alt="Dan Finn - Developer" class="profile-picture">

<!-- Project screenshots -->
<div class="project-preview">
    <img src="Images/projects/secret-game.png" alt="Secret Game Project">
</div>

<!-- Background images -->
<section class="hero" style="background-image: url('Images/backgrounds/hero-bg.jpg')">
```

## CSS Classes for Images:

```css
.profile-picture {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px solid var(--accent-color);
}

.project-preview img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease;
}

.skill-icon {
    width: 40px;
    height: 40px;
    margin: 0 auto 1rem;
}
```

Ready for future image uploads and integration!