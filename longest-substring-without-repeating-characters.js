/**
 * Given a string s, find the length of the longest substring without repeating characters.
 */

/**
 * @param string s
 * @return number
 */
const lengthOfLongestSubstring = (s) => {
    let maxLength = 0;
    const set = new Set();
    let left = 0;
    let right = 0;
    while (right < s.length) {
        const rightChar = s.charAt(right);
        if (set.has(rightChar)) {
            maxLength = Math.max(maxLength, right - left);
            set.delete(s.charAt(left));
            left++;
        } else {
            set.add(rightChar);
            right++;
        }
    }
    return Math.max(maxLength, right - left);
};
