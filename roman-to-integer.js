/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const symbolValueMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const currValue = symbolValueMap[s[i]];
        const nextValue = symbolValueMap[s[i + 1]];
        if (currValue < nextValue) {
            total -= currValue;
        } else {
            total += currValue;
        }
    }
    return total;
};
