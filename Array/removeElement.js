
// var removeElement = function(nums, val) {
//     let count = 1;
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === val) {
//             let temp = nums[i];
//             nums[i]  = nums[nums.length - 1];
//             nums[nums.length - 1] = temp;
//             nums.pop();
//             count++;
//         }
//     }
//     let temp = nums[0];
//     nums[0]  = nums[nums.length - 1];
//     nums[nums.length - 1] = temp;
//     nums.pop();

//     for(let j = 0; j < count; j++) {
//         nums.push('_')
//     }
//     console.log(nums, nums.length);
//     return nums;
// };

const removeElement = (nums, val) => {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        nums.splice(i, 1);
        i--;
      }
    }
    console.log(nums.length)
    return nums.length;
};

removeElement([3,2,2,3],3);

removeElement([0,1,2,2,3,0,4,2], 2)