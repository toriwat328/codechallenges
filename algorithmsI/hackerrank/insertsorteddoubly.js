class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertNode(data){
        let node = new Node(data)

        if(this.head = null){
            this.head = node;
        }else {
            this.tail.next = node;
            node.prev = this.tail
        }

        this.tail = node;
    }

    //Within an already sorted linked list, insert a node
    sortedInsert(head, data){
        //Create Node to insert
        let node = new Node(data)

        //insert in empty linkedlist
        if(head == null){
            return node;
            //insert in front of list
            //if the data we are inserting is less then the head, we have to insert it before the head
        } else if (data < head.data){
            node.next = head
            head.prev = node;
            return node;
        }else {
            //Walk list with 2 pointers
            //n1 is behind n2
            let n1 = null;
            let n2 = head;
            //when n2 is not empty and n2's data is less than the data we want to insert
            while(n2 !== null && n2.data < data){
                //traverse
                n1 = n2;
                n2 = n2.next;
            }

            //insert at end of linkedlist
            //if n2 traverses to the end of the linkedlist, that means that the data we are inserting is greater than data of other nodes. There for since n1 is one step behind, n1.next would be null so that is where the node should be inserted
            if(n2 === null){
                n1.next = node;
                //since it is a doubly ll, you need to define the prev property to be n1
                node.prev = n1
            } else { // if n2.data is greater than the data we want to insert, set n1 next to node since it is one step behind and set n2.prev to node to set node before the data that is greater. set nodes prev and next properties
                n1.next = node;
                n2.prev = node;
                node.prev = n1;
                node.next = n2;
            }
        }

        return head;
    }
}
