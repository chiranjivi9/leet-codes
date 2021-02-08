/*
    Given a string s and an integer array indices of the same length.

    The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

    Return the shuffled string.

    Example:
    Input: s = "art", indices = [1,0,2]
    Output: "rat"
    
    link: https://leetcode.com/problems/shuffle-string/
*/

const restoreString = (s, indices) => {
    let result = [];
    s.split("").map((c, index) => {
        result[indices[index]] = c
    });
    console.log('result', result.join(''));
    return result.join("");
};


const s = "aaiougrt";
const indices = [4,0,2,6,7,3,1,5];

restoreString(s, indices);