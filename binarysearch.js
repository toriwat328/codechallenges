//Binary Search

//my questions: what do start and end represent as well as middle, why do we return -1 if start is greater than end

//function that passes in parameters, the array, element that we are searching for, the start index and the end which is the array's length

const recursiveBinarySearch = (arr, element, start, end) => {
    //search for the middle index of the array by subtracting the array length(end) by the start and dividing by 2 and adding it to start
    const middle = Math.floor( (end-start)/2 ) + start;

    //if start is greater than end return -1
    if(start > end){
        return -1;
    }
    //if the middle index equals the element than return middle
    if(arr[middle] == element){
        return middle;
    //if the middle index is greater than the element, invoke recursive function and add middle -1 as the end
    } else if(arr[middle] > element) {
        return recursiveBinarySearch(arr, element, start, middle-1);
        //if the middle index is less than the element, invoke recursive function and add middle +1  as the start
    } else if(arr[middle] < element) {
        return recursiveBinarySearch(arr, element, middle+1, end);
    }
}

const array = [1, 4, 6, 9, 10];

console.log(recursiveBinarySearch(array, 4, 0, array.length));
