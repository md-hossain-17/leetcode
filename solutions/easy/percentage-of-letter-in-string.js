/**
 * Given a string s and a character letter, return the percentage of characters in s that equal letter rounded down to the nearest whole percent.
 */

/**
 * @param string s
 * @param character letter
 * @return number
 */
const percentageLetter = (s, letter) => {
    let letterCount = 0;
    for (const c of s) {
        if (c === letter) letterCount++;
    }
    return Math.floor((letterCount / s.length) * 100);
};
