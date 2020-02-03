//Weighted Quick Union Javascript implementation

//Weighted Quick Union modifies quick union to aviod tall trees

//Weighted Quick Union with Path Compression is not quick linear in theory but it is linear in practice. 

//keep track of tree size (number of nodes)

//Balance by linking root of smaller tree to root of larger tree

//running time -> find takes time proportionally to depth of p and q, union is constant time

//depth of any node x is at most log N

let id = [];
let sz = [];

const weightedQuickUnion = (n) => {
    //set id of each object to itself
    for(let i = 0; i < n; i++){
        id[i] = i;
    }

}

const root = (i) => {
    //chase parent pointers until reach root (depth of i accesses)
    while(i != id[i]){
        i = id[i];
        //to add path compression and further optimize add this line by having every other node point to its grandparent (thereby halving the length)
        id[i] = id[id[i]];

        return i;
    }
}

const connected = (p, q) => {
    //check if p and q have the same root (depth of p and q accesses)
    return root(p) == root(q);
}

const union = (p, q) => {
    //change root of p to root of q (depth of p and q accesses)
    //small modification to account for linking root of smaller tree to root of larger
    let i = root(p);
    let j = root(q);

    if(i == j){
        return;
    }

    if(sz[i] == sz[j]){
        id[i] = j;
        sz[j] += sz[i];
    } else {
        id[j] = i;
        sz[i] += sz[j];
    }

}
