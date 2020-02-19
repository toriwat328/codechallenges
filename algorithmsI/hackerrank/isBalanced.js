const isBalanced = (s) => {
    let stack = new Stack()
//looping through s array
    for(let i = 0; i < s.length-1; i++){
        //if the current character is equal to parathesis, curly or bracket push the character to the stack we created.
        if(s.charAt(i) === '(' || s.charAt(i) === '{' || s.charAt(i) === '[') {
            stack.push(s.charAt(i));
            //else if the stack is empty return no because there is none of those characters in the array.
        } else {
            if(stack.isEmpty()){
                return 'NO';
                //else set popVal variable equal to the character that we are removing from the top of the stack.
            } else {
                let popVal = stack.pop();
                //if the current character is equal to ) and the current variable at the top that we are popping is not equal to the closing character return no.
                if(s.charAt(i) === ')' && popVal !== '('){
                    return 'NO';
                } else if (s.chartAt(i) === '}' && popVal !== '{'){
                    return 'NO'
                } else if(s.chartAt(i) === ']' && popVal !== '['){
                    return 'NO'
                }
            }
        }
    }
    if(stack.isEmpty()){
        return 'YES';
    } else {
        return 'NO';
    }
}
