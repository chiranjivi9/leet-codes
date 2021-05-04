    //         10
    //     6       15
    //   3   8       20
    // 
    // OUTPUT: 10 6 15 3 8 20


class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor() {
        this.root = null;
    }
}

function bfs(root) {
    console.log('ROOT', root);
    if(root === null) {
        return [];
    }
    let node = root;
    let data = [];
    let q = [];
    q.push(node);
    while(q.length) {
        node = q.shift();
        data.push(node.val);
        console.log('NODE:: ',node)
        
        if(node.left) {
            q.push(node.left); 
        }
        if(node.right) {
            q.push(node.rigth);
        }
        console.log('Q', q);
    }
    console.log('res', data);
}

let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3)

bfs(tree.root);