/**
 * Given an array nums of distinct integers, return all the possible permutations.
 * You can return the answer in any order.
 */

/**
 * @param number[] nums
 * @return number[][]
 */
const permute = (nums) => {
    if (nums.length === 1) return [nums];
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const left = nums.slice(0, i);
        const right = nums.slice(i + 1);
        const permutations = permute([...left, ...right]);
        for (const p of permutations) {
            result.push([nums[i], ...p]);
        }
    }
    return result;
};
