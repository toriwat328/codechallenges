
const makeAnagram2 = (a, b) => {

    let freq1 = {};
    let freq2 = {};

    for(let i = 0 ; i < a.length; i++){
        let character = a.charAt(i)
        if(freq1[character]){
            freq1[character]++
        }else {
            freq1[character] = 1
        }

    }

    for(let i = 0 ; i < b.length; i++){
        let character = b.charAt(i)
        if(freq2[character]){
            freq2[character]++
        }else {
            freq2[character] = 1
        }

    }

    console.log(freq1);
    console.log(freq2);


    let tobedeleted = 0;
    let keyundefined = 0;

    const keys1 = Object.keys(freq1);
    const keys2 = Object.keys(freq2);


    for(let i = 0; i < keys1.length; i++){
        if (freq2[keys1[i]] === undefined || freq1[keys1[i]] === undefined){
            keyundefined++
            console.log(`${keys1[i]} is undefined keys1`);
            if(freq2[keys1[i]]){
                tobedeleted += freq2[keys1[i]];
                console.log(freq2[keys1[i]]);
                console.log(tobedeleted);
            }else if(freq1[keys1[i]]){
                tobedeleted += freq1[keys1[i]];
                console.log(freq1[keys1[i]]);
                console.log(tobedeleted);
            }

        } else if(freq2[keys1[i]] !== undefined && freq1[keys1[i]] !== freq2[keys1[i]] || freq1[keys2[i]] !== undefined && freq2[keys2[i]] !== freq1[keys2[i]]){
            console.log(`${keys1[i]} does not match`);
            let nomatch1 = Math.abs(freq2[keys1[i]] - freq1[keys1[i]]);

            tobedeleted += nomatch1;
            console.log(`no match added: + ${nomatch1}`);

        }

    }

    if(keyundefined > 0){
        for(let i = 0; i < keys2.length; i++){
            if (freq1[keys2[i]] === undefined || freq2[keys2[i]] === undefined){
                console.log(`${keys2[i]} is undefined key2`);
                if(freq1[keys2[i]]){
                    tobedeleted += freq1[keys2[i]];
                    console.log(freq1[keys2[i]]);
                    console.log(tobedeleted);
                }else if(freq2[keys2[i]]){
                    tobedeleted += freq2[keys2[i]];
                    console.log(freq2[keys2[i]]);
                    console.log(tobedeleted);
                }

            }

        }
    }



return tobedeleted;


}

console.log(makeAnagram2('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'));
