/*
    Given an array of numbers arr. A sequence of numbers is called an
    arithmetic progression if the difference between any two consecutive elements is the same.

    Return true if the array can be rearranged to form anzarithmetic progression,
    otherwise, return false.

    Example 1:
    Input: arr = [3,5,1]
    Output: true
    Explanation: We can reorder the elements as [1,3,5] or [5,3,1]
    with differences 2 and -2 respectively, between each consecutive elements.
*/


let canMakeArithmeticProgression = (arr) => {
    arr.sort((a,b) => b - a);
    const difference = arr[0] - arr[1];

    for(let i = 0; i < arr.length - 1; i++) {
        if(arr[i] - arr[i+1] !== difference) {
            console.log('false');
            return false
        }
    }

    console.log('true');
    return true;
};


canMakeArithmeticProgression([3,5,1,7,9]); // true
canMakeArithmeticProgression([1,4,2]); // false