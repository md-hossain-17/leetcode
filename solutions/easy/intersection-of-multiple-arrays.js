/**
 * Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.
 */

/**
 * @param number[][] nums
 * @return number[]
 */
const intersection = (nums) => {
    const map = new Map();
    for (const numsArr of nums) {
        for (const num of numsArr) {
            const value = map.has(num) ? map.get(num) + 1 : 1;
            map.set(num, value);
        }
    }

    const result = [];
    for (const [k, v] of map.entries()) {
        if (v === nums.length) {
            result.push(k);
        }
    }
    return result.sort((a, b) => a - b);
};
