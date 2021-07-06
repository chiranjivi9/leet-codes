/*
    This question is asked by Amazon. Given two strings representing sentences,
    return the words that are not common to both strings (i.e. the words that
    only appear in one of the sentences). You may assume that each sentence
    is a sequence of words (without punctuation) correctly separated using
    space characters.

    Ex: given the following strings...

    sentence1 = "the quick", sentence2 = "brown fox",
    return ["the", "quick", "brown", "fox"]

    sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire",
    return ["beat", "to", "lost"]

    sentence1 = "copper coffee pot", sentence2 = "hot coffee pot",
    return ["copper", "hot"]
*/


function uncommonFromSentences(str1, str2) {
    if (str1.length < 1 && str2.length > 1) return str2.split(' ');
    if (str2.length < 1 && str1.length > 1) return str1.split(' ');
    if (str1.length < 1 && str2.length < 1) return [];

    let arr1 = str1.split(' ');
    let arr2 = str2.split(' ');
    let hm = {};
    let len = arr1.length > arr2.length ? arr1.length : arr2.length;

    for (let i = 0; i < len; i++) {
        if (arr1[i]) {
            hm[arr1[i]] = hm[arr1[i]] + 1 || 1;
        }

        if (arr2[i]) {
            hm[arr2[i]] = hm[arr2[i]] + 1 || 1;
        }
    }

    let res = [];

    for (const [key, val] of Object.entries(hm)) {
        if (val === 1) {
            res.push(key);
        }
    }

    console.log(res);

    return res;
}

uncommonFromSentences('the rat', 'ate the cheese'); //[ 'rat', 'ate', 'cheese' ]

uncommonFromSentences("the quick", "brown fox"); //[ 'the', 'quick', 'brown', 'fox' ]

uncommonFromSentences("the tortoise beat the haire", "the tortoise lost to the haire");
//[ 'beat', 'lost', 'to' ]

uncommonFromSentences("copper coffee pot", "hot coffee pot"); //[ 'copper', 'hot' ]