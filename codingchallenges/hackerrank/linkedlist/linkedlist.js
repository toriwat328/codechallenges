const linkedList = () => {
    let newNode = new Class(data);
    //currentHead is set to head so that you can traverse
    let currentNode = head;
    let index = 0;

    while(index < position-1){
        currentNode = currentNode.next;
        index++;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return head;


}
