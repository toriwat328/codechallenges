//fib(0) = 0;
//fib(1) = 1;
//fib(2) = 1 (fib(0) + fib(1));
//fib(3) = 2 (fib(1) + fib(2));
//fib(4) = 3 (fib(2) + fib(3));
//fib(5) = 5 (fib(3) + fib(4));

const fibonacci = (n) => {
    if(n == 0){
        return 0;
    }

    if(n == 1){
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(6));
