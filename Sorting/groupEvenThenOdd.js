// input = [3,5,7,2,1,6,8];
//output = [2,6,8,3,5,7,1];
//should be inplace


function groupEvenOdd(inputArr) {
    let evnPt = 0;
    let i = 0;
    
    while (i < inputArr.length) {
        if(inputArr[i] % 2 === 1) {
            // num at i is odd;
            i++;
        } else {
            let temp = inputArr[evnPt];
            inputArr[evnPt] = inputArr[i]
            inputArr[i] = temp;
            evnPt++; i++;
        }
    }
    console.log(inputArr);
    return inputArr;
}

groupEvenOdd([3,5,7,2,1,6,8]);