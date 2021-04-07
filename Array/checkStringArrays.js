/*
    Given two string arrays word1 and word2, return true if the two arrays represent 
    the same string, and false otherwise.

    A string is represented by an array if the array elements concatenated in order forms the string.


    Example 1:
    Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
    Output: true
    Explanation:
    word1 represents string "ab" + "c" -> "abc"
    word2 represents string "a" + "bc" -> "abc"
    The strings are the same, so return true.
*/


let arrayStringsAreEqual = (word1, word2) => {
    let word1ToStr = word1.toString().replace(/,/g, '');
    let word2ToStr = word2.toString().replace(/,/g, '');

    if(word1ToStr === word2ToStr) {
        console.log('true');
        return true;
    }
    return false;
};


arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]);
arrayStringsAreEqual(["ab", "c"], ["a", "cb"]);