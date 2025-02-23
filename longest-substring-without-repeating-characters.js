/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    const set = new Set();
    let start = 0;
    let end = 0;

    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, end - start);
        } else {
            set.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};
