// n = 120
// 120/2 = 60, 60/3 = 20, 20/4 = 5, 5/5 = 1


const reversefactorial = (n) => {
    let i = 2;


    while(n !== 1){
        if(i > n && n < 1){
            return 'NONE';
        }
        n = n / i ;
        if(n !== 1){
            i++
        }

    }

    return i + '!' ;

}

console.log(reversefactorial(5));
