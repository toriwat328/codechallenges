//Solution: faster than 99% of JavaScript submissions 

const twoSum = function(nums, target) {
    // Set variables
    let numhash = {};
    let arr = []
    let objnum;
    let valnum;


    //Create a hash of nums in the array as properties and compliments as values
    for(let i = 0; i <= nums.length-1; i++){
        let num = nums[i];
        let compliment = target - num;

        if(numhash.hasOwnProperty(num)){
            numhash[num].compliment = compliment;
            numhash[num].secondindex = i;

        }else {
            numhash[num] = {};
            numhash[num].compliment = compliment;
            numhash[num].index = i;
        }

        console.log(numhash);
        if(numhash.hasOwnProperty(compliment) && numhash[compliment].index !== i){
            console.log(nums[i], 'nums');
            objnum = parseInt(num);
            valnum = compliment;
            break;
        }

    }

    console.log(objnum, valnum)

    //look for the 2 values and push their index in an array
    for(let i = 0; i <= nums.length-1; i++){
        if(nums[i] === valnum || nums[i] === objnum){
            arr.push(i)
        }
    }

    return arr;


};

console.log(twoSum([3,3] , 6));
