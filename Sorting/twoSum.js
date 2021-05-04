
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

// function two_sum(numbers, target) {
    let numbersMap = new Map();
    for(let i = 0; i < numbers.length; i++) {
        let difference = target - numbers[i];

        if(numbersMap.has(difference)) {
            console.log([i, numbersMap.get(difference)]);
            return [i, numbersMap.get(difference)];
        }

        numbersMap.set(numbers[i], i);
    }
    console.log([-1, -1])
    return [-1, -1];
}


two_sum([5, 3, 10, 45, 1], 6);

// let arrayAsValueInMap = (arr) => {
//     let hm = new Map();
    
//     for(let i = 0; i < arr.length; i++) {
//         if(!hm.has(arr[i])) {
//             hm.set(arr[i], [arr[i]]);
//         } else {
//             let temp = hm.get(arr[i]);
//             temp.push(arr[i]);
//             hm.set(arr[i], temp);
//         }
//     }

//     console.log(hm);
// }

// arrayAsValueInMap([1,2,2,2,3,4,5,7,9,10,10]);