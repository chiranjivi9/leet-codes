var arraySign = function(nums) {
    let product = 1;

    for(let i = 0;  i<nums.length; i++) {
        if(nums[i] === 0) return 0;
        else if (nums[i] < 0) product = -product;
    }
    
    return product;
};

// arraySign([-1,-2,-3,-4,3,2,1])
arraySign([-1,-2,0,-3,-4,3,2,1])