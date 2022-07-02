/**
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param ListNode list1
 * @param ListNode list2
 * @return ListNode
 */
const mergeTwoLists = (list1, list2) => {
    const head = new ListNode(0, null);
    let tail = head;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    while (list1 !== null) {
        tail.next = list1;
        tail = tail.next;
        list1 = list1.next;
    }
    while (list2 !== null) {
        tail.next = list2;
        tail = tail.next;
        list2 = list2.next;
    }

    return head.next;
};
