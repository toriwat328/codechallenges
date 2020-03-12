const reverse = (x) => {
    let isNegative;

    let arr = [];
    const string = x.toString();

    const split = string.split('');

    console.log(split);

    if(split[0] === '-'){
        isNegative = true;
        split.splice(0,1);
    }

    for(let i = split.length-1; i >= 0; i--){
        arr.push(split[i]);
    }

    if(isNegative){
        arr.unshift('-');
    }

    if(arr[0] === '0'){
        arr.splice(0,1)
    }

    console.log(arr);

    let joined = arr.join('')

    let final = parseInt(joined)

    return final;
}

console.log(reverse(120));
