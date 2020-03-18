const longestprefix = (strs) => {
    let arr = [];

    for (let i = 0; i < strs.length; i++) {
        if(strs[i] === null || strs[i] === ''){
            return ''
        }
    }

   for(let i = 0; i < strs.length; i++){

       if(strs[0].charAt(i) === strs[1].charAt(i) && strs[1].charAt(i) === strs[2].charAt(i)){
           arr.push(strs[0].charAt(i))
       }else {
           return

   }

   let finalarr = arr.join('')

   return finalarr;

}

console.log(longestprefix(["flower","flow","flight"]));

const longestCommonPrefix = (strs) => {

   if(strs.length === 0){
       return '';
   }

    //prefix is the first word
    let prefix = strs[0];

    //loop through length of strs array
    for(let i = 1; i < strs.length; i++){

        //while the index of word is not 0
        while(strs[i].indexOf(prefix) !== 0) {

            //set prefix to substring prefix - 1
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix === null){
                return "";
            }
        }
    }

    return prefix;
}
