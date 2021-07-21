/*
    input = [HAT]
    exptected output [HAT, HTA, ATH, AHT, THA, TAH]
*/


let permutation = (arr) => {

    if (arr.length < 1) return [];
    let res = [];

    function helper(input, idx, slate) {
        //base
        if (idx === input.length) {
            res.push(slate.slice(0, slate.length));
        } else {
            // recursion
            for (let i = idx; i < input.length; i++) {

                swap(input, idx, i);
                slate.push(input[idx]);
                helper(input, idx + 1, slate);
                slate.pop();
                swap(input, i, idx);
            }
        }
    }

    function swap(input, idxA, idxB) {
        let temp = input[idxA];
        input[idxA] = input[idxB];
        input[idxB] = temp;
    }

    helper(arr, 0, []);
    console.log(res);
}

permutation([1, 2, 3]);

permutation(['H', 'A', 'T']);