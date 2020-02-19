const alternatingCharacters = (s) => {
    let deletions = 0;
    let string = s.split('');
    console.log(string);



    for(let i = 0; i < string.length; i++){
        console.log(string[i], i);
        if(string[i] === string[i + 1]){
            console.log(`to be removed: ${string[i]}, ${i}`);
            string.splice(i, 1);
            deletions++;
            i = i - 1
            console.log(string);
        }
    }
    console.log(string);


    return deletions;
}

console.log(alternatingCharacters('ABABABAB'));

const alternatingCharacters = (s) => {
    let deletions = 0;
    let string = s.split('');
    console.log(string);

    if(i === string.length-1){
        return deletions;
    }


    if(i < string.length-1){

    }

        // let i = 0;
        //
        // const test = () => {
        //     if(string[i] === string[i + 1]){
        //         console.log(`to be removed: ${string[i]}, ${i}`);
        //         string.splice(i, 1);
        //         deletions++;
        //         i = i - 1
        //     }
        //     i++
        // }






    return deletions;
}

console.log(alternatingCharacters('ABABABAB'));
