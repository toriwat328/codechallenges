let pricesArr = [1, 2, 3, 4];

// const maximumToys = (prices, b, gifts) => {
//
//     let sortprices = prices.sort();
//     console.log(sortprices);
//
//     if(b <= 0){
//         console.log('reached my limit: ', gifts);
//         return gifts;
//
//     }
//
//     if(b - sortprices[0] >= 0){
//         let newbudget = b - sortprices[0];
//         console.log(newbudget);
//         sortprices.shift();
//         gifts++;
//         console.log(gifts);
//         maximumToys(sortprices, newbudget, gifts)
//     }
//
//
// }

const maximumToys = (prices, b) => {
    let gifts = 0;
    let budget = b;
    const numSort = (a, b) => {
        return a - b;
    }

    let sortedPrices = prices.sort(numSort);

    for(let i = 0; i < sortedPrices.length; i++){
        if(budget - sortedPrices[i] <= 0){
            return gifts;
        } else if(budget - sortedPrices[i] >= 0){
            budget = budget - sortedPrices[i];
            gifts++;
        }
    }



}

console.log(maximumToys(pricesArr, 7));
