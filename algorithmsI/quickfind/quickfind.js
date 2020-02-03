//Quick Find Javascript implementation

//Quick Find is too slow and too expensive
//Quadradic N^2 time complexity - has to process N union commands on N objects
//Does not scale 

const quickfindSetup = (n) => {
    //set id of each object to itself
    let id = [];
    for(let i = 0; i < n; i++){
        id[i] = i;
    }

}

const connected = (p, q) => {
    //check whether p and q are in the same component (2 array accesses)
    return id[p] == id[q]
}

const union = (p, q) => {
    //change all entries with id[p] to id[q]
    let pid = id[p];
    let qid = id[q];

    for (let i = 0; i < id.length; i++) {
        if(id[i] == pid){
            id[i] = qid;
        }
    }
}
