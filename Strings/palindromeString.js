/*
    Given a string s, determine if it is a palindrome,
    considering only alphanumeric characters and ignoring cases.

    Example 1:
    Input: s = "A man, a plan, a canal: Panama"
    Output: true
    Explanation: "amanaplanacanalpanama" is a palindrome.

    Example 2:
    Input: s = "race a car"
    Output: false
    Explanation: "raceacar" is not a palindrome.
*/


function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z\d]/g, '');
    let p1 = 0; 
    let p2 =  str.length - 1;

    while ( p1 < p2) {
        if(str[p1] !== str[p2]) {
            return false;
        } else {
            p1++; p2--;
        }
    }

    return true
}

isPalindrome("A man, a plan, a canal: Panama"); // true;
isPalindrome('race a car'); // false