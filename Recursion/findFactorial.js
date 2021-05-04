

const findFactorial = (num) => {
    let factorial = 1;
    if(num === 0){ 
        return 1;
    } else {
        factorial = num * findFactorial(num - 1);
        console.log(factorial);
        return factorial;
    }

}



findFactorial(4); // 4! = 4 * 3 * 2 * 1 = 24