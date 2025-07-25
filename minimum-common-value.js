/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function getCommon(nums1, nums2) {
    let p1 = 0;
    let p2 = 0;
    while (p1 !== nums1.length && p2 !== nums2.length) {
        if (nums1[p1] === nums2[p2]) {
            return nums1[p1];
        }
        if (nums1[p1] < nums2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }
    return -1;
}
