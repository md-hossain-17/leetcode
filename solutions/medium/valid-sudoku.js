/**
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *      Each row must contain the digits 1-9 without repetition.
 *      Each column must contain the digits 1-9 without repetition.
 *      Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note:
 *      A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 *      Only the filled cells need to be validated according to the mentioned rules.
 */

/**
 * @param character[][] board
 * @return boolean
 */
const isValidSudoku = (board) => {
    const rowSets = [];
    const colSets = [];
    const gridSets = [];
    for (let i = 0; i < 9; i++) {
        rowSets.push(new Set());
        colSets.push(new Set());
        gridSets.push(new Set());
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];
            if (value === '.') continue;
            const gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (
                rowSets[i].has(value) ||
                colSets[j].has(value) ||
                gridSets[gridIndex].has(value)
            ) {
                return false;
            }
            rowSets[i].add(value);
            colSets[j].add(value);
            gridSets[gridIndex].add(value);
        }
    }
    return true;
};
