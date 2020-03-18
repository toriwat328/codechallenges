const longSubstring = (s) => {
    let hash = {};
    let i = 0;
    let hasHash = false;

    const myset = new Set();
    //if char is not in the set, add to set, increase counter
    while(i <= s.length-1){
        if(!myset.has(s.charAt(i))){
            //if char is unique, add to set
            myset.add(s.charAt(i));
            console.log(s.charAt(i), i);
        }else {
            //if not unique
            console.log(s.charAt(i), 'repeat');
            //look for previous substring and set to var
            let sub = s.substring(0, i)
            //add substring with string length to hash
            hash[sub] = i
            //change s to string without sub
            let rest = s.substring(i, s.length)
            s = rest
            console.log(sub, 'sub');
            console.log(s);
            //reset i to 0
            i = 0
            hasHash = true
        }

        if(i+1 > s.length-1 && !hash.hasOwnProperty(s)){
            let sub = s.substring(0, s.length);
            hash[sub] = s.length;
        }
        console.log(s, i);
        i++


    }



    if(hasHash === false){
        let sub = s.substring(0, s.length);
        hash[sub] = s.length;
    }


    console.log(hash);

    let max = 1;

    for(let sub in hash){
        if(hash[sub] > max){
            max = hash[sub]
        }
    }

    return max;

}

console.log(longSubstring('dvdf'));
