/*
    We are given two strings, A and B.

    A shift on A consists of taking string A and moving the leftmost character to the rightmost position. 
    For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can 
    become B after some number of shifts on A.

    Example 1:
    Input: A = 'abcde', B = 'cdeab'
    Output: true

    link: https://leetcode.com/problems/rotate-string/
 */

 const rotateString =  (A, B) => {
	if (A === B) return true;
	if (A.length === 0 || A.length > B.length) return false;

	let aLength = A.length - 1,
		BB = B + B;

	for (var i = 0; i <= BB.length - 1 - aLength; i++) {
		let s = BB.substring(i, i + aLength + 1);
        console.log('ss',i + aLength + 1, s);
		if (s === A) {
            console.log('true');
            return true
        };
	}

	return false;
};

rotateString('abcde', 'cdeab')