// const longestprefix = (strs) => {
//     let arr = [];
//
//     for (let i = 0; i < strs.length; i++) {
//         if(strs[i] === null || strs[i] === ''){
//             return ''
//         }
//     }
//
//    for(let i = 0; i < strs.length; i++){
//
//        if(strs[0].charAt(i) === strs[1].charAt(i) && strs[1].charAt(i) === strs[2].charAt(i)){
//            arr.push(strs[0].charAt(i))
//        }else {
//            return
//
//    }
//
//    let finalarr = arr.join('')
//
//    return finalarr;
//
// }
//
// console.log(longestprefix(["flower","flow","flight"]));

const longestCommonPrefix = (strs) => {

   if(strs.length === 0){
       return '';
   }

    //prefix is the first word
    let prefix = strs[0];

    console.log(prefix, 'init prefix');

    //loop through length of strs array
    for(let i = 1; i < strs.length; i++){
        console.log('round');
        //look at at word in array and find index of prefix. continue to run as long as index is not 0
        //while prefix does not match the word at index i
        while(strs[i].indexOf(prefix) !== 0) {
            console.log(strs[i].indexOf(prefix), i);
            //set prefix to substring prefix - 1
            prefix = prefix.substring(0, prefix.length - 1);

            console.log(prefix, 'after');
            if(prefix === null){
                return "";
            }
        }
    }

    return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));


// let strs = ["flower","flow","flight"]
//
// console.log(strs[1].indexOf('flow'));
