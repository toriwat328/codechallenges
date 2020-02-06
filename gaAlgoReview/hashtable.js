//hashtable

const contents = []

//Key Value Pair objects
const person1 = {
    name:'Matt',
    age: 39
}

const person2 = {
    name:'Bob',
    age: 12
}

const person3 = {
    name:'attM',
    age: 4000
}

const person4 = {
    name:'atMt',
    age: 100
}

//hash function to create a hash code that corresponds to index to insert key value pair
const hash = (value) => {
  let result = 0;
  for(let i = 0; i < value.length; i++){
      result += value.charCodeAt(i);
  }
  return result;
}

//insert new person into contents array by using hash function against the person obj name to create a value that becomes the index
const insert = (newPerson) => {
  const index = hash(newPerson.name);
  //if the contents array does not have something defined at that index, set the new Person object equal to the value of contents at that hash index
  if(contents[index] === undefined){
      contents[index] = newPerson;
  } else {
      //if there is something defined at that index, set a variable currentPersonInTable equal to that index value.
      let currentPersonInTable = contents[index];
      //while currentPersonInTable next property is defined, set currentPersonInTable to currentPersonInTable.next -> traversing the linked list until they find the tail of the linked list
      while(currentPersonInTable.next !== undefined){
          currentPersonInTable = currentPersonInTable.next;
      }
      //set currentPersonInTable.next that is undefined equal to the newPerson object
      currentPersonInTable.next = newPerson;
  }
}

insert(person1);
insert(person2);
insert(person3);
insert(person4);

console.log(contents[406]);
//in terminal the hash code looks like this
//[
//<275 empty items>
//{name: 'Bob', age: 12},
//<130 empty items>
//{ name: 'Matt', age: 39, next: {name: 'attM', age: 4000, next: {name: 'atMt', age: 100}}}
//]

//function to find a name within contents, Add name string as a parameter
const find = (name) => {
    //put name into the hash function to find the index
  const index = hash(name);
  //set variable foundperson = to context at the found index
  let foundPerson = contents[index];
  //while name is not equal to foundPerson.name. set found person = to foundperson.next to traverse through the linked list of people with the same hashcode and index
  while(name !== foundPerson.name){
      foundPerson = foundPerson.next;
  }
  //return the found person that is equal name
  return foundPerson;
}

console.log(find('atMt'));
//{name: 'atMt', age: 100}
