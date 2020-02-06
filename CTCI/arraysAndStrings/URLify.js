//URLify

//Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are fiven the 'true' length of the string.

//EXAMPLE INPUT: "Mr John Smith     ", 13
//EXAMPLE INPUT: "Mr%20John%20Smith"

//Common approach in string manipulation problems is to edit strings starting from the end and work backwards. Useful because we have buffer at the end allowing us to change characters without overwriting

const replaceSpaces(str, trueLength){
    let spaceCount = 0;
    let index;
    let i = 0;

    for(i = 0; i < trueLength){
        if(str[i] == ' '){
            spaceCount++;
        }
    }

    index = trueLength + spaceCount * 2;
    if(trueLength < str.length){
        str[trueLength] = '\0';
        for(i = trueLength - 1; i >= 0; i--){
            if(str[i] == ' '){
                str[index - 1] = '0';
                str[index - 2] = '2';
                str[index - 3] = '%';
                index = index - 3;
            }else {
                str[index - 1] = str[i];
                index--;
            }
        }
    }
}
