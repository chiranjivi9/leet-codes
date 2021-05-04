/*
    You are given two binary trees root1 and root2.

    Imagine that when you put one of them to cover the other,
    some nodes of the two trees are overlapped while the others are not.
    You need to merge the two trees into a new binary tree.
    The merge rule is that if two nodes overlap, then sum node values up as the new
    value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

    Return the merged tree.

    Note: The merging process must start from the root nodes of both trees.

    Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
    Output: [3,4,5,5,4,null,7]

*/


const mergeTrees = function(root1, root2) {
    let i = 0;
    let j = 0;
    let output = [];

    while(i < root1.length && j < root2.length) {
        if(root1[i] === null) {
            output.push(root2[j])
            j++;
        } else if(root2[j] === null) {
            output.push(root1[i]);
            i++;
        } else {
            output.push(root1[i] + root2[j]);
            i++;
            j++;
        }
    }

    if(j < root2.length) {
        while(j < root2.length) {
            output.push(root2[j]);
            j++;
        }
    }

    console.log(output);
    
    return output;
};


mergeTrees(root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]);