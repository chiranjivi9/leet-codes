/*
    This problem was asked by Facebook.

    Given an N by N matrix, rotate it by 90 degrees clockwise.

    For example, given the following matrix:

    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
    you should return:

    [[7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]]
    
    Follow-up: What if you couldn't use any extra space?
*/

function rotateMatrix(matrix) {
    if (matrix.length < 1) return [];
    if (matrix.length !== matrix[0].length) return 'wrong input';

    let length = matrix.length;
    let i = 0;
    let j = length - 1;
    let k = 0;
    let output = [];
    while (k < length) {
        let temp = [];
        while (j >= 0) {
            temp.push(matrix[j][i]);
            j--;
        }
        output.push(temp);
        i++;
        j = length - 1;
        k++;
    }

    return output;
}

let input = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

console.log(rotateMatrix(input));
