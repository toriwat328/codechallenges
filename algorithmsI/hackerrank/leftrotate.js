const leftrotate = (a, d) => {


        for(let i = 0; i < d; i++){
            a.splice(a.length, 0, a[0]);
            a.shift();
        }

    return a;

}

console.log(leftrotate(arr, 5, 4));
