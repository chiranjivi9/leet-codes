/*
    Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
    Return the array in the form [x1,y1,x2,y2,...,xn,yn].

    Example 1:
    Input: nums = [2,5,1,3,4,7], n = 3
    Output: [2,3,5,4,1,7] 
    Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
*/

const shuffle = (nums, n) => {
    if(nums.length%2 !== 0) {
        console.log('Array length should be even');
        return;
    }
    if(n < 1 || n > 500) {
        console.log('n should be greater than 1 and less than 500.')
        return;
    }
    let shuffledArray = [];
    for(let i = 0; i < nums.length; i++) {
        if (i + n < nums.length) {
            shuffledArray.push(nums[i]);
            shuffledArray.push(nums[i + n])
        }
    }

    console.log('Output', shuffledArray);
    return shuffledArray;
};

// Test case #1
shuffle([2,5,1,3,4,7], 3); // Output: [2,3,5,4,1,7]

// Test case #2
shuffle([1,2,3,4,4,3,2,1], 4); // Output: [1,4,2,3,3,2,4,1]

// Test case #3
shuffle([1,1,2,2], 2); // Output: [1,2,1,2]

shuffle([1,1,2,2,1], 2);