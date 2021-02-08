/*
    Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
    Return the running sum of nums.

    Example 1:

    Input: nums = [1,2,3,4]
    Output: [1,3,6,10]
    Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/

const runningSum = (numsArr) => {
    let newArray = [];
    let total = 0;
    numsArr.forEach((element) => {
        total += element;
        newArray.push(total);
    })
    console.log('Output: ', newArray);
    return newArray;
};


const nums = [1, 2, 3, 4];
const nums2 = [1,1,1,1,1];
const nums3 = [3,1,2,10,1];
runningSum(nums);
runningSum(nums2);
runningSum(nums3);