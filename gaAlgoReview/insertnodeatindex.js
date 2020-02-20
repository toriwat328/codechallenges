class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next;
    }
}

// class LinkedList {
//     constructor(){
//         this.head
//     }
// }

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
    while(++counter < position){
        current = current.next;
    }

    //when 1 plus counter is equal to positon, set the node next value equal to current node's next node.
    node.next = current.next;
    current.next = node;

    return head;
}



//attempt
// let current = head;
// let previous;
// let count = 0;
//
// while(current){
//     if(count+1 === position){
//         data.next = current;
//         previous.next = data;
//         return;
//     }
//     previous = current;
//     count++;
//     current = current.next ;
// }
//
// return head;
