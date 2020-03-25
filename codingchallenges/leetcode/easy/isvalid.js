const isvalid = (s) => {
    if(s === ''){
        return true
    }

    if(s.charAt(0) === ')' || s.charAt(0) === '}' || s.charAt(0) === '}'){
        return false;
    }


    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '['){
            stack.push(s.charAt(i))
            console.log(stack);
        } else if(stack[stack.length-1] === '(' && s.charAt(i) === ')' || stack[stack.length-1] === '[' && s.charAt(i) === ']' || stack[stack.length-1] === '{' && s.charAt(i) === '}'){
                stack.pop()
                console.log(stack);
        }else {
            return false;
        }

    }

    console.log(stack);
    if(stack[0]){
        return false
    }else {
        return true
    }
}

console.log(isvalid('()'));
