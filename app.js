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

function repeatedString2(s, n){
    let count = 0;

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) == 'a'){
            count++;
        }
    }

    let div = n / s.length; // 2
    let reminder = n % s.length; // 0

    count = div * count;

    for(let i = 0; i < reminder; i++){
        if(s.charAt(i) == 'a'){
            count++;
        }
    }

    return count;
}

console.log(repeatedString2('abcac', 10));
