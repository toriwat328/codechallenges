const util = require('util');

//creating nodes that have properties name and an array friends
const node1 = {
    name:"Bob",
    friends: []
}
const node2 = {
    name:"Sally",
    friends: []
}
const node3 = {
    name:"Zagthorp",
    friends: []
}
const node4 = {
    name:"Harry",
    friends: []
}
const node5 = {
    name:"Ellen",
    friends: []
}

let visited = [];

//pushing node 2 into node 1's friends array
node1.friends.push(node2);
node2.friends.push(node1);

node2.friends.push(node3);
node3.friends.push(node2);

node1.friends.push(node5);
node5.friends.push(node1);

// console.log(util.inspect(node1, {showHidden: false, depth: null, colors:true}));


//find if node is connected to name?
const find = (node, name) => {
    //establishing a check to understand what nodes we have visited to determine if there is a connection - hence visited array
    for(let fname of visited) {
        //if the node name is in the visited array that means that it was visited so we do not need to visit it again, thus returning false
        if(fname === node.name){
            console.log(fname);
            return false;
        }
    }
    //for node names that have not been visited, we push into the visited array
    visited.push(node.name);

    //if the node's name equals the name that we are trying to find then return true
    if(node.name === name){
        console.log(node.name);
        return true;
    } else {
        //if the node's name does not equal the name that we are trying to find, go through the node's friends through the find function until the node's name equal the name that we are searching for. If that is ultimately true making the if statement true, it the function will return true
        for (let friend of node.friends) {
            if(find(friend, name)){
                console.log('3');
                return true;
            }
        }
        //otherwise if we can not find a connection between the node and the name we are searching for, return false
        console.log('4');
        return false;
    }
}

console.log(node3);
console.log(find(node1, 'Ellen'));
console.log(visited);
