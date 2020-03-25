


Stack class
class Stack {

    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }

    push(element)
    {
    // push element into the items
    this.items.push(element);
    }

    // pop function
    pop()
    {
	// return top most element in the stack
	// and removes it from the stack
	// Underflow if stack is empty
	if (this.items.length == 0)
		return "Underflow";
	return this.items.pop();
    }

    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()

    // peek function
    peek()
    {
	// return the top most element from the stack
	// but does'nt delete it.
	return this.items[this.items.length - 1];
    }
    isEmpty()
    {
    // return true if stack is empty
    return this.items.length == 0;
    }
}

//creating a Stack class
//creating a function that checks if brackets are balanced by traversing through the stack.
//I had to create a new instance of the stack class. S is an array of characters.




//comparitor function

arr.sort(function(a,b){
  if(a.item1 == b.item1){
    return a.item2 > b.item2 ? 1 : a.item2 < b.item2 ? -1 : 0;
  }

  return a.item1 > b.item1 ? 1 : -1;
});
