/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = (head, k) => {
    let kthNode = head;
    while (k > 1) {
        kthNode = kthNode.next;
        k--;
    }

    let front = kthNode;
    let reverseKthNode = head;
    while (front.next !== null) {
        front = front.next;
        reverseKthNode = reverseKthNode.next;
    }

    let temp = kthNode.val;
    kthNode.val = reverseKthNode.val;
    reverseKthNode.val = temp;
    return head;
};
