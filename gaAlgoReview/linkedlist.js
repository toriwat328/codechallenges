//Linked List

//creating head node of linked list as an object
const head = {
    name:'Matt'
}

//created new node with the name property and value
const person2 = {
    name:'Bob'
}

//created new node with the name property and value
const person3 = {
    name:'Sally'
}

//created new node with the name property and value
const tail = {
    name: 'Zagthorp'
}

//we are defining what nodes point to what below. We are creating a next property of head and setting it equal to the person2 object and so on so that each node has a value and is pointing to another node or if its the tail pointing to nothing
head.next = person2;
person2.next = person3;
person3.next = tail;





//function to find if a particular node has a specific value. the Parameters a node and its value.
const find = (node, value) => {
    //if the node's name value matches the value entered as an argument, return true
    if(node.name === value){
        return true;
    //if the current node is not right, we want to move to the next node. If we have traversed the linked list and there is no next node which means we are at the tail, return false
    }else if(node.next === undefined){
        return false;
    //otherwise if there is a next node, use recursion to have the find function call itself to see if the next node matches the value.
    }else {
        return find(node.next, value)
    }
}

console.log(find(head, 'Zagthorp'));
