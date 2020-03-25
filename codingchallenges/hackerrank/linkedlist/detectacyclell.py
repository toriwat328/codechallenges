class Node(object):
    def __init__(self, data = None, next = None):
        self.data = data
        self.next = next


# Created function has cycle which brings in the head as a parameter
def has_cycle(head):
    # Set variable curr (current) = to the head so that we can traverse the linkedlist
    curr = head
    # Seen variable is set equal to a set of unique values
    seen = set()

    # Create a while loop to look through linked list, if the current value is in the seen set of unique values then return that the linkedlist has a cycle otherwise the value to the set and set current node equal to the next node to traverse. If curr has all unique values then return false because there is no cycle in the linked list
    while curr:
        if curr in seen:
            return True
        seen.add(curr)
        curr = curr.next
    return False
