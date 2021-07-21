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

function printLeftView(root) {
    if (!root) return [];
    let res = [];
    let q = []; //shift, push
    q.push(root);

    while (q.length) {
        let numNodes = q.length;
        let temp = [];
        // iterate for node's children;
        for (let i = 0; i < numNodes; i++) {
            let n = q.shift();
            temp.push(n.val);

            if (n.left) {
                q.push(n.left);
            }

            if (n.right) {
                q.push(n.right);
            }
        }

        res.push(temp[0]);
    }
    console.log(res);
    return res;
}


let tree = new Tree();
tree.root = new Node(10);
tree.root.left = new Node(6);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);
tree.root.right.left = new Node(12);
tree.root.right.right = new Node(24);
console.log(tree);
printLeftView(tree.root);

//         10
//     6        15
//   3    7   12   24 

// output = 10 6 3