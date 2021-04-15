/*

    Merge A Sorted Array Into Another
    First array has n positive numbers, and they are sorted in the non-descending order.
    Second array has 2n numbers: first n are also positive and sorted in the same way
    but the last n are all zeroes.
    Merge the first array into the second and return the latter. You should get 2n
    positive integers sorted in the non-descending order.

    Example
        {
            "first": [1, 3, 5],
            "second": [2, 4, 6, 0, 0, 0]
        }

    Output:
    [1, 2, 3, 4, 5, 6]
*/

function merge_one_into_another(first, second) {
    let f1 = first.length - 1;
    let s1 = first.length - 1;
    let s2 = second.length - 1;

    while(f1 >= 0 && s1 >= 0) {
        if(first[f1] > second[s1]) {
            second[s2--] = first[f1--];
        }else {
            second[s2--] = second[s1--];
        }
    }
    while(f1 >= 0) {
        second[s2--] = first[f1--];
    }
    
    // console.log(second);
    return second;
}

merge_one_into_another([1, 3, 5], [2, 4, 6, 0, 0, 0]);
