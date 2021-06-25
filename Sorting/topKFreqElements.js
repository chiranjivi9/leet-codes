/*
    Top K Frequent Elements

    Given an integer array and a number k,
    find the k most frequent elements in the array. 

    Example One
    Input: [1, 2, 3, 2, 4, 3, 1], 2
    Output: [3, 1]

    Example Two
    Input: [1, 2, 1, 2, 3, 1], 1
    Output: [1]
*/


function find_top_k_frequent_elements(arr, k) {
    let output = [];
    let hm = {};
    
    for(let i = 0; i < arr.length; i++) {
        if(hm[arr[i]]) {
            hm[arr[i]]++;
        } else {
            hm[arr[i]] = 1;
        }
        
    }

    let sorted = Object.keys(hm).sort((a,b) => hm[b] - hm[a]);
    
    for(let i = 0; i < k; i++) {
        output.push(sorted[i]);
    }
    
    return output;
}


find_top_k_frequent_elements([1, 2, 3, 2, 4, 3, 1, 3], 2);