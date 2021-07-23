/*
    Given an array of numbers sorted in ascending order,
    return a height-balanced binary search tree using
    every number from the array.
    Note: height-balanced meaning that the level of
    any node’s two subtrees should not differ by more than one.

    Ex: Given the following nums...
    nums = [1, 2, 3] return a reference to the following tree...
           2
         /  \
        1    3

    Ex: Given the following nums...
    nums = [1, 2, 3, 4, 5, 6] return a reference to the following tree...
            3
           / \
          2   5
         /   / \
        1   4   6

*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function convertToBST(arr) {
    if (arr.length < 1) return 0;

    let rt = helper(arr, 0, arr.length - 1);

    return rt;


    function helper(nums, start, end) {
        if (end < start) {
            return null;
        }

        let mid = Math.floor(start + ((end - start) / 2));
        let tree = new TreeNode(nums[mid]);

        tree.left = helper(nums, start, mid - 1);
        tree.right = helper(nums, mid + 1, end);

        return tree;
    }

}

// console.log(convertToBST([3, 6, 7, 10, 12, 15, 24]));

console.log(convertToBST([-10, -3, 0, 5, 9]));

