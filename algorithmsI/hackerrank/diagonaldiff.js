// Diagonal Difference

const diagonalDifference = ([][], arr) => {
    let leftToRight = 0;
    let rightToLeft = 0;

    let rows = arr.length;
    let columns = arr[0].length;

    let i = 0;
    let j = 0;
    let k = 0;
    let l = arr.length-1;

    while(i < rows && j < columns && k < rows && l >= 0){
        leftToRight += arr[i][j];
        rightToLeft += arr[k][l];
        i++;
        j++;
        k++;
        l--;
    }
    return Math.abs(leftToRight - rightToLeft);
}
