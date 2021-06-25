function helper(slate, n) {
    //base
    if(n===0) {
        console.log(slate);
        return slate;
    } else {
        // recursive case
        helper(slate + '0', n-1);
        helper(slate + '1', n-1);
    }
}


function binaryString(n) {
    let result = helper('', n);
}

binaryString(3);