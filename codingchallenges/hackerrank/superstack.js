let stack = [];

function superStack(operations) {
    for(let i = 0; i < operations.length; i++){
        let op = operations[i].split(' ')

        if(op[0] === 'push'){
            let v = parseInt(op[1])
            stack.push(v);
            console.log(stack[stack.length-1])
        }else if(op[0] === 'pop'){
            stack.pop();
            if(!stack[0]){
                console.log('EMPTY')
            }else {
                console.log(stack[stack.length-1])
            }
        }else if(op[0] === 'inc'){
            let bottoms = parseInt(op[1])
            console.log(bottoms)
            bottoms = Math.min(stack.length, bottoms)
            let increment = parseInt(op[2])
            console.log(increment)
            for(let j = 0; j < bottoms ; j++){
                stack[j] += increment
            }
            if(!stack[0]){
                console.log('EMPTY')
            }else {
                console.log(stack[stack.length-1])
            }
        }
    }

}

superStack([])
