/*
    Given a text txt[0..n-1] and a pattern pat[0..m-1],
    write a function search(char pat[], char txt[])
    that prints all occurrences of pat[] in txt[].
    You may assume that n > m.

    Input:  txt[] = "THIS IS A TEST TEXT"
            pat[] = "TEST"
    Output: Pattern found at index 10

    Input:  txt[] =  "AABAACAADAABAABA"
            pat[] =  "AABA"
    Output: Pattern found at index 0
            Pattern found at index 9
            Pattern found at index 12
*/

let matchPattern = (str1, str2) => {
    if(str1 === str2) return 'Pattern found at index 0';

    let pt1 = 0; let pt2 = 0;
    let outputArr = [];
    
    while(pt1 < str1.length) {
        if(!(str1[pt1] === str2[pt2])) {
            pt2 = 0; pt1++;
        } else {
            if(str2.length - 1 === pt2) {
                // pattern found
                outputArr.push(pt1 - (str2.length - 1)); // should give us the index;
                pt2 = 0;
            } else {
                pt2++; pt1++;
            }
        }
    }

    console.log(outputArr);
    return outputArr;
}

matchPattern('AABAACAADAABAABA','AABA'); // [0,9,12]
matchPattern('THIS IS A TEST Text', 'TEST'); // [10]