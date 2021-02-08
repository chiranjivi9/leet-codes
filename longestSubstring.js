/**
 *  Given a string, return the length of the longest substring without repeating characters.
 * 
 * Examples:
 * 
 * - Given "abcabca", the longest substring is "abc", with a length of  3.
 * 
 * - Given "aaaaa", athe longest substring  is "a", with a length of 1.
 * 
 * - Given "abbcdb" , the longest substring  is "bcd", with a length of 3.
 * 
 * 
 * Note that  "abcd" is a subsequence and not a substring.
 **/


const example = (str) => {
    //hashtable
    let hashtable = {};
    //index
    let index = 0;
    //length
    let strLenght = str.length;
    let longestSubStr = 0;
    let strArr = str.split('');
  
    // iterate over the string 
    for(let i = 0; i < strArr.length; i++) {
      // check the hashtable
    if(hashtable[strArr[i]] !== undefined && hashtable[strArr[i]] >= index) {
        index = hashtable[strArr[i]] + 1;                                   
      }
      hashtable[strArr[i]] = i;
      // finding the longest substring;
      longestSubStr = Math.max(longestSubStr, (i - index + 1));
    }
  
    console.log('longest substr ', str, '- ', longestSubStr);
    return longestSubStr;
  }
  
  example('abcabca'); // 3
  example('aaaaaa'); // 1
  example('abbcdb'); // 3
  example('abcdefghijkxx'); // 12
