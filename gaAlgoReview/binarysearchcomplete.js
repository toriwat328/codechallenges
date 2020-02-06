const recursiveBinarySearch = (arrayParam, element, start, end) => {
    const middle = Math.floor( (end - start)/2) + start;
    if(arrayParam[middle] == element){
        //return middle index
        return middle;
    } else if(arrayParam[middle] > element){
        return 'start: ' + start + ", end: " + (middle -1);
    } else if(arrayParam[middle] < element){
        return 'start: ' + (middle + 1)  + ", end: " + end;
    }

}

const myArray = [1,4,6,9,10];

const result = recursiveBinarySearch(myArray, 9, 0, 4);
//start at index 0 and then end at index myArray.length
console.log(result); 
