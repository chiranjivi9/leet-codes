class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.rigth = null;
    }
}

class Tree {
    constructor() {
        this.root= null;
    }
}

// function isBST(root) {
//     //DFS pre-order
//     // console.log(root)
//     if(root === null) {
//         return true;
//     }
//     let data = [];
//     helper(root);
//     function helper(node) {
//         data.push(node.val);
//         if(node.left_ptr && node.left_ptr.val < node.val){
//             console.log('node.left_ptr < node.val ', node.left_ptr && !(node.left_ptr.val < node.val))
            
//             helper(node.left_ptr)
//         } else {
//             console.log('FALSE left unbalanced ', data);
//             return false;
//         }
        
//         if(node.right_ptr && node.right_ptr.val > node.val) {
//             console.log('node.right_ptr > node.val ',node.right_ptr.val > node.val)
            
//             helper(node.right_ptr);
//         } else {
//             console.log('FALSE right unbalanced ', data);
//             return false;
//         }
//     }


//     console.log('true ', data);
//     return true;
// }

function isBST(root) {
    function helper(root,min, max) {
      
      if(!root){
          return true;
      }
     
       if(root.val > max || root.val< min){
           return false;
       }
      let isLeft = helper(root.left_ptr,min,root.val);
      let isRight = helper(root.right_ptr,root.val,max);
      
      if(isLeft && isRight) {
          return true;
      }
      
      return false;
   }
   return helper(root,-Infinity, Infinity)
}


let tree = new Tree()
tree.root = new Node(10);
tree.root.left = new Node(99);
tree.root.right = new Node(15);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(7);
tree.root.right.left = new Node(12);
tree.root.right.right = new Node(21);

isBST(tree.root);