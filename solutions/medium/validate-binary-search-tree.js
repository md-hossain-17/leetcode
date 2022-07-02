/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 *      The left subtree of a node contains only nodes with keys less than the node's key.
 *      The right subtree of a node contains only nodes with keys greater than the node's key.
 *      Both the left and right subtrees must also be binary search trees.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param TreeNode root
 * @return boolean
 */
const isValidBST = (root) => {
    return isValidBST_helper(
        root,
        Number.NEGATIVE_INFINITY,
        Number.POSITIVE_INFINITY
    );
};

/**
 * @param TreeNode root
 * @param number leftBoundary
 * @param number rightBoundary
 * @return boolean
 */
const isValidBST_helper = (root, leftBoundary, rightBoundary) => {
    if (root === null) return true;
    if (root.val >= rightBoundary || root.val <= leftBoundary) return false;
    return (
        isValidBST_helper(root.left, leftBoundary, root.val) &&
        isValidBST_helper(root.right, root.val, rightBoundary)
    );
};
