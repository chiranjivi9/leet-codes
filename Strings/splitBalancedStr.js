/*
    
    Balanced strings are those who have equal quantity of 'L' and 'R' characters.

    Given a balanced string s split it in the maximum amount of balanced strings.

    Return the maximum amount of splitted balanced strings.


    Example 1:

    Input: s = "RLRRLLRLRL"
    Output: 4
    Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

    link: https://leetcode.com/problems/split-a-string-in-balanced-strings/
 */

 const balancedStringSplit = (str) => {
    let lCount = 0; 
    let rCount = 0; 
    let result = 0;

    // iterate over the string;

    for(let i = 0; i<str.length; i++) {
        if (str[i] === 'L') {
            lCount ++;
        } else {
            rCount ++
        }

        if(lCount === rCount) result ++;
    }

    console.log('Result', result);
    return result;
 };


 // Test Case #1
 balancedStrSplit('RLRRLLRLRL');

 // Test Case #2
 balancedStrSplit("LLLLRRRR");