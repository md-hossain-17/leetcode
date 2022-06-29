/**
 * You are given an array of strings words (0-indexed).
 * In one operation, pick two distinct indices i and j, where words[i] is a non-empty string, and move any character from words[i] to any position in words[j].
 * Return true if you can make every string in words equal using any number of operations, and false otherwise.
 */

/**
 * @param string[] words
 * @return boolean
 */
const makeEqual = (words) => {
    const map = new Map();
    words.forEach((word) => {
        for (const c of word) {
            if (map.has(c)) {
                map.set(c, map.get(c) + 1);
            } else {
                map.set(c, 1);
            }
        }
    });

    for (const [k, v] of map.entries()) {
        if (v % words.length !== 0) return false;
    }
    return true;
};
