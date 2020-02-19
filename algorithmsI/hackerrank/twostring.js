// TwoStrings

const twoString = (s1, s2) => {
    const string1 = s1.split('')
    const string2 = s2.split('')

    const mySet = new Set()

    for(let i = 0; i < string1.length; i++){
        if(!mySet.has(string1[i])){
            mySet.add(string1[i]);
        }
    }

    let count = 0;

    for(let i = 0; i < string2.length; i++){
        if(mySet.has(string2[i])){
            count++;
            return 'YES'
        }
    }

    if(count === 0){
        return 'NO'
    }
}

console.log(twoString('hello', 'world'));
