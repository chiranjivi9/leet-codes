
function segregate_evens_and_odds(numbers) {
    if(numbers.length < 2) {
        console.log(numbers);
        return numbers;
    }
    
    let leftPtr = 0;
    let rigthPtr = numbers.length - 1;
    
    while(leftPtr <= rigthPtr) {
        if(numbers[rigthPtr] % 2 === 0) {
            let temp = numbers[leftPtr];
            numbers[leftPtr] = numbers[rigthPtr];
            numbers[rigthPtr] = temp;
            leftPtr++;
        } else {
            rigthPtr --;
        }
    }
    
    console.log(numbers);
    return numbers;
}


segregate_evens_and_odds([1,2,3,4]);

segregate_evens_and_odds([1,3,5,7]);

segregate_evens_and_odds([]);