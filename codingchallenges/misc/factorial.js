const factorial = (n) => {
    if (n === 0) { //remember that 0! is defined as 1
        return 1;
    }

   return n * factorial(n — 1)//the recursion
}



factorial(3) //returns 6 -> 3*2*1
factorial(0) //return 1
factorial(4) // returns 24 -> 4*3*2*1
