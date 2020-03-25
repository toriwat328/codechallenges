const sortArray = (arr) => {
    for(let j = 0; j < arr.length; j++){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]){
                let index = arr[i]
                console.log(index, arr[i+1]);
                arr[i] = arr[i+1]
                arr[i+1] = index
            }
        }
    }


    return arr;
}
console.log(sortArray([4,3,2,1]));
