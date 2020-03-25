//FIGURED OUT FIND MERGE NODE

const findMergeNode(headA, headB){
    //set both heads to a variable
    let curr1 = headA;
    let curr2 = headB;

    //traverse the first linkedlist and marking each node
    while(curr1 !== null){
        curr1.mark = 1;
        curr1 = curr1.next;
    }

    //traverse the second linkedlist. if it sees a mark then that is when the lists merge and return that node's data, if not marked traverse 
    while(curr2 !== null){
        if(curr2.mark){
            return curr2.data
        }
        curr2 = curr2.next
    }

    return;
}
