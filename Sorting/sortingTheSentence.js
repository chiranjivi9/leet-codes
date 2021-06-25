/*

    A sentence is a list of words that are separated by a single space 
    with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

    A sentence can be shuffled by appending the 1-indexed word position 
    to each word then rearranging the words in the sentence.

    For example, the sentence "This is a sentence" can be shuffled as 
    "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
    Given a shuffled sentence s containing no more than 9 words, 
    reconstruct and return the original sentence.

    

    Example 1:
    Input: s = "is2 sentence4 This1 a3"
    Output: "This is a sentence"
    
    Explanation: Sort the words in s to their original positions 
    "This1 is2 a3 sentence4", then remove the numbers.

*/

let sortSentence = (s) => {
    if(s === '') return '';

    let sArr = s.split(' ');
    
    if(sArr.length === 1) {
        return s.slice(0, s.length-1);
    }

    let obj = {};
    let output = '';
    
    sArr.forEach((item) => {
        obj[item[item.length-1]] = item.slice(0, item.length-1);
    });

    for(const [key,val] of Object.entries(obj)) {
        output += val + ' ';
    }
    
    console.log(output.slice(0, output.length-1));
    return output.slice(0, output.length-1);
}

sortSentence("is2 sentence4 This1 a3")
sortSentence("This1")