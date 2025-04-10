/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    const set = new Set();
    let left = 0;
    let right = 0;
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            right++;
            maxLength = Math.max(maxLength, right - left);
        } else {
            set.delete(s[left]);
            left++;
        }
    }
    return maxLength;
};
