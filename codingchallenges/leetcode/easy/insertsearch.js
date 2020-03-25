const insertsearch = (nums, target) => {
    let hasTarget = nums.includes(target);
    let index;

    if(hasTarget){
        index = nums.indexOf(target);
    }else {
        for(let i = 0; i < nums.length; i++){
            if(target >= nums[i]){
                index = i+1
            }else if(target < nums[0]){
                index = 0
            }
        }
    }

    return index;
}

console.log(insertsearch([1,3,5,6], 2));
