
// link: https://leetcode.com/problems/increasing-decreasing-string/


var sortString = function(s) {
    let resArr = [];
    let extraStr = [];
    const str = s.split('').sort(); // convert to array and then sort;
    let strCount = {};

    // iterete over array
    str.forEach((element) => {
        if(!strCount[element]) {
            strCount[element] = 1;
            resArr.push(element);
        } else {
            strCount[element] ++
            extraStr.push(element);
        }
    });
    
    let resStr1 = resArr.join('');
    let resStr2 =  extraStr.sort().join('');
    let final = resStr1.concat(resStr2);
    console.log(final);

    return final;
};

sortString('leetcode'); //Output: "cdelotee"