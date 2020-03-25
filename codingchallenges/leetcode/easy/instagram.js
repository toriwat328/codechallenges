function stickers_for(phrase) {

const instagram = 'instagram'
const freq = {};
const freq2 = {};


for(let i = 0; i < instagram.length; i++){
    let char = instagram.charAt(i)
    if(freq[char]){
        freq[char]++
    }else {
        freq[char] = 1
    }
}

console.log(freq);

for(let i = 0; i < phrase.length; i++){
    let char = phrase.charAt(i)
    if(freq2[char]){
        freq2[char]++
    }else {
        freq2[char] = 1
    }

}

console.log(freq2);

let maxLetter = ''
let max = 1;
let times = 0

for(char in freq2){
    if(freq2[char] > max){
        maxLetter = char;
        max = freq2[char];
    }
}

console.log(max, 'max');
console.log(maxLetter, 'maxLetter');

if(freq2[maxLetter] > freq[maxLetter]){
    console.log(freq2[maxLetter]);
    console.log(freq[maxLetter]);
    times = Math.ceil(freq2[maxLetter] / freq[maxLetter])
    console.log(times, 'times');
}else {
    return 1;
}



return times;

}

console.log(stickers_for('artisan martians'));
