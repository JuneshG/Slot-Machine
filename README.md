#  Interactive Slot Machine Web Application

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://juneshg.github.io/Slot-Machine/)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-blue)](https://github.com/JuneshG/Slot-Machine/actions)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A full-stack slot machine game demonstrating proficiency in modern web development practices, automated testing, and continuous deployment pipelines.

##  Live Application

**[Play Now →](https://juneshg.github.io/Slot-Machine/)**

##  Project Overview

This project showcases a production-ready slot machine application built with vanilla JavaScript, featuring both a command-line interface (Node.js) and a modern web-based UI. The application implements comprehensive testing, version control best practices, and automated CI/CD workflows.

### Key Features

- **Dual-Platform Support**: Console-based Node.js application and browser-based web interface
- **Responsive Design**: Mobile-first approach with adaptive layouts for all screen sizes
- **Automated Testing**: Jest test suite with 100% coverage of core game logic
- **CI/CD Pipeline**: Automated testing and deployment via GitHub Actions
- **Modern UI/UX**: Smooth animations, real-time balance tracking, and intuitive controls
- **Professional Architecture**: Modular code structure with clear separation of concerns

##  Technical Stack

### Frontend
- **HTML5**: Semantic markup with accessible structure
- **CSS3**: Custom animations, CSS Grid/Flexbox layouts, CSS variables for theming
- **Vanilla JavaScript**: ES6+ features, DOM manipulation, event-driven architecture

### Backend/CLI
- **Node.js**: Runtime environment for command-line version
- **npm**: Package management and dependency resolution

### Testing & Quality Assurance
- **Jest**: Unit testing framework with comprehensive test coverage
- **ESLint**: Code quality and consistency (configurable)

### DevOps
- **Git**: Version control with branching strategies
- **GitHub Actions**: CI/CD automation for testing and deployment
- **GitHub Pages**: Static site hosting with automatic deployments

##  Project Structure

```
slotMachine/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline configuration
├── node_modules/               # Project dependencies (gitignored)
├── index.html                  # Web application entry point
├── styles.css                  # Responsive styling and animations
├── game.js                     # Browser-compatible game logic
├── project.js                  # Node.js CLI version
├── project.test.js             # Jest test suite
├── package.json                # Project metadata and dependencies
├── SYSTEM_DESIGN.md           # Architecture documentation
└── README.md                   # Project documentation
```

##  How to Play

### Web Version
1. Visit the [live application](https://juneshg.github.io/Slot-Machine/)
2. Deposit funds to start playing
3. Select number of betting lines (1-3)
4. Set your bet amount per line
5. Click "SPIN" to play
6. Win when matching symbols appear on active paylines

### Command-Line Version
```bash
node project.js
```

##  Local Development

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JuneshG/Slot-Machine.git
cd Slot-Machine
```

2. Install dependencies:
```bash
npm install
```

3. Run tests:
```bash
npm test
```

4. Start the CLI version:
```bash
node project.js
```

5. Open the web version:
```bash
# Simply open index.html in your browser
# Or use a local server:
npx serve .
```

##  Testing

The project includes a comprehensive Jest test suite covering all core game mechanics:

- **Spin Function Tests**: Validates reel generation and symbol distribution
- **Transpose Function Tests**: Ensures correct matrix transformation
- **Winning Calculation Tests**: Verifies payout logic accuracy
- **Edge Case Handling**: Tests boundary conditions and error states

Run the test suite:
```bash
npm test
```

View test coverage:
```bash
npm test -- --coverage
```

##  CI/CD Pipeline

The project uses GitHub Actions for automated quality assurance:

1. **Continuous Integration**: Automatically runs Jest tests on every push
2. **Deployment Gate**: Only deploys if all tests pass
3. **Continuous Deployment**: Automatically publishes to GitHub Pages
4. **Build Verification**: Ensures production build integrity

View the workflow: [`.github/workflows/ci.yml`](.github/workflows/ci.yml)

##  Game Mechanics

### Symbol Probability Distribution
| Symbol | Emoji | Count | Payout Multiplier |
|--------|-------|-------|-------------------|
| A      | 🍒    | 2     | 5x                |
| B      | 🍋    | 4     | 4x                |
| C      | 🍊    | 6     | 3x                |
| D      | 🍇    | 8     | 2x                |

### Betting System
- **Lines**: Choose 1-3 horizontal paylines
- **Bet Amount**: Customizable per-line wager
- **Total Bet**: Lines × Bet per Line
- **Winnings**: Bet × Symbol Multiplier (per winning line)

##  Performance Optimizations

- Efficient DOM manipulation with minimal reflows
- CSS animations using GPU-accelerated transforms
- Debounced input validation
- Optimized asset loading

##  Best Practices Implemented

- ✅ Semantic HTML5 markup
- ✅ Modular, DRY code structure
- ✅ Comprehensive error handling
- ✅ Input validation and sanitization
- ✅ Responsive design patterns
- ✅ Accessibility considerations
- ✅ Version control with meaningful commits
- ✅ Automated testing and deployment
- ✅ Clean code principles

##  Future Enhancements

- [ ] Backend API integration for leaderboards
- [ ] User authentication and session persistence
- [ ] Progressive Web App (PWA) capabilities
- [ ] Additional game modes and bonus features
- [ ] Sound effects and enhanced animations
- [ ] Multiplayer functionality
- [ ] Blockchain integration for provably fair gaming

##  Author

**Junesh Gautam**

- GitHub: [@JuneshG](https://github.com/JuneshG)
- Project Link: [https://github.com/JuneshG/Slot-Machine](https://github.com/JuneshG/Slot-Machine)

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- Built as a demonstration of full-stack development capabilities
- Inspired by modern web application architecture patterns
- Developed with a focus on clean code and professional standards

---

** If you found this project interesting, please consider giving it a star!**
