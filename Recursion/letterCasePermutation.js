// given a string 'a12b' return ['a12b', 'A12b', 'A12B', 'a12B'];
const REGEX = /[A-Za-z]/;
function letterCasePerm(str) {

    let result = [];
    helper(str, 0, '');

    console.log('Result ', result);

    function helper(input, idx, slate) {
        if (idx === input.length) {
            result.push(slate);
        } else {
            let isChar = REGEX.test(input[idx]);
            if (isChar) {
                helper(input, idx + 1, slate + input[idx].toLowerCase());
                helper(input, idx + 1, slate + input[idx].toUpperCase());
            } else {
                //val is digit
                helper(input, idx + 1, slate += input[idx]);
            }
        }
    }
}


letterCasePerm('a12b');
letterCasePerm('abc');