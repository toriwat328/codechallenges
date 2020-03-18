const removeele = (nums, val) => {

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === val){
            nums.splice(i, 1)
        }

        
    }

    console.log(nums);

    let newlength = nums.length

    return newlength;

}

console.log(removeele([3,2,2,3], 3));
