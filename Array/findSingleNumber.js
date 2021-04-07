/*
    Given a non-empty array of integers nums, every element appears 
    twice except for one. Find that single one.

    Follow up: Could you implement a solution with a linear runtime
    complexity and without using extra memory?

    Example 1:
    Input: nums = [2,2,1]
    Output: 1

    Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4

*/


const singleNumber = function(nums) {
    let numberMap = new Map();
    let output = 0;
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
            console.log('Thee single number is: ', key);
            output = key;
        }
    });

    return output;
};


singleNumber([2,2,1]); // output: 1

singleNumber([4,1,2,1,2]); // output: 4