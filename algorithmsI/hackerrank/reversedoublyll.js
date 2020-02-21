const util = require('util');

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
        let node = new Node(data);

        if(this.head == null){
            this.head = node
        } else {
            this.tail.next = node;
            node.prev = this.tail
        }

        this.tail = node;
    }

    reverse(head){
        let curr = head
        let temp = curr.next
        curr.next = curr.prev
        curr.pre = temp
        return temp == null ? curr : this.reverse(temp)
    }
}

const ll = new LinkedList();

ll.insertNode(100);
ll.insertNode(200);
ll.insertNode(300);
ll.insertNode(400);

console.log(util.inspect(ll, {showHidden: false, depth: null, colors:true}));

ll.reverse(ll.head)

console.log(util.inspect(ll, {showHidden: false, depth: null, colors:true}));
