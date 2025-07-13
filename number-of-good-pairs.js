/**
 * @param {number[]} nums
 * @return {number}
 */
function numIdenticalPairs(nums) {
    let result = 0;
    const visitedNumbers = new Map();
    for (const n of nums) {
        if (!visitedNumbers.has(n)) {
            visitedNumbers.set(n, 1);
        } else {
            result += visitedNumbers.get(n);
            visitedNumbers.set(n, visitedNumbers.get(n) + 1);
        }
    }
    return result;
}
