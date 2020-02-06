//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other

//Is the permutation comparison is case sensitive or is whitespace significant

//strings of different lengths can not be permutations of each other


//Sort the strings -> permutations have the same characters in a different order so if you sort them, and they are the same then they are permutations

const permutationSort = (str1, str2) => {
    let strsort1 = str1.split('').sort().join('');
    let strsort2 = str2.split('').sort().join('');

    // console.log(strsort1);
    // console.log(strsort2);

    if(strsort1 !== strsort2){
        return false;
    }else {
        return true;
    }
}

// console.log(permutationSort('racecar', 'carrace'));

//Check if the two strings have identical character counts -> Can iterate through the string counting how many times each characters appears. Then afterwards compare the new string.

const permutationCount = (str1, str2) => {
    //because of the definition of permutation, if the string are not the same length, then it is not a permutation and should return false;
    if(str1.length !== str2.length){
        return false;
    }
    let letters = {};

    //turing the str1 into an array so that we can iterate over
    let str1_array = str1.split('');

    //add char from str1 into letters object, counting number of letters in str1
    for(let char of str1_array){
        if(letters[char]){
            letters[char]++;
        }else {
            letters[char] = 1;
        }
    }

    console.log(letters);


    for(let i = 0; i < str2.length; i++){
        //setting the current character from str2 as c
        let c = str2.charAt(i);
        //if the current letter from str2 is present in the string one, if we remove the count and it is a true permutation, there would be no negative numbers and return true otherwise it will return false.
        letters[c] -= 1;
        console.log(letters);

        if(letters[c] < 0){
            return false;
        }
    }

    return true;
}

console.log(permutationCount('god', 'dogg'));
