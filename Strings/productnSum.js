
function  subtractProductAndSum(n) {
    let sum = 0;
    let product = 1;
    let arr = n.toString().split('').map((item) => {
        return parseInt(item, 10);
    });

    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
        product *= arr[i];
    }
    
    let difference = Math.abs(sum - product)
    console.log(difference);
   
    return difference;
}

subtractProductAndSum(243)