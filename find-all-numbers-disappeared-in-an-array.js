/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findDisappearedNumbers(nums) {
    for (const n of nums) {
        const index = Math.abs(n) - 1;
        if (nums[index] < 0) continue;
        nums[index] *= -1;
    }

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) continue;
        result.push(i + 1);
    }
    return result;
}
