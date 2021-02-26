/*
    Given a positive integer, return its corresponding column title as 
    appear in an Excel sheet.

    For example:
        1 -> A
        2 -> B
        3 -> C
        ...
        26 -> Z
        27 -> AA
        28 -> AB 
        ...
    Example 1:
    Input: 1
    Output: "A"
*/

// first subtract 26 and then divide and rpund the number 
// second the number mod 26

const convertToTitle = function(n) {
    let alphaStr = 'ZABCDEFGHIJKLMNOPQRSTUVWXY'
    let alphaArr = alphaStr.split('');
    let s = '';

    while(n > 0) {
        let r = n % 26;
        s=alphaArr[r]+s;
        n=parseInt(n/26)-(r==0);
         
     }
     return s;
};

convertToTitle(701);
