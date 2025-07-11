/**
 * @param {string} word
 * @return {boolean}
 */
function detectCapitalUse(word) {
    let numUppercaseChars = 0;
    for (const c of word) {
        if (c === c.toUpperCase()) {
            numUppercaseChars++;
        }
    }
    return (
        numUppercaseChars === word.length ||
        numUppercaseChars === 0 ||
        (numUppercaseChars === 1 && word[0] === word[0].toUpperCase())
    );
}
