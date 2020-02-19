// Sock Merchant - Data Structure = SET
// n = number of socks
// ar = array of socks
const mySet = new Set()
let numPairs = 0

function sockMerchant(n, ar){
    loop through array of socks
    for(let i = 0; i < n; i++){
            // if mySet does not have the current element being iterated over, add the current element in the set
        if(!mySet.has(ar[i])){
            mySet.add(ar[i])
        } else {
                // else if the set does have the current element, since we want unique elements in the set we dont add and we just add to the number of pairs since we found a pair. We then delete this element from set since we found the pair
            numPairs++;
            mySet.delete(ar[i]);
        }
    }
        return the number of pairs
    return numPairs;
}
console.log(sockMerchant(8, [10,20,20,10,20,30,10]));
