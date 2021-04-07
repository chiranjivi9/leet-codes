/*
    Given an array nums containing n distinct numbers in the range [0, n],
    return the only number in the range that is missing from the array.

    Follow up: Could you implement a solution using only O(1) extra space
    complexity and O(n) runtime complexity?

    Example 1:
    Input: nums = [3,0,1]
    Output: 2
    Explanation: n = 3 since there are 3 numbers,
        so all numbers are in the range [0,3]. 2 is
        the missing number in the range since it does not appear in nums.
 
*/


const missingNumber = function(nums) {
    let expectedSum = 0;
    let actualSum = 0;
    for(let i = 0; i < nums.length; i++) {
        expectedSum += i;
        actualSum += nums[i];
    }
    expectedSum += nums.length
    
    console.log(expectedSum - actualSum);
    return expectedSum - actualSum;
};

missingNumber([3,0,1]);

missingNumber([9,6,4,2,3,5,7,0,1]);

missingNumber([0,1]);