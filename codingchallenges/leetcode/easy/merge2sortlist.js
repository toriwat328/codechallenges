
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }


var mergeTwoLists = function(l1, l2) {
        let l3 = new ListNode();


        while(l1 && l2){
            if(l1.val < l2.val){
                l3.next = l1;
                l1 = l1.next;
            }else {
                l3.next = l2;
                l2 = l2.next;
            }
            l3 = l3.next;
        }

    if(l1){
        l3.next = l1;
    }

    if(l2){
        l3.next = l2;
    }

    return l3.next;

};
//[1,2,4]
//[3,4]

//the val of both lists
1 1 'val'
//current l3
ListNode { val: 0, next: null } 'l3'
//current l3 after setting l3.next = l2
ListNode {
  val: 0,
  next:
   ListNode { val: 1, next: ListNode { val: 3, next: [ListNode] } } } 'l3'
//the val of both lists
1 3 'val'
//current l3 after traversing l3 = l3.next
ListNode {
  val: 1,
  next: ListNode { val: 3, next: ListNode { val: 4, next: null } } } 'l3'

 //l3.next = l1
ListNode {
  val: 1,
  next: ListNode { val: 2, next: ListNode { val: 4, next: null } } } 'l1'

//traversing l1
ListNode { val: 2, next: ListNode { val: 4, next: null } } 'l1-2'

//traversing l3 l3 = l3.next
ListNode {
  val: 1,
  next:
   ListNode { val: 1, next: ListNode { val: 2, next: [ListNode] } } } 'l3'

2 3 'val'
ListNode {
  val: 1,
  next: ListNode { val: 2, next: ListNode { val: 4, next: null } } } 'l3'
ListNode { val: 2, next: ListNode { val: 4, next: null } } 'l1'
ListNode { val: 4, next: null } 'l1-2'
ListNode {
  val: 1,
  next: ListNode { val: 2, next: ListNode { val: 4, next: null } } } 'l3'
4 3 'val'
ListNode { val: 2, next: ListNode { val: 4, next: null } } 'l3'
ListNode {
  val: 2,
  next: ListNode { val: 3, next: ListNode { val: 4, next: null } } } 'l3'
4 4 'val'
ListNode { val: 3, next: ListNode { val: 4, next: null } } 'l3'
ListNode { val: 3, next: ListNode { val: 4, next: null } } 'l3'
