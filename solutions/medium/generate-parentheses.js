/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 */

/**
 * @param number n
 * @return string[]
 */
const generateParenthesis = (n) => {
    const arr = [];
    generateParenthesis_helper(arr, '', n, n, n * 2);
    return arr;
};

/**
 * @param string[] arr
 * @param string current
 * @param number open
 * @param number close
 * @param number total
 * @return
 */
const generateParenthesis_helper = (arr, current, open, close, total) => {
    if (current.length === total) {
        arr.push(current);
        return;
    }

    if (open > 0) {
        generateParenthesis_helper(arr, current + '(', open - 1, close, total);
    }
    if (close > open) {
        generateParenthesis_helper(arr, current + ')', open, close - 1, total);
    }
};
