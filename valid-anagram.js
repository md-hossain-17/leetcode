/**
 * @param string s
 * @param string t
 * @return boolean
 */
const isAnagram = (s, t) => {
    const sMap = getCounterMap(s);
    const tMap = getCounterMap(t);
    if (sMap.size !== tMap.size) return false;

    for (const [k, v] of sMap.entries()) {
        if (tMap.get(k) !== v) return false;
    }
    return true;
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
