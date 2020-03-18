const longSubstring = (s) => {
    let hash = {};
    let i = 0;

    const myset = new Set();
    //if char is not in the set, add to set, increase counter
    while(i <= s.length-1){
        if(!myset.has(s.charAt(i))){
            myset.add(s.charAt(i));
            console.log(s.charAt(i), i);
        }else {
            console.log(s.charAt(i), 'repeat');
            let sub = s.substring(0, i)
            hash[sub] = i
            let rest = s.substring(i, s.length)
            s = rest
            console.log(sub, 'sub');
            console.log(s);
            i = 0

        }
        i++
    }

    let max = 0;

    for(let sub in hash){
        if(hash[sub] > max){
            max = hash[sub]
        }
    }

    return max;

}

console.log(longSubstring('bbbbb'));
