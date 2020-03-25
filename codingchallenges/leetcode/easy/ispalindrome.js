const ispalin = (x) => {
    let freq = {}
    let odd = 0;
    let even = 0;


    let ints = x.toString()
    let int = ints.split('')
    console.log(int);

    if(int[0] !== int[int.length-1] || int[1] !== int[int.length-2]){
        return false;
    }


    //count the occurance of each integer
    for(let i = 0; i < int.length; i++){
        let num = int[i]
        console.log(num);
        if(freq[num]){
            freq[num]++
        }else {
            freq[num] = 1
        }
    }

    console.log(freq);

    for(let num in freq){
        if(freq[num] % 2 === 0){
            even++
        }else {
            odd++
        }
    }

    if(odd > 1){
        return false
    }else {
        return true
    }


}

console.log(ispalin(1000021));
