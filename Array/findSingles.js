/*
    Given an integer array nums, in which exactly two elements
    appear only once and all the other elements appear exactly twice.
    Find the two elements that appear only once. You can return the answer in any order.

    Follow up: Your algorithm should run in linear runtime complexity.
    Could you implement it using only constant space complexity?

    

    Example 1:
    Input: nums = [1,2,1,3,2,5]
    Output: [3,5]
    Explanation:  [5, 3] is also a valid answer.
    
    Example 2:
    Input: nums = [-1,0]
    Output: [-1,0]

*/

const singleNumber = function(nums) {
    let numberMap = new Map();
    let output = [];
    for(let i = 0; i < nums.length; i++){
        if(numberMap.has(nums[i])) {
            let temp = numberMap.get(nums[i]) + 1;
            numberMap.set(nums[i], temp);
        } else {
            numberMap.set(nums[i], 1);
        }
    }

    numberMap.forEach((value, key) => {
        if(value === 1) {
            output.push(key);
        }
    });
    console.log('The single number set is: ', output);
    return output;
};


singleNumber([1,2,1,3,2,5]); // output: [3, 5]

singleNumber([-1,0]); // output: [-1, 0]