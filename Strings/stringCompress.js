/*
    Given an array of characters chars, compress it using the following algorithm:

    Begin with an empty string s. For each group of consecutive repeating characters in chars:

    If the group's length is 1, append the character to s.
    Otherwise, append the character followed by the group's length.
    The compressed string s should not be returned separately, but instead be stored in the input
    character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

    After you are done modifying the input array, return the new length of the array.
    
    *****Follow up: Could you solve it using only O(1) extra space?

    Example 1:

    Input: chars = ["a","a","b","b","c","c","c"]
    Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
    Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
*/


const compress = function(chars) {
    let compressedArr = [];
    let count = 0;
    let tempChar = chars[0];

    if(chars.length === 1) {
        console.log(chars);
        return chars;
    }

    for(let i = 0; i < chars.length + 1; i++) {
        if(chars[i] === tempChar) {
            count += 1;
        } else {
            compressedArr.push(tempChar);
            if(count > 1) compressedArr.push(count.toString());
            count = 1;
            tempChar = chars[i];
        }
    }
    console.log(compressedArr);
    return compressedArr;
};

compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]); // [ 'a', 'b', 12 ]
compress(["a","a","a","b","b","a","a","a","s"]); //   ['a', 3, 'b', 2,'a', 3, 's']
compress(["a"]); // [ 'a' ]
compress(["a","b"]); // [ 'a', 'b' ]
compress(["a","a","b","b","c","c","c"]); // [ 'a', 2, 'b', 2, 'c', 3 ]

