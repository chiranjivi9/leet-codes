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
    //base 
    if (!root) return [];

    let res = [];
    dfs(root, 0, []);

    function dfs(node, sumSoFar, slate) {
        // dfs base : leaf node
        if (!node.left && !node.right) {
            if (target === sumSoFar + node.val) {
                slate.push(node.val);
                // console.log(slate);
                res.push([...slate]);
                slate.pop();
            }
        }

        //internal
        sumSoFar += node.val;
        slate.push(node.val);
        if (node.left) {
            dfs(node.left, sumSoFar, slate);
        }

        if (node.right) {
            dfs(node.right, sumSoFar, slate);
        }

        slate.pop();
    }

    console.log(res);
    return res;
}

let tree = new Tree();
tree.root = new Node(5);
tree.root.left = new Node(4);
tree.root.right = new Node(8)
tree.root.left.left = new Node(11);
tree.root.left.right = new Node(7);
tree.root.left.left.right = new Node(2);
tree.root.right.left = new Node(13);
tree.root.right.right = new Node(4);
tree.root.right.right.left = new Node(5);
tree.root.right.right.right = new Node(1);

findSumPath(tree.root, 22);

//                5
//           /         \
//         4            8
//        /          /    \
//     11          13      4
//   /    \              /   \
// 7       2            5     1