//Sock Merchant - Data Structure = SET
//n = number of socks
//ar = array of socks
// const mySet = new Set()
// let numPairs = 0
//
// function sockMerchant(n, ar){
    //loop through array of socks
//     for(let i = 0; i < n; i++){
            //if mySet does not have the current element being iterated over, add the current element in the set
//         if(!mySet.has(ar[i])){
//             mySet.add(ar[i])
//         } else {
                //else if the set does have the current element, since we want unique elements in the set we dont add and we just add to the number of pairs since we found a pair. We then delete this element from set since we found the pair
//             numPairs++;
//             mySet.delete(ar[i]);
//         }
//     }
        //return the number of pairs
//     return numPairs;
// }
// console.log(sockMerchant(8, [10,20,20,10,20,30,10]));


//Counting Valleys
// function countingValleys(n, s) {
//     let altitude = 0;
//     let num_valleys = 0;
//     for(let i = 0; i < n; i++){
//         if(s.charAt(i) == 'U'){
//             if(altitude === -1){
//                 num_valleys++;
//                 // console.log(num_valleys);
//             }
//             altitude++;
//             // console.log(altitude);
//         }
//         if(s.charAt(i) == 'D'){
//             altitude--;
//             // console.log(altitude);
//         }
//     }
//     return num_valleys;
// }
//
// console.log(countingValleys(8, 'UDDDUDUU'));

//Jumping On Clouds

// function jumpingOnClouds(c) {
//     let num_jumps = 0;
//     let i = 0
//
//     while(i < c.length-1){
//         if(i+2 === c.length || c[i+2] === 1){
//             i++;
//             num_jumps++;
//
//         } else {
//             i += 2;
//             num_jumps++
//         }
//     }
//     return num_jumps;
// }
//
// console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));



// function repeatedString(s, n) {
//     //s is the string, n is the number of letters the string should have
//
//     arr = [];
//     num_of_pairs = 0
//
//     while(arr.length <= n){
//         const newS = s.split('')
//         console.log(newS);
//         for (let i = 0; i <= newS.length-1; i++) {
//             if(!arr.length >= n){
//             arr.push(newS[i])
//          } else {
//             return
//         }
//
//     }
//     console.log(arr);
//
// }
// }




// console.log(repeatedString('aba', 10));


//Diagonal Difference

// const diagonalDifference = ([][], arr) => {
//     let leftToRight = 0;
//     let rightToLeft = 0;
//
//     let rows = arr.length;
//     let columns = arr[0].length;
//
//     let i = 0;
//     let j = 0;
//     let k = 0;
//     let l = arr.length-1;
//
//     while(i < rows && j < columns && k < rows && l >= 0){
//         leftToRight += arr[i][j];
//         rightToLeft += arr[k][l];
//         i++;
//         j++;
//         k++;
//         l--;
//     }
//     return Math.abs(leftToRight - rightToLeft);
// }

// Stack class
// class Stack {
//
//     // Array is used to implement stack
//     constructor()
//     {
//         this.items = [];
//     }
//
//     push(element)
//     {
//     // push element into the items
//     this.items.push(element);
//     }
//
//     // pop function
//     pop()
//     {
// 	// return top most element in the stack
// 	// and removes it from the stack
// 	// Underflow if stack is empty
// 	if (this.items.length == 0)
// 		return "Underflow";
// 	return this.items.pop();
//     }
//
//     // Functions to be implemented
//     // push(item)
//     // pop()
//     // peek()
//     // isEmpty()
//     // printStack()
//
//     // peek function
//     peek()
//     {
// 	// return the top most element from the stack
// 	// but does'nt delete it.
// 	return this.items[this.items.length - 1];
//     }
//     isEmpty()
//     {
//     // return true if stack is empty
//     return this.items.length == 0;
//     }
// }
//
// //creating a Stack class
// //creating a function that checks if brackets are balanced by traversing through the stack.
// //I had to create a new instance of the stack class. S is an array of characters.
// const isBalanced = (s) => {
//     let stack = new Stack()
// //looping through s array
//     for(let i = 0; i < s.length-1; i++){
//         //if the current character is equal to parathesis, curly or bracket push the character to the stack we created.
//         if(s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') {
//             stack.push(s.charAt(i));
//             //else if the stack is empty return no because there is none of those characters in the array.
//         } else {
//             if(stack.isEmpty()){
//                 return 'NO';
//                 //else set popVal variable equal to the character that we are removing from the top of the stack.
//             } else {
//                 let popVal = stack.pop();
//                 //if the current character is equal to ) and the current variable at the top that we are popping is not equal to the closing character return no.
//                 if(s.charAt(i) === ')' && popVal !== '('){
//                     return 'NO';
//                 } else if (s.chartAt(i) === '}' && popVal !== '{'){
//                     return 'NO'
//                 } else if(s.chartAt(i) === ']' && popVal !== '['){
//                     return 'NO'
//                 }
//             }
//         }
//     }
//     if(stack.isEmpty()){
//         return 'YES';
//     } else {
//         return 'NO';
//     }
// }

//comparitor function

// arr.sort(function(a,b){
//   if(a.item1 == b.item1){
//     return a.item2 > b.item2 ? 1 : a.item2 < b.item2 ? -1 : 0;
//   }
//
//   return a.item1 > b.item1 ? 1 : -1;
// });

// const linkedList = () => {
//     let newNode = new Class(data);
//     //currentHead is set to head so that you can traverse
//     let currentNode = head;
//     let index = 0;
//
//     while(index < position-1){
//         currentNode = currentNode.next;
//         index++;
//     }
//
//     newNode.next = currentNode.next;
//     currentNode.next = newNode;
//
//     return head;
//
//
// }


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

