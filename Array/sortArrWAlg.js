/**
 * 
    Given an array of integers nums, sort the array in ascending order.
    Refrain from using inbuilt functions.
    

    Example 1:

    Input: nums = [5,2,3,1]
    Output: [1,2,3,5]
 */

let SOMEARR = [];

function sortArray(nums) {
    if(nums.length < 1){
        return [];
    };
    let leftArr = [];
    let rightArr = [];
    let pivot = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] < pivot) {
            leftArr.push(nums[i]);
        } else {
            rightArr.push(nums[i]);
        };
    };


    console.log('leftArr', leftArr, ' ', 'rightArr', rightArr);
    console.log([].concat(sortArray(leftArr), pivot, sortArray(rightArr)));
    // return [].concat(sortArray(leftArr), pivot, sortArray(rightArr));
};


sortArray([5,2,3,1]);

sortArray(element);
