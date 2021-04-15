/*
    Given an array of integers nums.

    A pair (i,j) is called good if nums[i] == nums[j] and i < j.

    Return the number of good pairs.

    Input: nums = [1,2,3,1,1,3]
    Output: 4
    Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

    link: https://leetcode.com/problems/number-of-good-pairs/
*/

const numIdenticalPairs = (nums) => {
    let count = 0;

    nums.sort();
    
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
          if (nums[i] === nums[j]) {
            count ++;
          } else {
            continue;
          }
        }
      }
      console.log('COUNT', count);
      return count;
};

// Test Case #1
numIdenticalPairs([1, 2, 3, 1, 1, 3]);

// Test Case #2
numIdenticalPairs([1,2,3]);

// Test Case #3
numIdenticalPairs([1,1,1,1]);

