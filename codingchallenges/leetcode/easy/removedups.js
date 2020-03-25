const removedup = (nums) => {
    let length = nums.length

    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i, 1);
            i = i-1
        }
    }


    console.log(nums.length);

    let newlength = nums.length;

    return newlength;
}

console.log(removedup([0,0,1,1,1,2,2,3,3,4]));
