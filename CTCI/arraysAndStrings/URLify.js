//URLify

//Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are fiven the 'true' length of the string.

//EXAMPLE INPUT: "Mr John Smith     ", 13
//EXAMPLE INPUT: "Mr%20John%20Smith"

//Common approach in string manipulation problems is to edit strings starting from the end and work backwards. Useful because we have buffer at the end allowing us to change characters without overwriting

// const replaceSpaces = (str, trueLength) => {
//     let spaceCount = 0;
//     let index;
//     let i = 0;
//
//     //first scan -> count the number of spaces
//     for(i = 0; i < trueLength; i++){
//         //if you see a space within str increase the space count
//         if(str[i] == ' '){
//             spaceCount++;
//         }
//     }
//
//     //by tripling this number we can compute how many extra characters we have in the final string
//
//     //add the true length of the string + the space count * 2 to account for extra characters
//     index = trueLength + spaceCount * 2;
//
//     //second scan -> edit the string by replacing the spaces with %20. returns string with no extra space.
//
//     //if the true length provided is less than the str's length then str at the indext of trueLength is = to \0?
//     if(trueLength < str.length){
//         str[trueLength] = '\0';
//         //set i to trueLength - 1 , as long as i is greater than 0 decrease i
//         for(i = trueLength - 1; i >= 0; i--){
//             //if at the current index of str, I is blank, set index
//             if(str[i] == ' '){
//                 str[index - 1] = '0';
//                 str[index - 2] = '2';
//                 str[index - 3] = '%';
//                 index = index - 3;
//             }else {
//                 str[index - 1] = str[i];
//                 index--;
//             }
//         }
//     }
// }
//
// console.log(replaceSpaces('Mr John Smith    ', 13));


const replaceSpaces2 = (str, trueLength) => {
    let newString = str.substr(0, trueLength).replace(/ /gi, '%20')

    // let finalString = newString

    return newString;

}
    console.log(replaceSpaces2('Mr John Smith    _', 13));
