/*
    This question is asked by Google. Given a string
    only containing the following characters
    (, ), {, }, [, and ]return whether or not the
    opening and closing characters are in a valid order.

    Ex: Given the following strings...

    "(){}[]", return true
    "(({[]}))", return true
    "{(})", return false
*/

function checkBalanceBrackets(str) {
    let bracketsMap = new Map();
    bracketsMap.set('(', ')');
    bracketsMap.set('{', '}');
    bracketsMap.set('[', ']');
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case '(':
                stack.push(bracketsMap.get(str[i]));
                break;

            case '{':
                stack.push(bracketsMap.get(str[i]));
                break;

            case '[':
                stack.push(bracketsMap.get(str[i]));
                break;

            default:
                if (str[i] !== stack.pop()) {
                    return false;
                }
        }
    }
    return stack.length === 0;

};

console.log(checkBalanceBrackets('(()()'));

console.log(checkBalanceBrackets('(){}[]'));

console.log(checkBalanceBrackets('(({[]}))'));

console.log(checkBalanceBrackets('{(})'));
