/*
    Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

    Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

    You may return any answer array that satisfies this condition.

    

    Example 1:
    Input: [4,2,5,7]
    Output: [4,5,2,7]
    Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

    link: https://leetcode.com/problems/sort-array-by-parity-ii/
 */

const sortArrayByParityII = (array) => {
    let eoObj = {
        even: [],
        odd: []
    };
    let parityArr = [];
    array.sort((a, b) => {
        return a - b // should return ascending order.
    });

    array.forEach((item) => {
        if (item % 2 === 0) {
            eoObj.even.push(item);
        } else {
            eoObj.odd.push(item);
        }
    });

    for( let i = 0; i < array.length; i ++ ) {
        if (i % 2 === 0) {
            parityArr.push(eoObj.even.pop());
        } else {
            parityArr.push(eoObj.odd.pop());
        };
    };

    return parityArr;
};

sortArrayByParityII([4,2,5,7]); // [4,7,2,5]

sortArrayByParityII([1,3,5,7,9,6,2,4,6,8]); // [8, 9, 6, 7, 6, 5, 4, 3, 2, 1]