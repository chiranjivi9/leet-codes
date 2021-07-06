/*
    This question is asked by Google. You are given two strings,
    s and t which only consist of lowercase letters. t is generated
    by shuffling the letters in s as well as potentially adding an
    additional random character. Return the letter that was randomly
    added to t if it exists, otherwise, return ’  ‘.
    Note: You may assume that at most one additional character can
    be added to t.

    Ex: Given the following strings...
    s = "foobar", t = "barfoot", return 't'
    s = "ide", t = "idea", return 'a'
    s = "coding", t "ingcod", return ''

*/

let spotDiff = (s, t) => {
    if (s.length < 1 || t.length < 1) return '';

    let longArr; let shortArr;

    if (s.length > t.length) {
        longArr = s.split('').sort();
        shortArr = t.split('').sort();
    } else {
        shortArr = s.split('').sort();
        longArr = t.split('').sort();
    }

    for (let i = 0; i < longArr.length; i++) {
        if (!shortArr.includes(longArr[i])) {
            console.log(longArr[i]);
            return longArr[i];
        }
    }

    console.log('not found');
    return '';
}

spotDiff('foobar', 'barfoot'); // returns 't'

spotDiff('coding', 'ingcod');  // ''

spotDiff('ide', 'idea');  // 'a'