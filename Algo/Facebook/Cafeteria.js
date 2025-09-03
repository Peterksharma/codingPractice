
// N = row of seats (count)
// K = required Space
// M = Number of Diners
// S = Position of where theyn are seated



/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */
function getMaxAdditionalDinersCount(N, K, M, S) {
    K = 2
    S = [11, 6, 14]
    
    let SortedSeats = S.sort((a,b) => a - b)

    let counter = 0
    
    if(SortedSeats[0] > K) {
        let FirstSeats = Math.floor(SortedSeats[0]/K)
        for (let i = 0; i < FirstSeats; i++) {
            counter++
        }
    }

    let secondDistace = SortedSeats[1]-SortedSeats[0]
    

    return counter;
}

console.log(getMaxAdditionalDinersCount())