/*
    Given a signed 32-bit integer x, return x with its digits reversed.
    If reversing x causes the value to go outside the signed 32-bit integer
    range [-231, 231 - 1], then return 0.

    Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

    Example 1:
    Input: x = 123
    Output: 321

    Example 2:
    Input: x = -123
    Output: -321

    Example 3:
    Input: x = 120
    Output: 21
 */

const reverse = (x) => {
    if(x === 0) return 0;
    console.log('2^(-31) ', Math.pow(2, 31))
    console.log('2^(-31)-1', (Math.pow(-2, 31)))
    let intToStr = x.toString().split('').reverse();
    let maxNMin = Math.pow(2, 31);
    if(intToStr[0] === '0') {
        intToStr.shift();
    }

    if(intToStr.includes('-')) {
        let temp = intToStr.pop();
        intToStr.unshift(temp);
    }
    if (intToStr.join('') < Math.pow(-2, 31) || intToStr.join('') > Math.pow(2, 31)) return 0
    console.log(intToStr.join(''));
    return intToStr.join('');
};


// reverse(-9990820)

// reverse(20)
reverse(-2147483648)
reverse(1534236469)

