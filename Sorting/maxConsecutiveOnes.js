/*
    Given a binary array nums, return the maximum 
    number of consecutive 1's in the array.

    Example 1:
    Input: nums = [1,1,0,1,1,1]
    Output: 3
    Explanation: The first two digits or the last 
    three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

*/


function findMaxConsecutiveOnes(arr) {
    let count = 0;
    let temp = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 1) {
            temp ++;
        } else {
            temp = 0;
        }
        if(temp > count) {
            count = temp;
        }
    }
    console.log(count);
    return count;
}

findMaxConsecutiveOnes([1,0,1,1,0,1]); // 2
findMaxConsecutiveOnes([1,1,0,1,1,1]); // 3
findMaxConsecutiveOnes([1,1,1,1,1]); // 5
findMaxConsecutiveOnes([0,0,0,0]); // 0