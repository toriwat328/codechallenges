//Arrays and Strings

//is Unique: Implement an algorithm to determine if a string has all unique characters. What if you can not use an additional data structure.

//Is the string is an ASCII string or a Unicode string. Show attention to detail and foundation in Computer Science.

//For simplicity the character set is ASCII. If not you would need to increase the storage size

const isUniqueMe = (str) => {
    // let includeChar = 0;
    // for(let i of str){
    //     let character = str.charAt(i)
    //     if(str.includes(i)){
    //         includeChar++;
    //     }
    // }
    //
    // console.log(includeChar);
    //
    // if(includeChar === 0){
    //     return false;
    // } else {
    //     return true;
    // }

}

const isUnique = (str) => {
    //There are only 128 characters in a ASCII alphabet so if there are more than 128 characters in the string it would not have all unique characters therefore returning false
    if(str.length > 128){
        return false;
    }

    //Creating an empty array
    let char_set = [];

    for(let i = 0; i < str.length; i++){
        //set the value as the character that is currently being iterated
        let val = str.charAt(i);
        //if the value of the current index in charset is true then the characters already exists in the array.
        if(char_set[val]){ //Already found this char in string so returning false because it is not all unique values in the string
            return false;
        }
        //if this char is not found, it means that it is unique and is set to true in the charset array
        char_set[val] = true;
    }

    //if the string went through the process and did not return false, return true.
    return true;
}

// console.log(isUnique('helo'));


//Can reduce space by a factor of 8 by using a bit vector

//assuming string only has lowercase letters a-z , can use a single int now

const isUniqueChars = (str) => {
    let checker = 0;
    for(let i = 0; i < str.length; i++){
        let val = str.charAt(i) - 'a';
        if((checker & (1 < val)) > 0){
            return false;
        }
        checker |= (1 < val);
    }
    return true;
}

console.log(isUniqueChars('hello'));


//if we can use additional data structure -> have 2 for loops within each other n^2 run time 0(1) space

//if you are allowed to modify the string, you can sort the string and see if there are adjacent characters that are the same. but sorting takes up a lot of extra space

//Not optimial but depends of the constrants of the problems
