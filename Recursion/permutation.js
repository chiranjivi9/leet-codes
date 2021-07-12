/*
    input = [HAT]
    exptected output [HAT, HTA, ATH, AHT, THA, TAH]
*/


let permutation = (arr) => {

    if (arr.length < 1) return [];
    let res = [];

    function helper(slate, placed, res) {
        if (placed >= slate.length) {
            res.push(new Array(...slate));
        } else {
            //recursion
            for (let idx = placed; idx < slate.length; idx++) {
                // swap idx element with 0th element;
                swap(slate, idx, placed);
                helper(slate, idx + 1, res);
                swap(slate, placed, idx);
            }
        }
    }

    helper(arr, 0, res);

    console.log(res);

    function swap(input, idx1, idx2) {
        let temp = input[idx1];
        input[idx1] = input[idx2];
        input[idx2] = temp
        return input;
    }
}

permutation(['H', 'A', 'T']);