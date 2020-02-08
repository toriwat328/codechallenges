//String Compression

//Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c3a3. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters.


const compressionStr = (str) => {
    let countConsecutive = 0;
    let compressedString = '';


    for(let i = 0; i < str.length; i++){
        countConsecutive++;
        //if next character is different than current, append this char to the result
        if(i + 1 >= str.length || str.charAt(i) !== str.charAt(i+1)){
            compressedString += '' + str.charAt(i) + countConsecutive;
            countConsecutive = 0;
        }
    }
    return compressedString.length < str.length ? compressedString : str;


}

console.log(compressionStr('aabcccccaaa'));
