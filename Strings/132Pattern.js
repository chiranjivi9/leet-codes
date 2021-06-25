/*
    Given an array of n integers nums, a 132 pattern
    is a subsequence of three integers nums[i], nums[j] and nums[k]
    such that i < j < k and nums[i] < nums[k] < nums[j].
    Return true if there is a 132 pattern in nums, otherwise, return false.

    Example 1:
    Input: nums = [1,2,3,4]
    Output: false
    Explanation: There is no 132 pattern in the sequence.
    
    Example 2:
    Input: nums = [3,1,4,2]
    Output: true
    Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
*/

function find132pattern(arr) {
    if(arr.length < 3) return false;

    let p1 = 0; //i
    let p2 = 1; //j
    let p3 = 2; //k
    // i < k < j
    while(p3 < arr.length) {
        if(arr[p1] < arr[p3] && arr[p3] < arr[p2]) {
            console.log(arr[p1], arr[p2], arr[p3])
            return true;
        } else {
            p1++; p2++; p3++;
        }
    }
    console.log('false', arr[p1], arr[p2], arr[p3]);
    return false;
}
find132pattern([3,5,0,3,4]);

// find132pattern([1,2,3,4]); //false

// find132pattern([3,1,4,2]); // true

// find132pattern([-1, 0, 5, 2, 1]); // false