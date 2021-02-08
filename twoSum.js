/* 
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    

    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].

    link: https://leetcode.com/problems/two-sum/
*/

const twoSum = (nums, target) => {
    let temp = new Map();
    for (let i = 0; i < nums.length; i++) {
        console.log([i, temp.get(nums[i])])
        if (temp.has(target - nums[i])) {
            
            return [i, temp.get(target - nums[i])];
        }
        temp.set(nums[i], i);
        console.log(temp.size)
    }
};

twoSum([2,7,11,15], 9)

