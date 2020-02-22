// function repeatedString(s, n){
//     let pushedElements = [];
//     let pushedAs = 0;
//     let stringArray = Array.from(s);
//     let i = 0
//
//
//     while(pushedElements.length < n){
//         if(i === stringArray.length){
//             i = 0;
//         }
//
//         pushedElements.push(stringArray[i]);
//         i++;
//     }
//
//
//     for(let i = 0; i <= pushedElements.length-1; i++){
//         if(pushedElements[i] === 'a'){
//             pushedAs++;
//
//         }
//
//     }
//
//     return console.log(pushedAs);
//
// }
//
// repeatedString('aba', 10);
//
// // function should return the number of a's
// // s = string, n = number of characters
// //
// // first have string print the amount of characters represented in n s ='aba' n =10 -> 'abaabaabaa'
// //
// // split the string into individual characters ['a', 'b', 'a']
// // save that to a variable s = ['a', 'b', 'a'] use from
// //
// // push element of s into new array until the length of array = n. maybe not push but copy elements from s array so that s array does not change
// //
// // once we have the correct about of characters, loop through new string and push a in a new array
// //
// // count the length of that array
//
// let s = 'abcac';
// let n = 10;

// function repeatedString2(s, n){
//     //defining the variable count and setting it equal to 0
//     //this is increase everytime we see an 'a' in the substring
//     let count = 0;
//
//     //looping thru the string to see if there is an a. If so we increase the count.
//     for(let i = 0; i < s.length; i++){
//         if(s.charAt(i) == 'a'){
//             count++;
//         }
//     }
//
//     //dividing the wanted length of the substring 'n' by the length of the actual string 's' and saving to variable
//
//     //indicating how many times we need to repeat s?
//     let div = n / s.length; // 2
//
//     //taking the modulus of substring length with string length and setting the remainder to a variable
//     let reminder = n % s.length; // 0
//
//     //since div represents how many time we need to repeat the string, we redefine count to make it equal to div multiplied by the count of 'a's in s.
//     count = div * count;
//
//
//     //this final for loop takes care of issue of having n not be divisible by s.length. we are looping through the reminder to see if there is 'a', if so we add this to the overall count.
//     for(let i = 0; i < reminder; i++){
//         if(s.charAt(i) == 'a'){
//             count++;
//         }
//     }
//     let finalCount = Math.floor(count)
//     return finalCount;
// }
//
// console.log(repeatedString2('aba', 10));

function repeatedString3(s, n){

//function to split to an array and filter for a can find the length of array
    const counta = (str) => str.split('')
    .filter(c => c == 'a')
    .length

//how many time you have to repeat s
  const d = Math.floor(n / s.length)

//multiply how many times to repeat s (2) by s.length (5) and subtract that by n to calculate the reminder
  const r = n - (s.length * d)

  //invoke the counta function with s as the argument and multiply it by d which is how many times it needs to be repeated. To account for the reminder, we invoke counta with a substr with the length of the reminder and return the count.
  return d * counta(s) + counta(s.substr(0, r))

}

console.log(repeatedString3('abcac', 10));


// a = array, n = integers, d = left rotations
// n = 5, d = 4, a = [1,2,3,4,5] => [5,1,2,3,4] for 4 rotations
//
// const arr = [1,2,3,4,5]
//
// a[0] = a[4] a.length-1 = 4 - 0
// a[1] = a[0]  a.length-1 = 4 - 4
// a[2] = a[1]  a.length-1 = 4 - 3
// a[3] = a[2]  a.length-1 = 4 - 2
// a[4] = a[3]  a.length-1 = 4 - 1
// we are decreasing each index by 1 each rotation if the index is 0 it equals a.length -1
//
// so with 4 rotations, index of 4 which equals 5 becomes index of 0 original index - rotation = new index?
// index 0 (1) - 1 = 5
// index 3 (4) - 4  = -1 but should be 4
// index 2 (3) - 4 = should be 3
// index 1 (2) - 4 = should be 2
//
// so value at index 0 is always equal to array.length -1
// so value at index 1 is array.length -2
