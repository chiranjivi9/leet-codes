function validate(board) {

    
//     //should validate for duplicate values in a row, column and 3x3 box grid.
//   const rowNColSize = 9;
  
//   for(let row = 0; row < rowNColSize; row++) {
    
//     board[row].sort();
    
//     // check for each column for the current row
//     for(let col = 0; col < rowNColSize; col++) {
      
//       let currentValue = board[row][col] === null ? 0 : board[row][col];
//       // board[row][col] = board[row][col] === null ? 0 : board[row][col]
      
//       if(!Number.isInteger(currentValue)) return false;
      
//       let nextValue = board[row][col + 1] === undefined
//                       ? 0 
//                       : board[row][col + 1];
      
//       // check if value exists and is a valid number
//       if(!(currentValue >= 0 && currentValue <= 9)) {

//         console.log('Value entered is greater than 9 or less than 0.',
//                     'currentValue->', currentValue);
        
//         return false;
//       }
      
//       //check for duplicates
//       if(col !== 8 && currentValue === nextValue) {
//         console.log('Value already present.', 'col ->', col,
//                     ', currentValue ->', currentValue, ', nextValue ->', nextValue);
        
//         return false;
//       }
//     }
//   }

//   return true;

////////////////////


  
    const row = new Set();
    const cols = new Map();
    const subBoxes = new Map(); 
    const n = 3;

    for (let i = 0; i < board.length; i++) {
    
        let  x_i = Math.floor(i/n);
        
        if (!subBoxes.has(x_i)) subBoxes.set(x_i, new Map());
        row.clear();
    
        for (let j = 0; j < board[i].length; j++) {
        
            let x_j = Math.floor(j/n);

            if (!subBoxes.get(x_i).has(x_j)) {
                subBoxes.get(x_i).set(x_j, new Set());
            }
        
            if (!cols.has(j)) {
            
                cols.set(j, new Set());
            }
        
            if (row.has(board[i][j])) {
                console.log('FALSE 1 -> ', board[i][j]);

                return false;
            }
        
            if (cols.get(j).has(board[i][j])) {
                console.log('FALSE 2');
                return false;
            }
            if (subBoxes.get(x_i).get(x_j).has(board[i][j])) {
                console.log('FALSE 3');
                return false;
            }
        
            if (board[i][j] !== null) {
                if(board[i][j] < 0 || board[i][j] > 9) {
                    console.log('FALSE 4');
                    return false;
                }

                row.add(board[i][j]);
                cols.set(j, cols.get(j).add(board[i][j]));
                subBoxes.get(x_i).get(x_j).add(board[i][j]);
            }
        }
    }
    console.log('TRUE');
    console.log('validated rows: ', row, subBoxes);
    console.log('validated columns: ', cols, subBoxes);
    console.log('validated sub-boxes(3x3): ',subBoxes);
    return true; 

}









validate([
     [2,9,5,7,4,3,8,6,1],
     [4,3,1,8,6,5,9,2,7],
     [8,7,6,1,9,2,5,4,3],
     [3,8,7,4,5,9,2,1,6],
     [6,1,2,3,8,7,4,9,5],
     [5,4,9,2,1,6,7,3,8],
     [7,6,3,5,2,4,1,8,9],
     [9,2,8,6,7,1,3,5,4],
     [1,5,4,9,3,8,6,7,2]
    ])

// validate([
//     [1, 1, 1, 2, 2, 2, 3, 3, 3],
//     [1, 1, 1, 2, 2, 2, 3, 3, 3],
//     [1, 1, 1, 2, 2, 2, 3, 3, 3],
//     [4, 4, 4, 5, 5, 5, 6, 6, 6],
//     [4, 4, 4, 5, 5, 5, 6, 6, 6],
//     [4, 4, 4, 5, 5, 5, 6, 6, 6],
//     [7, 7, 7, 8, 8, 8, 9, 9, 9],
//     [7, 7, 7, 8, 8, 8, 9, 9, 9],
//     [7, 7, 7, 8, 8, 8, 9, 9, 9]
// ])

// validate([
//     [null, null, null, null, null, null, null, null, null],
//     [null, null, null, null, null, 3, null, 8, 5],
//     [null, null, 1, null, 2, null, null, null, null],
//     [null, null, null, 5, null, 7, null, null, null],
//     [null, null, 4, null, null, null, 1, null, null],
//     [null, 9, null, null, null, null, null, null, null],
//     [5, null, null, null, null, null, null, 7, 3],
//     [null, null, 2, null, 1, null, null, null, null],
//     [null, null, null, null, 4, null, null, null, 9]
// ])