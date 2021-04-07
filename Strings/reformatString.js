/*
    Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).
    You have to find a permutation of the string where no letter is followed by another letter and no digit is
    followed by another digit.
    That is, no two adjacent characters have the same type.
    Return the reformatted string or return an empty string if it is impossible to reformat the string.    

    Example 1:
    Input: s = "a0b1c2"
    Output: "0a1b2c"
    Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2",
                "0a1b2c", "0c2a1b" are also valid permutations.
*/

const reformat = (str) => {
    let arrChar = [];
    let arrInt = [];
    let arrOutput = [];
    str.split('').forEach((item) => {
        if(parseInt(item) || parseInt(item) === 0) {
            arrInt.push(item);
        } else {
            arrChar.push(item);
        }
    });
    console.log(arrInt.length, arrChar.length);
    let maxLength = Math.max(arrInt.length, arrChar.length);
    console.log(maxLength);
    for(let i = 0; i < maxLength; i++) {
        arrOutput.push(arrChar[i]);
        arrOutput.push(arrInt[i]);
    }
    console.log('output', arrOutput);
};

// reformat('covid2019'); // output: "c2o0v1i9d"
reformat('ab123');