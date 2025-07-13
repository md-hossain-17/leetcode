/**
 * @param {number[][]} image
 * @return {number[][]}
 */
function flipAndInvertImage(image) {
    for (const row of image) {
        let left = 0;
        let right = row.length - 1;
        while (left <= right) {
            if (row[left] === row[right]) {
                const invertedValue = row[left] === 0 ? 1 : 0;
                row[left] = invertedValue;
                row[right] = invertedValue;
            }
            left++;
            right--;
        }
    }
    return image;
}
