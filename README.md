# 🌞 Quiz Energía - Energy Quiz Game

An interactive web-based quiz game about renewable and sustainable energy sources. Test your knowledge about solar, wind, hydro, and other energy types!

## 📋 Project Structure

```
quizenergia/
├── src/                    # Source code
│   ├── index.html         # Main quiz application
│   ├── script.js          # Game logic
│   ├── styles.css         # Styling
│   └── games/             # Additional games
│       └── guessing-game.html
├── public/                # Static assets
│   └── assets/
│       ├── images/        # Game images (solar panels, turbines, etc.)
│       ├── backgrounds/   # Background designs
│       └── logos/         # Project logos
├── scripts/               # Development scripts
│   ├── dev.ps1           # Development helper (PowerShell)
│   └── dev.cmd           # Development wrapper (CMD)
├── docs/                  # Documentation
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🎮 Features

- **Interactive Quiz**: Multiple-choice questions about renewable energy
- **Score Tracking**: Real-time score and progress display
- **Educational Content**: Learn explanations for each question
- **Guessing Game**: Additional game mode to identify energy types
- **Responsive Design**: Works on desktop and mobile devices

## 🚀 Getting Started

### Quick Start (Web Server)

```powershell
# From Windows CMD or PowerShell in the project directory
.\run.cmd serve
# or
.\scripts\dev.ps1 serve
```

Then open http://localhost:8000 in your browser.

### Available Commands

Run `.\scripts\dev.ps1 help` to see all available development commands:

- `serve` - Start local web server
- `open` - Open in default browser
- `status` - Show git status
- `log` - Show recent commits
- `sync` - Pull latest changes
- `push` - Push changes
- `build` - Build info

## 🛠️ Development

### File Structure Details

- **src/**: All source code for the web application
  - `index.html`: Main entry point with game structure
  - `script.js`: Game logic, questions, and interactivity
  - `styles.css`: Visual styling and layout
  - `games/`: Additional mini-games

- **public/assets/**: Static files served to the browser
  - `images/`: Icons and in-game graphics
  - `backgrounds/`: Background images
  - `logos/`: Brand logos

- **scripts/**: Utility scripts for development

## 📦 Technologies

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Design**: Responsive web design, CSS Grid/Flexbox
- **Fonts**: Google Fonts (Baloo 2)
- **Language**: Spanish (es)

## 🌍 Language Support

Currently available in **Spanish (es)**. The UI and content are designed for Spanish-speaking users.

## 📝 License

[Add your license here]

## 👨‍💻 Author

[Your name/organization]

---

**Happy learning! ⚡🌱**
