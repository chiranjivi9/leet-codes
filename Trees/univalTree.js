// using Depth First Search

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left_ptr = null;
        this.right_ptr = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
}

let globalCount = 0;
function findSingleValueTree(root) {
    if(root === null) {
        console.log('root === null returning 0.');
        return 0;
    }

    dfs(root);
    console.log('Global count', globalCount);
    return globalCount;
}

function dfs(node){
    // Base condition: leaf are null
    if(node.left_ptr === null && node.right_ptr === null) {
        globalCount += 1;
        console.log('node.left_ptr === null && node.right_ptr === null => true',);
        return true;
    }

    // Internal Nodes
    let iAmUnival  = true;
    if(node.left_ptr !== null) {
        let leftValue = dfs(node.left_ptr)
        if(leftValue === false || node.val !== node.left_ptr.val) {
            iAmUnival = false;
        }
    }

    if(node.right_ptr !== null) {
        let rigthValue = dfs(node.right_ptr);
        if(rigthValue === false || node.val !== node.right_ptr.val) {
            iAmUnival = false;
        }
    }

    if(iAmUnival === true) {
        globalCount += 1;
    }
    console.log('iAmUnival ', iAmUnival);
    return iAmUnival;
}


let tree = new BST();
tree.root = new TreeNode(10);
tree.root.left_ptr = new TreeNode(7);
tree.root.right_ptr = new TreeNode(22);


findSingleValueTree(tree.root);
