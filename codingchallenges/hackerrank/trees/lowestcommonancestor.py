
# def lca(root, v1, v2):
#     # the value of a common ancestor has to always be between the two values in question
#
#     #decide if you have to call recursively
#     # is the root smaller than v1 and v2
#     if root.data < v1 and  root.data < v2:
#         root = lca(root.right, v1, v2)
#
#     #is the root larger than v1 and v2
#     if root.data > v1 and root.data > v2:
#         root = lca(root.left, v1, v2)
#
#     return root


def lca(root, v1, v2):
    temp = root

    while true:
        if temp.data > v1 and temp.data > v2:
            temp = temp.left;
        elif temp.data < v1 and temp.data < v2:
            temp = temp.right;
        else:
            return temp
