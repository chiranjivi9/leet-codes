function pair_sum_sorted_array(numbers, target) {
    let pt1 = 0;
    let pt2 = numbers.length - 1;
    
    while (pt1 < pt2) {
        let sum = numbers[pt1] + numbers[pt2];
        
        if(sum === target) {
            return [pt1, pt2];
        } else if (sum < target){
            pt1++;
        } else {
            pt2--;
        }
    }
    
    return [-1,-1];
}

pair_sum_sorted_array([1,2,3,5,10], 7);