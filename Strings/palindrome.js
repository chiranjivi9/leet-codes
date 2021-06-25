/*
    Given an integer x, return true if x is palindrome integer.
    An integer is a palindrome when it reads the same backward
    as forward. For example, 121 is palindrome while 123 is not.

    Example 1:
    Input: x = 121
    Output: true

    Example 2:
    Input: x = -121
    Output: false
    Explanation: From left to right, it reads -121. From right to
    sleft, it becomes 121-. Therefore it is not a palindrome.
*/


function isPalindrome(n) {
    if( n === 0 || n === 1 || n === 2 || n === 3 ||
        n === 4 || n === 5 || n === 6 || n === 7 ||
        n === 8 || n === 9
    ) return true;
    
    let numArr = n.toString().split('');
    let pt1 = 0;
    let pt2 = numArr.length - 1;

    while(pt1 < pt2) {
        if(numArr[pt1] !== numArr[pt2]) {
            return false;
        } else {
            pt1++; pt2--;
        }
    }

    return true;
}


