/*

    Level Order Traversal Of A Binary Tree

    Given a binary tree, list the label of the nodes, level by level from left to right. 

            2
        5        4
    0     1   3     6
    [ [2], [5, 4],[0, 1, 3, 6] ]
*/

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

function level_order_traversal(root){
    if(!root) return [];
    
    let node = root;
    let data = []
    let q = [];
    q.push(node);

    while(q.length) {
        // let temp = [];
        node = q.shift();
        // temp.push(node.val);
        if(node.left){
            q.push(node.left);
        }

        if(node.right) {
            q.push(node.right);
        }

        data.push(node.val);
    }
    console.log(data);
    return data;
}


let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.right = new Node(15)
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7)
tree.root.right.left = new Node(12);
tree.root.right.right = new Node(24)


level_order_traversal(tree.root);