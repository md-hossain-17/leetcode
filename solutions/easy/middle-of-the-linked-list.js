/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param ListNode head
 * @return ListNode
 */
const middleNode = (head) => {
    let size = 0;
    let pointer = head;
    while (pointer !== null) {
        pointer = pointer.next;
        size++;
    }
    let middleIndex = Math.floor(size / 2);

    pointer = head;
    for (let i = 0; i < middleIndex; i++) {
        pointer = pointer.next;
    }
    return pointer;
};
