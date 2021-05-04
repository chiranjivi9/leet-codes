class Node{
    constructor(val){
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

let globalAns = []

function helper(node, temp, res) {
    //base:
    if(!node.left && !node.right){
        temp.push(node.val);
        // console.log([...temp])
        res.push([...temp]);
        temp.pop();
    }

    if(node.left){
        temp.push(node.val);
        helper(node.left, temp, res);
        temp.pop();
    }

    if(node.right) {
        temp.push(node.val);
        helper(node.right, temp, res);
        temp.pop();
    }
    return res;
}

    //             10
    //     6                 15
    // 3       7       12          24
    // output [[10,6,3], [10,6,7], [10,15,12], [10,15,24]]
function overAll(root) {
    if(!root) return [[]];
    let res = [];
    let temp = [];
    helper(root, temp, res);
    console.log(res);
    return res;
}


let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.right = new Node(15)
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7)
tree.root.right.left = new Node(12);
tree.root.right.right = new Node(24)

overAll(tree.root);