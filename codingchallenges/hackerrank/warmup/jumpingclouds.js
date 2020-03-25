//Jumping On Clouds

function jumpingOnClouds(c) {
    let num_jumps = 0;
    let i = 0

    while(i < c.length-1){
        if(i+2 === c.length || c[i+2] === 1){
            i++;
            num_jumps++;

        } else {
            i += 2;
            num_jumps++
        }
    }
    return num_jumps;
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));
