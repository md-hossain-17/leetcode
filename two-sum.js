/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (map.has(difference)) {
            return [map.get(difference), i];
        }
        map.set(nums[i], i);
    }
}
