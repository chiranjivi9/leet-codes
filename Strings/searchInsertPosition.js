/*
    Given a sorted array of distinct integers and a target value,
    return the index if the target is found. If not,
    return the index where it would be if it were inserted in order.

    You must write an algorithm with O(log n) runtime complexity.

    

    Example 1:

    Input: nums = [1,3,5,6], target = 5
    Output: 2
    Example 2:

    Input: nums = [1,3,5,6], target = 2
    Output: 1
*/

// function searchIndex(nums, target) {

//     //base
//     if(nums.length === 1) {
//         if(target === nums[0]) {
//             return '0';
//         } else if (target < nums[0]){
//             return '0';
//         } else {
//             return '1';
//         }
//     }

//     let mid = Math.floor((0 + nums.length - 1)/2);
//     // console.log('mid', mid);
//     function iterativeFunc(arr, currentIndex, sectionOfArr) {
//         for(let i = 0; i <= arr.length; i++) {
//             if(target === arr[i]) {
//                 console.log('Found at index:', i + currentIndex);
//                 return (i + currentIndex);
//             } else if(arr[i] > target) {
//                 sectionOfArr === 'fh' ? currentIndex - i : currentIndex + i;
//                 console.log('Should be at index: ', sectionOfArr === 'fh' ? currentIndex - i : currentIndex + i);
//                 return (sectionOfArr === 'fh' ? currentIndex - i : currentIndex + i);
//             } else {
//                 continue;
//             }
//         }
//     }
//     // console.log(nums.splice(mid + 1, nums.length));
//     if(target < nums[mid]) {
//         iterativeFunc(nums.splice(0, mid + 1), mid, 'fh')
//     } else if(target > nums[mid]) {
//         iterativeFunc(nums.splice(mid + 1, nums.length), mid + 1, 'sh');
//     } else {
//         // index found!
//         console.log('Found at index:', mid);
//         return mid;
//     }
// }

//Alternative O(n)
let searchIndex = (nums, target) => {
    for(let i = 0; i < nums.length; i++) {
        if(target === nums[i] || target < nums[i]) {
            console.log(i)
            return i;
        }
    }
    console.log('outside for: ', nums.length)
    return nums.length
}

searchIndex([1,3,5,6,8], 2);
searchIndex([1,3,5,6,8], 7);
searchIndex([1,3,5,6], 5);