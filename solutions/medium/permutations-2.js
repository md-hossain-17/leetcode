/**
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 */

/**
 * @param number[] nums
 * @return number[][]
 */
const permuteUnique = (nums) => {
    if (nums.length === 1) return [nums];
    const result = [];
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i]);
            const left = nums.slice(0, i);
            const right = nums.slice(i + 1);
            const permutations = permuteUnique([...left, ...right]);
            for (const p of permutations) {
                result.push([nums[i], ...p]);
            }
        }
    }
    return result;
};
