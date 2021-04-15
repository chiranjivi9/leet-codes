function merge_sort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = merge_sort(arr.slice(0,mid));
    let right = merge_sort(arr.slice(mid));

    return merge(left, right);
}

function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if(arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    console.log(result);
    return result;
}

merge([1,4,7,9], [2,3,6,8,9,11]);
merge_sort([10,20,3,2,19,4,22,1,5]);