//One Away

//There are three types of edits that can be performed on strings. Insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit(or zero edits away)

const oneAway = (str1, str2) => {
    let hasLetter = 0;
    let notLetter = 0;

    let length1 = str1.length;
    let length2 = str2.length;

    console.log(length2);
    console.log(length1+1);
//
// || length2 !== length1+1 || length2 !== length1

    if(length2 === length1-1 || length2 === length1+1 || length2 === length1){

    }else {
        return false;
    }

    let freq1 = {};
    let freq2 = {};

    for(let i = 0; i < str1.length; i++){
        let character = str1.charAt(i);
        if(freq1[character]){
            freq1[character]++;
        }else {
            freq1[character] = 1;
        }
    }

    for(let i = 0; i < str2.length; i++){
        let character = str2.charAt(i);
        if(freq2[character]){
            freq2[character]++;
        }else {
            freq2[character] = 1;
        }
    }

    console.log(freq1);
    console.log(freq2);

    for(char in freq1){
        if(freq2[char]){
            hasLetter++
        }else {
            notLetter++
        }
    }

    if(notLetter > 1){
        return false;
    }else {
        return true;
    }


}

console.log(oneAway('pale', 'bae'));
