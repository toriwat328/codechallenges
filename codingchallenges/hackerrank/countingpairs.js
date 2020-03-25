function countPairs(numbers, k) {
    // Write your code here
    let vaildpair = 0;

    const mySet = new Set()

    for(let i = 0; i < numbers.length; i++){
        if(!mySet.has(numbers[i])){
            mySet.add(numbers[i])
        }
    }

   for(let ints of mySet){
       let compliment = ints + k
       if(numbers.includes(compliment)){
           vaildpair++
       }
   }

    return vaildpair;

    //loop through array and see if current ele + k equal another value
    // 1 + k (2) === variable
    //numbers.includes(variable) is true increase a variable if not continue

}
