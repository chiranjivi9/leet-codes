/*
    You are given a string allowed consisting of distinct characters and an
    array of strings words. A string is consistent if all characters in the string
    appear in the string allowed.

    Return the number of consistent strings in the array words.

    Example 1:
    Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
    Output: 2
    Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
*/


const countConsistentStrings = (allowed, words) => {
    let count = 0;
    for(let word of words) {
        let isAllowed = true;
        for(let letter of word) {
            if(!allowed.includes(letter)){
                isAllowed = false;
            }
        }
        if(isAllowed) count++;
    }
    console.log(count);
    return count;
};

countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]); // 2
countConsistentStrings('cad', ["cc","acd","b","ba","bac","bad","ac","d"]); // 5
countConsistentStrings('', ['def']); // 0
countConsistentStrings('abc', ["a","b","c","ab","ac","bc","abc"]);