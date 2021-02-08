/* 
    Given the array candies and the integer extraCandies, where candies[i] represents 
    the number of candies that the ith kid has.

    For each kid check if there is a way to distribute extraCandies among the kids such 
    that he or she can have the greatest number of candies among them. Notice that multiple 
    kids can have the greatest number of candies.

    link: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

    Input: candies = [4,2,1,1,2], extraCandies = 1
    Output: [true,false,false,false,false] 
    Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest 
    number of candies among the kids regardless of who takes the extra candy.
*/

const kidsWithCandies = (candies, extraCandies) => {
    let highestCandyCount = candies[0];
    let outputArray = [];
    for(let i = 0; i <= candies.length - 1; i++) {
        // finding the highest number of candies
        if(highestCandyCount < candies[i]) {
            highestCandyCount = candies[i];
        }
    }
    candies.forEach((item) => {
        // Finding kids with greatest candies
        if(item + extraCandies >= highestCandyCount) {
            outputArray.push(true)
        } else {
            outputArray.push(false)
        }
    })

    console.log('Ouput Array: ', outputArray);
    return outputArray;
};


// Test Case #1
kidsWithCandies([2,3,5,1,3], 3);

// Test Case #2
kidsWithCandies([4,2,1,1,2], 1);

// Test Case #3
kidsWithCandies([12, 1, 12], 10);