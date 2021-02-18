/*
    Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

    A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

        0 <= i, j < nums.length
        i != j
        |nums[i] - nums[j]| == k
        Notice that |val| denotes the absolute value of val.

    
    Example 1:

    Input: nums = [3,1,4,1,5], k = 2
    Output: 2
    Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
    Although we have two 1s in the input, we should only return the number of unique pairs.

    link: https://leetcode.com/problems/k-diff-pairs-in-an-array/

*/

const findPairs = (nums, k) => {
    let count = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if ( i != j && Math.abs(nums[i] - nums[j]) === k) {
                count += 1;
            };
        };
    };
    console.log('Count: ', count);
    return count;
};



// findPairs([3,1,4,1,5], 2); // output: 2

// findPairs([1,2,3,4,5], 1); // output: 4

// findPairs([1,2,3,4,5], 1); // output: 4

// findPairs([1,3,1,5,4], 0); // output: 1

findPairs([1,2,4,4,3,3,0,9,2,3], 3); // output: 2

// findPairs([-1,-2,-3], 1); // output: 2
