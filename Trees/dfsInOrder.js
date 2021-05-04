class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }
}


function dfsInOrder(root) {
    if(root === null){
        return [];
    }

    let res = [];

    function helper(node) {
        if(node.left) helper(node.left);

        res.push(node.val);
        
        if(node.right) helper(node.right);
    }

    helper(root);
    console.log(res);
}


let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.right = new Node(15)
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7)
tree.root.right.left = new Node(12);
tree.root.right.right = new Node(24)

dfsInOrder(tree.root)

    //             10
    //     6                 15
    // 3       7       12          24

    // [3,6,7,10,12,15,24]