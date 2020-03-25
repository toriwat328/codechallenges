const implementstr = (haystack, needle) => {
    let hasNeedle = haystack.includes(needle);

    let ans = haystack.indexOf(needle)

    if(hasNeedle){
        return ans;
    }else {
        return -1;
    }


}

console.log(implementstr("hello", "ll"));
