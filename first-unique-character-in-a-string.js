/**
 * Given a string s, find the first non-repeating character in it and return its index.
 * If it does not exist, return -1.
 */

/**
 * @param string s
 * @return number
 */
const firstUniqChar = (s) => {
    const counterMap = getCounterMap(s);
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (counterMap.get(c) === 1) {
            return i;
        }
    }
    return -1;
};

const getCounterMap = (str) => {
    const map = new Map();
    for (const c of str) {
        if (map.has(c)) {
            map.set(c, map.get(c) + 1);
        } else {
            map.set(c, 1);
        }
    }
    return map;
};
