/*
    Given a non-negative integer num, return the number of steps to reduce it to zero.
    If the current number is even, you have to divide it by 2, otherwise,
    you have to subtract 1 from it.   
    
    Example 1:
    Input: num = 14
    Output: 6
    Explanation: 
    Step 1) 14 is even; divide by 2 and obtain 7. 
    Step 2) 7 is odd; subtract 1 and obtain 6.
    Step 3) 6 is even; divide by 2 and obtain 3. 
    Step 4) 3 is odd; subtract 1 and obtain 2. 
    Step 5) 2 is even; divide by 2 and obtain 1. 
    Step 6) 1 is odd; subtract 1 and obtain 0.
*/


const numberOfSteps = (num) => {
    if(num === 0) {
        console.log('0');
        return 0;
    }
    let stepCount = 0;
    let calculateSteps = (num) => {
        if(num === 0) {
            console.log('num is now 0. And the step count is', stepCount);
            return stepCount;
        }
        if(num % 2 === 0) { // check even
            console.log('Number is even: ', num);
            num /= 2;
            stepCount++;
        } else {
            num -= 1;
            stepCount++;
        }
        console.log('Number now is: ', num);
        calculateSteps(num);
    }
    calculateSteps(num);
    return stepCount;
}


numberOfSteps(14);
numberOfSteps(8);
numberOfSteps(123);
