/**
 * 
 * Given integer array nums, return the third maximum number in this array. If the third maximum does not exist, return the maximum number.

    Example 1:
    Input: nums = [3,2,1]
    Output: 1
    Explanation: The third maximum is 1.
 */

const thirdMax = function(nums) {
    let numSet = new Set([...nums]);
    let uniqArr = [];

    numSet.forEach((item) => {
        uniqArr.push(item);
    })
    uniqArr.sort((a,b) => {return a-b});
    
    if(uniqArr.length < 3) {
        console.log(uniqArr[uniqArr.length - 1]);
        return uniqArr[uniqArr.length - 1];
    }
    console.log(uniqArr[uniqArr.length - 3]);
    return uniqArr[uniqArr.length - 3];
};
thirdMax([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6]);
thirdMax([3,2,1]); // should return 1
thirdMax([2,1]); // should return 2
thirdMax([2,2,3,1]); //