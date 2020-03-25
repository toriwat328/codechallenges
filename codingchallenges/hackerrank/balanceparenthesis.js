function getMin(s) {
    // Write your code here
    let openCount = 0
    let closeCount = 0

    for(let i = 0; i <= s.length-1; i++){
        if(s.charAt(i) === '('){
            openCount++
        }else if(s.charAt(i) === ')')
            closeCount++
    }

    if(openCount === closeCount){
        return 0;
    } else {
        // console.log(closeCount)
        // console.log(openCount)
        let finalCount = Math.abs(closeCount - openCount)
        return finalCount
    }

}
