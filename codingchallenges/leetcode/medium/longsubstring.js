const longSubstring = (s) => {
    let hash = {};
    let hash2 = {};
    let i = 0;
    let j = s.length-1;
    let hasHash = false;

    const myset = new Set();
    const myset2 = new Set();
    // // if char is not in the set, add to set, increase counter
    while(i <= s.length-1){
        if(!myset.has(s.charAt(i))){
            //if char is unique, add to set
            myset.add(s.charAt(i));
            console.log(s.charAt(i), 'added');
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

    //     if(i+1 > ss.length-1 && !hash.hasOwnProperty(ss)){
    //         let sub = ss.substring(0, ss.length);
    //         hash[sub] = ss.length;
    //     }
    //     console.log(ss, i);
        i++


    }

    // while(j >= 0){
    //     if(!myset2.has(s.charAt(j))){
    //         //if char is unique, add to set
    //         myset2.add(s.charAt(j));
    //         console.log(s.charAt(j), 'jadded');
    //     }else {
    //         //if not unique
    //         console.log(s.charAt(j), 'jrepeat');
    //         //look for previous substring and set to var
    //         let sub = s.substring(j+1, s.length)
    //         //add substring with string length to hash
    //         hash2[sub] = s.length - (j+1)
    //         //change s to string without sub
    //         let rest = s.substring(0, j)
    //         s = rest
    //         console.log(sub, 'jsub');
    //         console.log(s, 'rest');
    //         //reset i to 0
    //         j = s.length
    //
    //     }
    //
    //     console.log(s, j);
    //     j--
    // }

    // console.log(hash);
    // console.log(hash2, '2');





    // if(hasHash === false){
    //     let sub = s.substring(0, s.length);
    //     hash[sub] = s.length;
    // }
    //
    //
    // console.log(hash);
    //
    // let max = 1;
    //
    // for(let sub in hash){
    //     if(hash[sub] > max){
    //         max = hash[sub]
    //     }
    // }
    //
    // return max;

}

console.log(longSubstring('dvdf'));
