//Binary Search Tree

const util = require('util');

//Creating nodes with data properties with int values
const node1 = {
  data: 5
  //right: 7
    //right: 9
  //left: 1
    //left: 0
    //right: 2
    //-> right: 4 -> left: 3

};
const node2 = {
  data: 7
};
const node3 = {
  data: 1
};
const node4 = {
  data: 0
};
const node5 = {
  data: 2
};
const node6 = {
  data: 4
};
const node7 = {
  data: 3
};
const node8 = {
  data: 9
};

//creating a function to insert a node into the tree
//takes 2 parameters node that we want to insert and location that we want to insert it
const insert = (node, location) => {
    //if the node data value is less than the location data value
  if(node.data < location.data){
    if(location.left === undefined){
        //if location does not have a property called left, create that property and set it equal to the node.
      location.left = node;
    } else {
        //otherwise use recursion to have function call itself to insert the node in the left property of location
      insert(node, location.left);
    }
  } else {
     //otherwise if the node data is more than the location.data value and location right has not been defined, define it and set it equal to the node
    if(location.right === undefined){
      location.right = node;
    } else {
        //if location.right is defined use recursion to insert the node in the right property of location
      insert(node, location.right);
    }
  }
}

insert(node2, node1);
insert(node3, node1);
insert(node4, node1);
insert(node5, node1);
insert(node6, node1);
insert(node7, node1);
insert(node8, node1);

console.log(util.inspect(node1, {showHidden: false, depth: null, colors:true}))

//function to see if a node has a specific value
const find = (value, node) => {
    //if the node is not defined then return false
  if(node === undefined){
    return false;
    //if the data value equals the value argument return true
  } else if(node.data === value){
    return true;
    //if the value arg is less than the node data value, use find function of the value and the left property and return if that is equal
  } else if (value < node.data){
    return find(value, node.left);
    //if the value arg is more use find function to return if the value equals the nodes to the right
  } else {
    return find(value, node.right);
  }
}

console.log(find(2, node1));
