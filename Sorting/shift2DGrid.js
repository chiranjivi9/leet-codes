/*
    Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

    In one shift operation:

    Element at grid[i][j] moves to grid[i][j + 1].
    Element at grid[i][n - 1] moves to grid[i + 1][0].
    Element at grid[m - 1][n - 1] moves to grid[0][0].
    Return the 2D grid after applying shift operation k times.

    Example 1:
    Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
    Output: [[9,1,2],[3,4,5],[6,7,8]]
*/

let shiftGrid = (grid, k) => {
    let tempArr = [];
    let finalArr = [];
    let arrayLen = 0;

    grid.forEach((item) => {
        arrayLen = item.length;
        item.forEach((element) => {
            tempArr.push(element);
        });
    });
    
    for(let i = 0; i < k; i++) {
        poppedItem = tempArr.pop();
        tempArr.unshift(poppedItem);
    }

    let someArr = [];
    count = 0;
    tempArr.forEach((item) => {
        someArr.push(item);
        
        if (count === arrayLen - 1) {
            finalArr.push(someArr);
            count -= arrayLen - 1;
            someArr = [];
        } else {
            count++;
        }
    })
    console.log('Final', finalArr);
    return finalArr;
};


shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 1); 
// Output: [ [ 9, 1, 2 ], [ 3, 4, 5 ], [ 6, 7, 8 ] ]

shiftGrid([[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]],4)
// Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

shiftGrid([[1,2,3],[4,5,6],[7,8,9]], 9);
// Output: [[1,2,3],[4,5,6],[7,8,9]]