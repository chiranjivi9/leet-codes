/*
    You are given two strings word1 and word2. Merge the strings by adding letters in alternating order,
    starting with word1. If a string is longer than the other,
    append the additional letters onto the end of the merged string.

    Return the merged string.

    Example 1:
    Input: word1 = "abc", word2 = "pqr"
    Output: "apbqcr"
    Explanation: The merged string will be merged as so:
    word1:  a   b   c
    word2:    p   q   r
    merged: a p b q c r
*/

const mergeAlternately = function(word1, word2) {
    let str1 = word1.split('');
    let str2 = word2.split('');
    let mergedArr = [];
    let longestLen = str1.length > str2.length ? str1.length : str2.length;
    for(let i = 0; i < longestLen; i++) {
        if(str1[i] !== undefined) {
            mergedArr.push(str1[i]);
        }

        if(str2[i] !== undefined) {
            mergedArr.push(str2[i]);
        }
    }

    console.log('mergedArr', mergedArr.join(''));
    return mergedArr.join('');
};

mergeAlternately('abc', 'pqr');

mergeAlternately('ab', 'pqrs');