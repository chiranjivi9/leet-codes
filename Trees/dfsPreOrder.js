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

function dfsPreOrder(root) {
    let data = [];
    let current = root
    function helper(node) {
        data.push(node.val)
        if(node.left) helper(node.left);
        if(node.right) helper(node.right);
    }

    helper(current);
    console.log('Pre-order data: ', data);
}

let tree = new Tree()
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);
tree.root.right.left = new Node(12);
tree.root.right.right = new Node(21);

dfsPreOrder(tree.root);

        //             10
        //     6                 15
        // 3       7       12          21
        
        // [10,  6,  3, 7, 15, 12, 21]