/*
    This question is asked by Microsoft.
    Given a string, return the index of
    its first unique character. If a unique
    character does not exist, return -1.

    Ex: Given the following strings...

    "abcabd", return 2
    "thedailybyte", return 1
    "developer", return 0
*/

let findUniqIdx = (str) => {
    if (str.length < 2) return str.length - 1;

    let hm = new Map();
    let idxArr = [];

    for (let i = 0; i < str.length; i++) {
        if (hm.has(str[i])) {
            let temp = hm.get(str[i]) + 1;
            hm.set(str[i], temp);
        } else {
            hm.set(str[i], 1);
        }
    }

    hm.forEach((val, key) => {
        if (val === 1) {
            idxArr.push(str.indexOf(key));
        };
    });

    console.log(idxArr.length ? idxArr[0] : -1);

    return idxArr.length ? idxArr[0] : -1;
}

findUniqIdx('abcabd'); // 2
findUniqIdx('developer'); // 0
findUniqIdx('twweet'); // -1