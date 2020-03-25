let arr = [4,2,3,1]

const bubblesort = (a) => {
    let numOfSwaps = 0;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {

            if (a[j] > a[j + 1]) {
                let index = a[j]
                a[j] = a[j+1]
                a[j+1] = index
                numOfSwaps++;
            }
        }
    }

    console.log(`Array is sorted in ${numOfSwaps} swaps.`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[a.length-1]},`);

    return
}


console.log(bubblesort(arr));
