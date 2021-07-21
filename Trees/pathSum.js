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


function findSumPath(root, target) {
    // base

    if (!root) return false;
    let globalAns = false;
    dfs(root, 0, target);

    console.log(globalAns);

    return globalAns;


    function dfs(node, sumSoFar, target) {
        if (!node.left && !node.right) {
            //leaf node
            if (target === sumSoFar + node.val) {
                globalAns = true;
            }
        }
        sumSoFar += node.val;
        if (node.left) dfs(node.left, sumSoFar, target);

        if (node.right) dfs(node.right, sumSoFar, target);
    }
}

let tree = new Tree();
tree.root = new Node(5);
tree.root.left = new Node(4);
tree.root.right = new Node(8)
tree.root.left.left = new Node(11);
// tree.root.right.left = new Node(13);
// tree.root.right.right = new Node(1);
tree.root.left.left.right = new Node(2);
// console.log(JSON.stringify(tree, null, 2))
findSumPath(tree.root, 22);