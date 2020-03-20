function funWithAnagrams(text) {

    let hash = {};

    for(let i = 0; i <= text.length-1; i++){
        let sortword = text[i].split('').sort(). join('');


        //if we have anagram in hash, delete,
        //no need to add to hash else add
        if(hash[sortword]){
            text.splice(i, 1);
            i = i - 1
        }else {
            hash[sortword] = 1;
        }
    }

    let finaltext = text.sort()

    return finaltext;


}

console.log(funWithAnagrams(['code', 'doce', 'ecod', 'framer', 'frame']));
