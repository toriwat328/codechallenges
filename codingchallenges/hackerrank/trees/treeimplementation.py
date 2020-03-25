
# Create a node by setting data, left, right and level values of the node
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
        self.level = None
    # Need to look up this
    def __str__(self):
        return str(self.data)

# Create Binary Tree setting the root value to none and having the create method to create the tree
class BinarySearchTree:
    def __init__(self):
        self.root = None

    # create method with value parameter
    def create(self, val):
        # if the root is empty then create a node with the value parameter and set it equal to the root
        if self.root == None:
            self.root = Node(val)
        # else set the value of current variable equal to the root to traverse the tree and see where to place the new node
        else:
            current = self.root
            # while true
            while True:
                # if the value is less then the current node's data go to the left
                if val < current.data:
                    # if there is anything to the left of the current node
                    if current.left:
                        # set current variable to current's left node
                        current = current.left
                    else:
                        # else if there is nothing to the left, create a node with the value parameter and set it equal to current's left value
                        current.left = Node(val)
                        break
                # else if the value is greater than the current nodes data, go to the right
                elif val < current.data:
                    # if there is a node to right of current set current to that right node
                    if current.right:
                        current = current.right
                    else:
                        # otherwise create a new node with the value and set it equal to that right node
                        current.right = Node(val)
                        break
                else:
                    break
