/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = (nums) => {
    let maxLength = 1;
    let currLength = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currLength++;
            maxLength = Math.max(maxLength, currLength);
        } else {
            currLength = 1;
        }
    }
    return maxLength;
};
