/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * @param number[] nums
 * @param number target
 * @return number[]
 */
const twoSum = (nums, target) => {
    const map = new Map();
    for (const [index, num] of nums.entries()) {
        const difference = target - num;
        if (map.has(difference)) {
            return [map.get(difference), index];
        } else {
            map.set(num, index);
        }
    }
    throw 'No solution found';
};
