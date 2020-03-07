//Write function that follows this pattern
// fn(2, ae) -> True
// fn(2eeee, e) -> False



const makepattern = (pattern, word) => {
    let number = [];
    let countWord = 0;
    let countPattern = 0;

    if(pattern === word){
        return true
    }

    const splitpattern = pattern.split('')

    for(let i = 0; i <= splitpattern.length-1; i++){
        if(!isNaN(splitpattern[i])){
            number.push(parseInt(splitpattern[i]));
            splitpattern.splice(i, 1);
        }
    }

    for(let i = 0; i <=splitpattern.length-1; i++){
        countPattern++
    }

    for(let i = 0; i <= word.length-1; i++){
        countWord++
    }

    let diff = Math.abs(countPattern - countWord)

    if(diff === number[0]){
        return true
    } else {
        return false
    }


}

console.log(makepattern('2eeee', 'e'));
