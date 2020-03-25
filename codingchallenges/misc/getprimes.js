const isPrime = (num) => {
    // if the number is 0 or 1 it is not a prime number
    if(num < 2) {
        return false;
    }
    //start at 2, while i is less than the number, if num is a multiple of the numbers that are being looped through then it is not a prime number. A a number is prime if it can only be multiplied by 1 to get itself. One has two divisors 1 and itself
    for (let i = 2; i < num; i++) {
        if(num % i === 0)
            return false;
    }
    return true;
}
