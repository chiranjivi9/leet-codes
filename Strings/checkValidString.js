/*
     Given a string, return whether or not it uses capitalization
     correctly. A string correctly uses capitalization if all
     letters are capitalized, no letters are capitalized,
     or only the first letter is capitalized.

     Ex: Given the following strings...

    "USA", return true
    "Calvin", return true
    "compUter", return false
    "coding", return true
*/

function isCapital(word) {
    //check for upperCase {65 to 90}
    if (word.charCodeAt(0) >= 65 &&
        word.charCodeAt(0) <= 90) {

        return true;
    }

    return false;
}

function checkValidString(str) {
    if (str.length < 2) return false;

    let isFirstCapital = isCapital(str[0]);
    let count = isFirstCapital ? 1 : 0;

    // if first is lowerCase then rest all should be lower
    // if first is upperCase then either all
    // should be capital or all should be lower
    for (let i = 1; i < str.length; i++) {
        if (isFirstCapital && isCapital(str[i])) {
            count++;
        } else {
            // if first is not upperCase then
            // rest all chars should be lowerCase
            if (isCapital(str[i])) {
                console.log('false');
                return false;
            }
        }
    }

    if (isFirstCapital) {
        if (isFirstCapital && count === 1) {
            console.log('Only first char is upper case', true);
            return true;
        }
        console.log('count === str.length ', count === str.length);
        return count === str.length
    } else {
        console.log('true');
        return true;
    }
}

checkValidString('Calvin');
checkValidString('USA');
checkValidString('compUter');
checkValidString('coding');