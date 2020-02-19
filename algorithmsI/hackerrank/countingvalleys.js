// Counting Valleys
function countingValleys(n, s) {
    let altitude = 0;
    let num_valleys = 0;
    for(let i = 0; i < n; i++){
        if(s.charAt(i) == 'U'){
            if(altitude === -1){
                num_valleys++;
                // console.log(num_valleys);
            }
            altitude++;
            // console.log(altitude);
        }
        if(s.charAt(i) == 'D'){
            altitude--;
            // console.log(altitude);
        }
    }
    return num_valleys;
}

console.log(countingValleys(8, 'UDDDUDUU'));
