/*
    Given a m x n matrix grid which is sorted in non-increasing order both
    row-wise and column-wise, return the number of negative numbers in grid.

    Example 1:
    Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
    Output: 8
    Explanation: There are 8 negatives number in the matrix.
*/

const countNegatives = (grid) => {
    let flatGrid = grid.flat();
    let count = 0;
    for(let i = 0; i < flatGrid.length; i++) {
        if(flatGrid[i] < 0) {
            count++;
        }
    }
    console.log(count);
    return count;
};


countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])