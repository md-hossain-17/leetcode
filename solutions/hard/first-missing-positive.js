/**
 * Given an unsorted integer array nums, return the smallest missing positive integer.
 * You must implement an algorithm that runs in O(n) time and uses constant extra space.
 */

/**
 * @param number[] nums
 * @return number
 */
const firstMissingPositive = (nums) => {
    for (const [index, num] of nums.entries()) {
        if (num <= 0) {
            nums[index] = nums.length + 1;
        }
    }

    for (const num of nums) {
        const index = Math.abs(num) - 1;
        if (index < nums.length) {
            nums[index] = Math.abs(nums[index]) * -1;
        }
    }

    for (const [index, num] of nums.entries()) {
        if (num >= 0) {
            return index + 1;
        }
    }
    return nums.length + 1;
};
