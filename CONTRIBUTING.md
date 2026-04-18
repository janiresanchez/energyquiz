# Contributing to Quiz Energía

Thank you for your interest in contributing to the Quiz Energía project! Here's how you can help.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/quizenergia.git
   cd quizenergia
   ```
3. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Starting the dev server:
```powershell
.\scripts\dev.ps1 serve
```

### Making changes:
- **HTML**: Edit files in `src/`
- **Styling**: Modify `src/styles.css`
- **Logic**: Update `src/script.js`
- **New games**: Add to `src/games/`
- **Assets**: Place images in `public/assets/`

## Code Style

- Use meaningful variable and function names
- Add comments for complex logic
- Keep CSS organized and DRY
- Test responsiveness on mobile devices

## Testing

Before submitting:
1. Test locally with `.\scripts\dev.ps1 serve`
2. Verify all links work correctly
3. Test on multiple browsers (Chrome, Firefox, Safari, Edge)
4. Check mobile responsiveness

## Submitting Changes

1. **Commit** with clear messages:
   ```bash
   git commit -m "Add feature: better quiz flow"
   ```
2. **Push** your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
3. **Create a Pull Request** on GitHub with:
   - Clear description of changes
   - Reference to any related issues
   - Screenshots if UI changes

## Questions or Issues?

- Open an issue on GitHub for bugs
- Use Discussions for feature suggestions
- Contact the maintainers directly for urgent matters

---

Thank you for contributing! 🌟
