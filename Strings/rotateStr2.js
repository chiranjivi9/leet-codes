/*
    Given a string and an integer k, you need to reverse the first k characters.
    If there are less than k characters left, reverse all of them.
    Example:
    Input: s = "abcdefg", k = 2
    Output: "bacdefg"
*/

const reverseStr = function(str, k) {
    let strArr = str.split('');
    let tempArr = [];
    let output = '';

    for(let i = 0; i < k; i++) {
        tempArr.push(strArr[i]);
    }
    output = tempArr.reverse().concat(strArr.slice(k)).join('');
    console.log(output);
    return output;
};


reverseStr('abcdefg', 2) // Output: bacdefg

reverseStr('uvwxyzabc', 4); // Output: xwvuyzabc