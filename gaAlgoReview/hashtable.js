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
      let currentPersonInTable = contents[index];
      while(currentPersonInTable.next !== undefined){
          currentPersonInTable = currentPersonInTable.next;
      }
      currentPersonInTable.next = newPerson;
  }
}
