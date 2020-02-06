//Check Permutation: Given two strings, write a method to decide if one is a permutation of the other

//Is the permutation comparison is case sensitive or is whitespace significant

//strings of different lengths can not be permutations of each other


//Sort the strings -> permutations have the same characters in a different order so if you sort them, and they are the same then they are permutations

const permutationSort = (str1, str2) => {
    let strsort1 = str1.split('').sort().join('');
    let strsort2 = str2.split('').sort().join('');

    console.log(strsort1);
    console.log(strsort2);

    if(strsort1 !== strsort2){
        return false;
    }else {
        return true;
    }
}

console.log(permutationSort('racecar', 'carrac'));

//Check if the two strings have identical character counts -> Can iterate through the string counting how many times each characters appears. Then afterwards compare the new string.
