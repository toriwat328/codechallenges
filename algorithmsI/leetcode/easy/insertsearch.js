const insertsearch = (nums, target) => {
    let hasTarget = nums.includes(target);
    let index;

    if(hasTarget){
        index = nums.indexOf(target);
    }else {
        for(let i = 0; i < nums.length; i++){
            console.log(nums[i] < target && nums[i+1] > target, i);
            if(nums[i] < target && nums[i+1] > target){
                nums.splice(i, 0, target);
                index = i;
                console.log(index, 'new');
                break;
            }
        }
    }

    return index;
}

console.log(insertsearch([1,3,5,6], 2));
