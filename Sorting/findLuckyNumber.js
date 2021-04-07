/*

    Given an array of integers arr, a lucky integer is an integer which has a
    frequency in the array equal to its value.

    Return a lucky integer in the array. If there are multiple lucky integers 
    return the largest of them. If there is no lucky integer return -1.

    Example 1:
    Input: arr = [2,2,3,4]
    Output: 2
    Explanation: The only lucky number in the array is 2 because frequency[2] == 2.
*/

let findLucky = (arr) => {
    let hm = new Map();

    for(let i = 0; i < arr.length; i++) {
        if(!hm.has(arr[i])) {
            hm.set(arr[i], 1);
        } else {
            let temp = hm.get(arr[i]) + 1;
            hm.set(arr[i], temp);
        }
    }

    let highest = -1;

    hm.forEach((value, key) => {
        if(value === key && key > highest) {
            highest = key;
        }
    })
    
    console.log('Highest: ', highest);
    return highest;
};


findLucky([2,2,3,4]); // 2
findLucky([2,2,2,3,3]); // 0
findLucky([1,2,2,3,3,3]); // 3