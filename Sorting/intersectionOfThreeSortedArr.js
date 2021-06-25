function find_intersection(arr1, arr2, arr3) {
    let output = [];
    for(let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
            output.push(arr1[i]);
        }
    }
    
    if(!output.length) output.push(-1);
    
    return output;
}


find_intersection([2, 5, 10], [2, 3, 4, 10], [2, 4, 10]);
