
var moveZeroes = function(nums) {
    var start = 0;
    var compare = 0;
    while(start < nums.length){
          if(nums[start] !== 0){
              var temp =  nums[compare] 
              nums[compare] = nums[start]
              nums[start] = temp
             compare++
            }
        start++;
    }

    console.log(JSON.stringify(nums));
    return nums
};


moveZeroes([0,1,0,3,12]);
moveZeroes([1,0]);

//Alternative

// var moveZeroes = function(nums) {
//     let pt1 = 0;
//     let pt2 = 1;
    
//     while(pt2 < nums.length) {
//         if(nums[pt1] === 0 && nums[pt2] > 0) {
//             let temp = nums[pt1];
//             nums[pt1] = nums[pt2];
//             nums[pt2] = temp;
//             pt1++;  pt2++;
//         } else if(nums[pt1] === 0  && nums[pt2] === 0) {
//             pt2++;
//         } else {
//             pt1++; pt2++;
//         }
//     }
    
//     console.log(JSON.stringify(nums));
//     return nums;
// };

// worstcase

// runWorstCase();
// function runWorstCase() {
//     const array1 = [];
//     let i = 0
//     let max = 200000;
    
//     while(i < max){
//         if(i % 2 === 0) {
//             array1.push(0)
//         } else {
//             array1.push(i);
//         }
//         i++;
//     };

//     moveZeroes(array1);
// }
