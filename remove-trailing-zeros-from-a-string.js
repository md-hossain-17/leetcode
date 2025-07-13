/**
 * @param {string} num
 * @return {string}
 */
function removeTrailingZeros(num) {
    let endIndex = num.length - 1;
    while (num[endIndex] === '0') {
        endIndex--;
    }
    return num.substring(0, endIndex + 1);
}
