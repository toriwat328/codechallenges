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


//find node with a name with node and node and name as parameters
const find = (node, name) => {
    //iterate through names who have visited 
    for(let name of visited) {
        //if the name arg is the same as the node's name property, return false
        if(name === node.name){
            console.log('1');
            return false;
        }
    }
    //push node.name to visited array
    visited.push(node.name);

    //if node name arg is equal to name, return true
    if(node.name === name){
        console.log('2');
        return true;
    } else {
        //otherwise iterate through node's friends. if find friend return true
        for (let friend of node.friends) {
            if(find(friend, name)){
                console.log('3');
                return true;
            }
        }
        //otherwise return false
        console.log('4');
        return false;
    }
}

console.log(node1);
console.log(node2);
console.log(find(node1, 'Zagthorp'));
