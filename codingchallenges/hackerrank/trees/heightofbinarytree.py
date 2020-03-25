
# my attempt
 def height(root):
     height = 0

     if root == None:
         return 0

     current = root

     while True:
         if current.left:
             height += 1
             current = current.left
             return height(current)
         elif current.right:
             height += 1
             current = current.right
             return height(current)
         else:
             break

     return height

# solution

def height(root):
    if root:
        return 1 + max(height(root.left), height(root.right))
    else:
        return -1
