/*
    We are given two strings, A and B.

    A shift on A consists of taking string A and moving the leftmost character to the rightmost position. 
    For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. 
    Return True if and only if A can become B after some number of shifts on A.

    Example 1:
    Input: A = 'abcde', B = 'cdeab'
    Output: true

    Example 2:
    Input: A = 'abcde', B = 'abced'
    Output: false

    link: https://leetcode.com/problems/rotate-string/
*/

const rotateString = function(str1, str2) {
	if (str1.length !== str2.length) return false;
    if((str1 === str2) ||
        (!str1 && !str2)) {
        console.log('true');
        return true;
    }
    let strA = str1.length === 0 ? '' : str1.split('');
    let strB = str2.length === 0 ? '' : str2.split('').toString();

    let strAObj = {};
    for(let i = 0; i < strA.length - 1; i++) {
        let temp = strA.pop();
        strA.unshift(temp);
        let aToStr = strA.toString();
        strAObj[aToStr] = i + 1;
    }

    if(strAObj[strB]) {
        console.log('true');
        return true;
    } else {
        console.log('false');
        return false;
    } 
};

rotateString('', ''); //true

rotateString('', 'def'); // false

rotateString('abcde', 'cdeab'); // true

rotateString('abcde', 'abced'); // false

rotateString("gcmbf", "fgcmb"); // true