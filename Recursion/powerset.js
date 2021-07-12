/*
    All subsets  aka powerset problem.

    eg: [1,2,3]
    output: [{},{1}, {2}, {3}, {1,2}, {1,3}, {2,3}, {1,2,3}]

    eg: [1,2]
    output: [{}, {1}, {2}, {1,2}]

*/
function generatePowersets(arr) {
    let result = [];

    function helper(input, idx, slate, result) {
        // base
        if (idx >= input.length) {
            if (slate.length === 1) {
                console.log(slate);
                result.push([slate[0]]);
            } else {
                result.push(new Array(...slate));
            }
        } else {
            let currInt = input[idx];
            slate.push(currInt);
            helper(input, idx + 1, slate, result);
            slate.pop();
            helper(input, idx + 1, slate, result);
        }
    }

    helper(arr, 0, slate = [], result)

    console.log('-->> ', result);

    return result;
}


generatePowersets([1, 2, 3]);
