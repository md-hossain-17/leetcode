/**
 * @param {number[]} nums
 * @return {number}
 */
function minIncrementForUnique(nums) {
    nums.sort((a, b) => a - b);
    let numMoves = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) continue;
        numMoves += nums[i - 1] + 1 - nums[i];
        nums[i] = nums[i - 1] + 1;
    }
    return numMoves;
}
