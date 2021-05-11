
function fibonacciRecursive(n, memo=[]) {
    if(memo[n] !== undefined) return memo[n];
    
    if(n <= 2) return 1;
    
    let res = fibonacciRecursive(n-1, memo) + fibonacciRecursive(n-2, memo);
    memo[n] = res;
    return res;
}


console.log(fibonacciRecursive(4));