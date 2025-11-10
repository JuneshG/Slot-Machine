// Test file for slot machine game logic
const { spin, transpose, getWinnings, SYMBOLS_COUNT, SYMBOL_VALUES, ROWS, COLS } = require('./project');

describe('Slot Machine Tests', () => {
    
    // Test 1: Check if spin() returns correct structure
    test('spin() should return 3 reels with 3 symbols each', () => {
        const reels = spin();
        
        expect(reels).toHaveLength(COLS); // Should have 3 columns
        reels.forEach(reel => {
            expect(reel).toHaveLength(ROWS); // Each reel should have 3 rows
        });
    });

    // Test 2: Check if spin() only uses valid symbols
    test('spin() should only return valid symbols (A, B, C, D)', () => {
        const reels = spin();
        const validSymbols = Object.keys(SYMBOLS_COUNT);
        
        reels.forEach(reel => {
            reel.forEach(symbol => {
                expect(validSymbols).toContain(symbol);
            });
        });
    });

    // Test 3: Check transpose function
    test('transpose() should convert columns to rows correctly', () => {
        const testReels = [
            ['A', 'B', 'C'],
            ['D', 'A', 'B'],
            ['C', 'D', 'A']
        ];
        
        const rows = transpose(testReels);
        
        expect(rows).toHaveLength(3);
        expect(rows[0]).toEqual(['A', 'D', 'C']); // First row
        expect(rows[1]).toEqual(['B', 'A', 'D']); // Second row
        expect(rows[2]).toEqual(['C', 'B', 'A']); // Third row
    });

    // Test 4: Check getWinnings with all same symbols
    test('getWinnings() should calculate correct winnings for matching symbols', () => {
        const rows = [
            ['A', 'A', 'A'], // All A's - should win
            ['B', 'B', 'B'], // All B's - should win
            ['C', 'D', 'C']  // Not matching - no win
        ];
        
        const bet = 10;
        const lines = 2; // Only checking first 2 lines
        
        const winnings = getWinnings(rows, bet, lines);
        
        // Expected: (bet * SYMBOL_VALUES['A']) + (bet * SYMBOL_VALUES['B'])
        // = (10 * 5) + (10 * 4) = 50 + 40 = 90
        expect(winnings).toBe(90);
    });

    // Test 5: Check getWinnings with no matches
    test('getWinnings() should return 0 for no matching symbols', () => {
        const rows = [
            ['A', 'B', 'C'],
            ['D', 'A', 'B'],
            ['C', 'D', 'A']
        ];
        
        const bet = 10;
        const lines = 3;
        
        const winnings = getWinnings(rows, bet, lines);
        expect(winnings).toBe(0);
    });

    // Test 6: Check if constants are correct
    test('Constants should have correct values', () => {
        expect(ROWS).toBe(3);
        expect(COLS).toBe(3);
        expect(SYMBOL_VALUES['A']).toBe(5);
        expect(SYMBOL_VALUES['B']).toBe(4);
        expect(SYMBOL_VALUES['C']).toBe(3);
        expect(SYMBOL_VALUES['D']).toBe(2);
    });
});