//function should return the number of a's
//s = string, n = number of characters

//first have string print the amount of characters represented in n s ='aba' n =10 -> 'abaabaabaa'

//split the string into individual characters ['a', 'b', 'a']
//save that to a variable s = ['a', 'b', 'a'] use from

//push element of s into new array until the length of array = n. maybe not push but copy elements from s array so that s array does not change

//once we have the correct about of characters, loop through new string and push a in a new array

//count the length of that array

// function hourglassSum(arr) {
// const rows = arr.length;
// const columns = arr[0].length;
//
// let max_hourglass_sum = -99999;
//
// for(let i = 0; i < rows-2; i++){
//     for(let j = 0; j columns-2; j++){
//         let current_hourglass_sum = arr[i][j] + arr[i][j+1] + arr[i][j+ 2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
//         max_hourglass_sum = Math.max(max_hourglass_sum, current_hourglass_sum);
//     }
// }
//
//     return max_hourglass_sum;
//
// }

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

// function repeatedString3(s, n){
//
// //function to split to an array and filter for a can find the length of array
//     const counta = (str) => str.split('')
//     .filter(c => c == 'a')
//     .length
//
// //how many time you have to repeat s
//   const d = Math.floor(n / s.length)
//
// //multiply how many times to repeat s (2) by s.length (5) and subtract that by n to calculate the reminder
//   const r = n - (s.length * d)
//
//   //invoke the counta function with s as the argument and multiply it by d which is how many times it needs to be repeated. To account for the reminder, we invoke counta with a substr with the length of the reminder and return the count.
//   return d * counta(s) + counta(s.substr(0, r))
//
// }
//
// console.log(repeatedString3('abcac', 10));


// a = array, n = integers, d = left rotations
// n = 5, d = 4, a = [1,2,3,4,5] => [5,1,2,3,4] for 4 rotations

// const arr = [1,2,3,4,5]

//a[0] = a[4] a.length-1 = 4 - 0
//a[1] = a[0]  a.length-1 = 4 - 4
//a[2] = a[1]  a.length-1 = 4 - 3
//a[3] = a[2]  a.length-1 = 4 - 2
//a[4] = a[3]  a.length-1 = 4 - 1
// we are decreasing each index by 1 each rotation if the index is 0 it equals a.length -1

//so with 4 rotations, index of 4 which equals 5 becomes index of 0 original index - rotation = new index?
// index 0 (1) - 1 = 5
// index 3 (4) - 4  = -1 but should be 4
// index 2 (3) - 4 = should be 3
// index 1 (2) - 4 = should be 2

//so value at index 0 is always equal to array.length -1
//so value at index 1 is array.length -2

// const leftrotate = (a, d) => {
//
//
//         for(let i = 0; i < d; i++){
//             a.splice(a.length, 0, a[0]);
//             a.shift();
//         }
//
//     return a;
//
// }
//
// console.log(leftrotate(arr, 5, 4));

//TwoStrings

// const twoString = (s1, s2) => {
//     const string1 = s1.split('')
//     const string2 = s2.split('')
//
//     const mySet = new Set()
//
//     for(let i = 0; i < string1.length; i++){
//         if(!mySet.has(string1[i])){
//             mySet.add(string1[i]);
//         }
//     }
//
//     let count = 0;
//
//     for(let i = 0; i < string2.length; i++){
//         if(mySet.has(string2[i])){
//             count++;
//             return 'YES'
//         }
//     }
//
//     if(count === 0){
//         return 'NO'
//     }
// }
//
// console.log(twoString('hello', 'world'));

//This solution is not working. Think that i need to incorporate a hashtable. I would need to insert magazine into the hashtable and then look up each word in note to see if it is there.

//MAJOR KEY - JS arrays ARE hash tables!
// const checkMagazines = (magazine, note) => {
//     let wordcount = 0;
//
//     const mySet = new Set()
//
//     for(let i = 0; i < magazine.length; i++){
//         if(!mySet.has(magazine[i])){
//             mySet.add(magazine[i])
//         }
//     }
//
//     for(let i = 0; i < note.length; i++){
//         if(mySet.has(note[i])){
//            wordcount++
//         }
//     }
//
//     if(wordcount !== note.length){
//         return 'No'
//     } else {
//         return 'Yes'
//     }
// }

// const checkMagazines = (magazine, note) => {
//     //magazine is a hashtable
//     if(magazine.length < note.length){
//         return 'No';
//     }
//
//     let wordcount = 0;
//
//     let magazine1 = magazine.sort()
//     let note1 = note.sort()
//
//     const mag = new Map();
//
//     for(let i = 0; i < magazine1.length; i++){
//         mag.set(magazine1[i], i);
//     }
//
//     console.log(mag);
//
//     for(let i = 0; i < note1.length; i++){
//         if(wordcount === note1.length){
//             break;
//         }
//         if(mag.has(note1[i])){
//             wordcount++;
//             mag.delete(note1[i]);
//         }
//
//     }
//
//     if(wordcount !== note1.length){
//         return 'No';
//     } else {
//         return 'Yes';
//     }
// }

// console.log(checkMagazines(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']));

// console.log(checkMagazines(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four']));

// console.log(checkMagazines(['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'], ['ive', 'got', 'some', 'coconuts']));

let arr = [4,2,3,1]

const bubblesort = (a) => {
    let numOfSwaps = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {

            if (a[j] > a[j + 1]) {
                let index = a[j]
                a[j] = a[j+1]
                a[j+1] = index
                numOfSwaps++;
            }
        }
    }

    console.log(`Array is sorted in ${numOfSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]},`);

    return
}


console.log(bubblesort(arr));
