// Slot Machine Game Logic for Browser
// Based on project.js but adapted for DOM manipulation

// Game Constants
const ROWS = 3;
const COLS = 3;

// Symbol mapping: Emoji to Letter
const SYMBOL_MAP = {
    'A': '🍒', // Cherry
    'B': '🍋', // Lemon
    'C': '🍊', // Orange
    'D': '🍇'  // Grape
};

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
};

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
};

// Game State
let balance = 0;
let currentBet = 0;
let currentLines = 1;

// DOM Elements
const depositSection = document.getElementById('depositSection');
const gameSettings = document.getElementById('gameSettings');
const resultSection = document.getElementById('resultSection');
const balanceDisplay = document.getElementById('balance');
const depositBtn = document.getElementById('depositBtn');
const depositInput = document.getElementById('depositAmount');
const linesInput = document.getElementById('numberOfLines');
const betInput = document.getElementById('betAmount');
const totalBetDisplay = document.getElementById('totalBet');
const spinBtn = document.getElementById('spinBtn');
const resultLabel = document.getElementById('resultLabel');
const resultAmount = document.getElementById('resultAmount');
const linesIndicator = document.getElementById('linesIndicator');

// Core Game Logic Functions (same as project.js)
const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const transpose = (reels) => {
    const rows = [];
    for (let i = 0; i < ROWS; i++){
        rows.push([]);
        for (let j = 0; j < COLS; j++) {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};

const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;
        for (const symbol of symbols) {
            if (symbol !== symbols[0]) {
                allSame = false;
                break;
            }
        }
        if (allSame) {
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
    }
    return winnings;
};

// UI Update Functions
const updateBalance = () => {
    balanceDisplay.textContent = `$${balance}`;
};

const updateTotalBet = () => {
    const lines = parseInt(linesInput.value) || 1;
    const bet = parseInt(betInput.value) || 0;
    const total = lines * bet;
    totalBetDisplay.textContent = `Total Bet: $${total}`;
    
    // Enable/disable spin button based on valid bet
    spinBtn.disabled = total === 0 || total > balance;
};

const displayReels = (rows) => {
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
            const symbolElement = document.getElementById(`symbol-${row}-${col}`);
            const letter = rows[row][col];
            const emoji = SYMBOL_MAP[letter];
            
            // Add spinning animation
            symbolElement.classList.add('spinning');
            
            // Update symbol after animation
            setTimeout(() => {
                symbolElement.textContent = emoji;
                symbolElement.classList.remove('spinning');
            }, 500);
        }
    }
};

const highlightWinningLines = (rows, lines) => {
    // Remove all active lines first
    document.querySelectorAll('.line').forEach(line => line.classList.remove('active'));
    
    // Highlight winning lines
    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;
        for (const symbol of symbols) {
            if (symbol !== symbols[0]) {
                allSame = false;
                break;
            }
        }
        
        if (allSame) {
            // Highlight the line
            const lineElement = document.querySelector(`.line-${row + 1}`);
            if (lineElement) {
                lineElement.classList.add('active');
            }
            
            // Add winning animation to symbols
            for (let col = 0; col < COLS; col++) {
                const symbolElement = document.getElementById(`symbol-${row}-${col}`);
                symbolElement.classList.add('winning');
                setTimeout(() => {
                    symbolElement.classList.remove('winning');
                }, 2000);
            }
        }
    }
};

const showResult = (winnings) => {
    resultSection.style.display = 'block';
    const resultCard = resultSection.querySelector('.result-card');
    
    if (winnings > 0) {
        resultCard.classList.remove('lose');
        resultLabel.textContent = '🎉 You Won!';
        resultAmount.textContent = `$${winnings}`;
    } else {
        resultCard.classList.add('lose');
        resultLabel.textContent = '😢 No Win';
        resultAmount.textContent = '$0';
    }
    
    // Hide result after 3 seconds
    setTimeout(() => {
        resultSection.style.display = 'none';
    }, 3000);
};

// Event Handlers
depositBtn.addEventListener('click', () => {
    const amount = parseInt(depositInput.value);
    
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid deposit amount!');
        return;
    }
    
    balance += amount;
    updateBalance();
    
    // Show game settings
    depositSection.style.display = 'none';
    gameSettings.style.display = 'block';
    
    depositInput.value = '';
});

linesInput.addEventListener('input', updateTotalBet);
betInput.addEventListener('input', updateTotalBet);

spinBtn.addEventListener('click', () => {
    const lines = parseInt(linesInput.value);
    const bet = parseInt(betInput.value);
    const totalBet = lines * bet;
    
    // Validate inputs
    if (isNaN(lines) || lines < 1 || lines > 3) {
        alert('Please enter a valid number of lines (1-3)!');
        return;
    }
    
    if (isNaN(bet) || bet <= 0) {
        alert('Please enter a valid bet amount!');
        return;
    }
    
    if (totalBet > balance) {
        alert('Insufficient balance!');
        return;
    }
    
    // Deduct bet from balance
    balance -= totalBet;
    updateBalance();
    
    // Spin the reels
    const reels = spin();
    const rows = transpose(reels);
    
    // Display the reels
    displayReels(rows);
    
    // Calculate winnings
    const winnings = getWinnings(rows, bet, lines);
    balance += winnings;
    
    // Update UI after spin animation
    setTimeout(() => {
        highlightWinningLines(rows, lines);
        showResult(winnings);
        updateBalance();
        updateTotalBet();
        
        // Check if player ran out of money
        if (balance === 0) {
            setTimeout(() => {
                alert('You ran out of money! Please deposit more to continue.');
                gameSettings.style.display = 'none';
                depositSection.style.display = 'block';
            }, 3500);
        }
    }, 600);
});

// Initialize
updateBalance();
