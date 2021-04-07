/*
    You're given strings jewels representing the types of stones that are jewels,
    and stones representing the stones you have. Each character in stones is a type of
    stone you have. You want to know how many of the stones you have are also jewels.

    Letters are case sensitive, so "a" is considered a different type of stone from "A".

    Example 1:
    Input: jewels = "aA", stones = "aAAbbbb"
    Output: 3
*/

const numJewelsInStones = function(jewels, stones) {
    let stoneArr = stones.split('');
    let jewelArr = jewels.split('');
    let stoneMap = new Map();
    let jewelCount = 0;
    
    for(let i = 0; i < stoneArr.length; i++) {
        if(!stoneMap.has(stoneArr[i])) {
            stoneMap.set(stoneArr[i], 1);
        } else {
            let temp = stoneMap.get(stoneArr[i]) + 1;
            stoneMap.set(stoneArr[i], temp);
        }
    }

    stoneMap.forEach((value, key) => {
        if(jewelArr.includes(key)) {
            jewelCount += value;
        }
    });

    console.log(jewelCount);
    return jewelCount;
};

numJewelsInStones('aA', 'aAAbbbb');
numJewelsInStones('z', 'ZZ');
