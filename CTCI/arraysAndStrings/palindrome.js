//Palindrome Permutation

//Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a work or phrase that is the same forwards and backwars

//permutation of a palindrome is a rearrangement of a word that is spelled the same bacwards and forwards

//create hashtable to store characters and make sure that there is only one letter that is an odd number

const permPalindrome = (str) => {
    let freq = {};
    let odd = 0;
    let even = 0;

    for(let i = 0; i < str.length; i++){
        let character = str.charAt(i);
        if(freq[character]){
            freq[character]++;
        }else{
            freq[character] = 1;
        }
    }

    for(char in freq){
        if(freq[char] % 2 === 0 || char === ' '){
            even++
        }else {
            odd++
        }
    }

    if(odd > 1){
        return false;
    }else {
        return true;
    }


}

console.log(permPalindrome('tact coa'));
