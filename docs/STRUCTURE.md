# Project Structure Guide

## 📂 Directory Organization

### `/src/` - Source Code
The main source files for the web application.

```
src/
├── index.html              # Main quiz application entry point
├── script.js               # Game logic and interactivity
├── styles.css              # Styling and layout
└── games/
    └── guessing-game.html  # Additional game mode
```

**Files:**
- `index.html`: Main page containing quiz structure, screens (start, quiz, results)
- `script.js`: Game logic, question bank, scoring system, state management
- `styles.css`: Global styles, responsive design, animations
- `guessing-game.html`: Alternative game mode for energy identification

---

### `/public/assets/` - Static Assets
All static files served to the browser.

```
public/assets/
├── images/                 # Game-related graphics
│   ├── solar-panel.png     # Solar energy icon
│   └── wind-turbine.png    # Wind energy icon
├── backgrounds/            # Background images and designs
│   ├── Diseño sin título (3)/
│   └── Diseño sin título (3).zip
└── logos/                  # Brand/project logos
    └── mi-logo.png         # Main logo
```

**Guidelines:**
- Keep images optimized (PNG/JPG, compressed)
- Use descriptive filenames
- Organize by purpose (icons, backgrounds, logos)

---

### `/scripts/` - Development Scripts
Utility scripts for development and maintenance.

```
scripts/
├── dev.ps1                 # PowerShell development helper
└── dev.cmd                 # Windows batch wrapper
```

**Commands Available:**
- `serve` - Start local web server (port 8000)
- `open` - Open app in default browser
- `status` - Show git status
- `log` - Show recent commits
- `sync` - Pull latest from remote
- `push` - Push local changes
- `reset` - Reset to origin/main
- `help` - Show help

---

### `/docs/` - Documentation
Documentation files (currently empty, ready for expansion).

**Suggested additions:**
- Architecture documentation
- API documentation
- User guides
- Screenshots/demos

---

### Root Level Files

**Project Configuration:**
- `package.json` - Project metadata, scripts, dependencies
- `README.md` - Main project documentation
- `CONTRIBUTING.md` - Contribution guidelines
- `.gitignore` - Git ignore rules

---

## 🔄 File Paths & References

When working with files, remember the relative structure:

### From `src/index.html`:
- Local files: `script.js`, `styles.css` (same directory)
- Assets: `../public/assets/images/solar-panel.png`
- Other games: `games/guessing-game.html`

### From `src/script.js`:
- HTML elements: Direct DOM access
- Assets: Use paths from HTML perspective

### From root directory:
- Frontend: `src/index.html`
- Assets: `public/assets/`
- Scripts: `scripts/dev.ps1`

---

## 📝 Adding New Content

### Adding a New Question
1. Edit `src/script.js`
2. Find the `questions` array
3. Add new question object with structure: `{ pregunta, opciones, respuestaCorrecta, explicacion }`

### Adding New Assets
1. Optimize the image (reduce size)
2. Place in appropriate folder: `public/assets/images/` or `backgrounds/` or `logos/`
3. Update HTML/CSS to reference new file

### Creating a New Mini-Game
1. Create new HTML file in `src/games/`
2. Include necessary script and styles
3. Link from main `src/index.html` if needed
4. Update documentation

---

## 🚀 Development Tips

1. **Always work from the project root** when running commands
2. **Use relative paths** for assets to maintain portability
3. **Test locally** before committing changes
4. **Keep assets organized** by category
5. **Document changes** in commits and CONTRIBUTING.md
6. **Check file paths** if images don't display

---

## 📊 Best Practices

✅ **DO:**
- Use descriptive file and folder names
- Keep related files together
- Maintain consistent file structure
- Optimize images before committing
- Comment complex code

❌ **DON'T:**
- Scatter files randomly
- Use spaces in filenames (use hyphens or underscores)
- Commit large unoptimized images
- Mix concerns (logic with styling)
- Leave unused files

---

*Last Updated: April 2026*
