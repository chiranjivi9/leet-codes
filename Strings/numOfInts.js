var numDifferentIntegers = function(word) {
    let count = 0;
    for(let i = 0; i < word.length; i++) {
        console.log(Number(word[i]));
        if(Number(word[i]) === NaN) {
            if(Number(word[i-1]) === NaN) {
                count += 1;
            }
        }
    }
    
    console.log(count);
    return count;
};

numDifferentIntegers('ab123def222');