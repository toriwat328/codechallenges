// This solution is not working. Think that i need to incorporate a hashtable. I would need to insert magazine into the hashtable and then look up each word in note to see if it is there.
//
// MAJOR KEY - JS arrays ARE hash tables!
// const checkMagazines = (magazine, note) => {
//     let wordcount = 0;
//
//     const mySet = new Set()
//
//     for(let i = 0; i < magazine.length; i++){
//         if(!mySet.has(magazine[i])){
//             mySet.add(magazine[i])
//         }
//     }
//
//     for(let i = 0; i < note.length; i++){
//         if(mySet.has(note[i])){
//            wordcount++
//         }
//     }
//
//     if(wordcount !== note.length){
//         return 'No'
//     } else {
//         return 'Yes'
//     }
// }

const checkMagazines = (magazine, note) => {
    //magazine is a hashtable
    if(magazine.length < note.length){
        return 'No';
    }

    let wordcount = 0;

    let magazine1 = magazine.sort()
    let note1 = note.sort()

    const mag = new Map();

    for(let i = 0; i < magazine1.length; i++){
        mag.set(magazine1[i], i);
    }

    console.log(mag);

    for(let i = 0; i < note1.length; i++){
        if(wordcount === note1.length){
            break;
        }
        if(mag.has(note1[i])){
            wordcount++;
            mag.delete(note1[i]);
        }

    }

    if(wordcount !== note1.length){
        return 'No';
    } else {
        return 'Yes';
    }
}

console.log(checkMagazines(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']));

console.log(checkMagazines(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four']));

console.log(checkMagazines(['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'], ['ive', 'got', 'some', 'coconuts']));
