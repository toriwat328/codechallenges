//Stack - LIFO (Last In First Out)

//In JavaScript a stack can be an array where push, adds an item to the end of an array and pop removes the item from the end of the array.

const stack = [];

stack.push(1);
//stack = [1]

stack.push(9);
//stack = [1,9]

stack.push(5);
//stack = [1,9,5]

console.log(stack);
//stack = [1,9,5]

stack.pop();
//stack = [1,9]

console.log(stack);
//stack = [1,9]


//Queue - FIFO (First In First Out)

//We use an array in JavaScript to display a queue using unshift and shift

const queue = [];

queue.push(1);
queue.push(9);
queue.push(5);

//queue = [1,9,5]

console.log(queue);

queue.shift();
//removes the first item of the array;

console.log(queue);
// queue = [9,5]
