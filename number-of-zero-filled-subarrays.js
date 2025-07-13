/**
 * @param {number[]} nums
 * @return {number}
 */
function zeroFilledSubarray(nums) {
    function sumFrom1ToN(n) {
        return (n * (n + 1)) / 2;
    }

    let result = 0;
    let zeroCounter = 0;
    for (const n of nums) {
        if (n === 0) {
            zeroCounter++;
        } else {
            result += sumFrom1ToN(zeroCounter);
            zeroCounter = 0;
        }
    }
    result += sumFrom1ToN(zeroCounter);
    return result;
}
