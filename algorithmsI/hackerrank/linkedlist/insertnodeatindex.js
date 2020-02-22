const util = require('util');

class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0

    }

    insertFirst(data){
        this.head = new Node(data, this.head)
        this.size++;
        return;
    }

    printListData(){
        let current = this.head

        while(current){
            console.log(current.data);
            current = current.next;
        }

    }
}

const insertNodeAtPosition = (head, data, position) => {
    //have to create an instance of the node class in order to access atrributes like data and next
    let node = new Node()
    //set the data for the new node that we want to insert
    node.data = data;
    //set the current variable to head as we traverse the linked list
    let current = head;

    //edge case: if the position is 0 we are inserting the node at the head, therefore we need to make room so we slide the current node at the head to the next node
    if(position === 0){
        node.next = head;
        return node;
    }

    //set up counter
    let counter = 0;
    //if 1 plus counter is less that position, traverse through the linked list
    //pre-increment (increment the variable and the value of the expression is the final value ) vs. post-increment remember the original value then increment the variable, the value of the expression is the original value
    while(++counter < position){
        console.log('counter is at: ' + counter);
        current = current.next;
    }


console.log(util.inspect(ll, {showHidden: false, depth: null, colors:true}));
    node.next = current.next; //making space by setting node's next value to what ever current's next value is
    current.next = node; //setting current's next value equal to the new node to insert it.
console.log(util.inspect(ll, {showHidden: false, depth: null, colors:true}));

    return head;
}


const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertFirst(400);

insertNodeAtPosition(ll.head, 150, 1);


// ll.printListData()
