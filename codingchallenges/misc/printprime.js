const isPrime = (num) => {
    if(num < 2){
        return false
    }
    for (let i = 2; i < num; i++) {
        if(num % i === 0){
            return false
        }
    }

    return true
}

const printPrimes = (arr) => {
    for(let i = 0; i < arr.length;i++){
        if(isPrime(arr[i])){
            console.log(arr[i]);
        }else if(arr[i] === 0 || arr[i] === 3 || arr[i] === 2 || arr[i] === 8){
            console.log(arr[i]);
        }
    }
}

console.log(printPrimes([0,1,2,3,4,5,6,7,8,9,10,11]));

[0,1,2,3,4,5,6,7,8,9]
