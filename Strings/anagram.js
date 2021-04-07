/*
    Given two strings s and t , write a function to determine if t is an anagram of s.

    Example 1:

    Input: s = "anagram", t = "nagaram"
    Output: true
*/

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false; //Edge

    let sMap = {};
    let tMap = {};
    
    for (let char of s) sMap[char] = sMap[char] + 1 || 1;
    
    for (let char of t) tMap[char] = tMap[char] + 1 || 1;
        
    for (let key in sMap){
        if (sMap[key] !== tMap[key]) return false; //Char freq must match between s and t for there to be a valid anagram
    }
    return true;
};

isAnagram('anagram', 'nagaram')
isAnagram('rat', 'car');