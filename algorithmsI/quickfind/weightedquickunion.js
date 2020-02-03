//Weighted Quick Union Javascript implementation

//Weighted Quick Union modifies quick union to aviod tall trees

//keep track of tree size (number of nodes)

//Balance by linking root of smaller tree to root of larger tree


const quickfindSetup = (n) => {
    //set id of each object to itself
    let id = [];
    for(let i = 0; i < n; i++){
        id[i] = i;
    }

}

const root = (i) => {
    //chase parent pointers until reach root (depth of i accesses)
    while(i != id[i]){
        return i;
    }
}

const connected = (p, q) => {
    //check if p and q have the same root (depth of p and q accesses)
    return root(p) == root(q);
}

const union = (p, q) => {
    //change root of p to root of q (depth of p and q accesses)
    let i = root(p);
    let j = root(q);
    id[i] = j;

}
