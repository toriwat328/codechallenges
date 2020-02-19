function repeatedString(s, n) {
    //s is the string, n is the number of letters the string should have

    arr = [];
    num_of_pairs = 0

    while(arr.length <= n){
        const newS = s.split('')
        console.log(newS);
        for (let i = 0; i <= newS.length-1; i++) {
            if(!arr.length >= n){
            arr.push(newS[i])
         } else {
            return
        }

    }
    console.log(arr);

}
}

console.log(repeatedString('aba', 10));
