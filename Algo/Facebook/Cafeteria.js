/**
 * @param {number} N
 * @param {number} K
 * @param {number} M
 * @param {number[]} S
 * @return {number}
 */

function getMaxAdditionalDinersCount(N, K, M, S) {

    N = 10
    K = 1
    M = 2
    S = [2, 6]

    let SortedSeats = S.sort((a, b) => a - b);
    let counter = 0;
    
    //Space Before
    let spaceBefore = SortedSeats[0] - 1
    counter += Math.floor((spaceBefore) / (K+1))
    console.log(counter, 'people fit before the first already sitting person.')

    
    for (let i = 1; i < SortedSeats.length; i++) {
        let spaceBetween = ((SortedSeats[i]-1) - SortedSeats[i-1]);
        let adjustedSpace = spaceBetween - K
        let peopleThatFitBetween = Math.floor(adjustedSpace/(K+1))
        if(peopleThatFitBetween > 0 ) {
            
            console.log('There ', peopleThatFitBetween, 'people(s) that can fit between seat', SortedSeats[i-1], 'and seat', SortedSeats[i])
            counter += peopleThatFitBetween
            console.log('Counter is at:', counter)
        }
    }
    
    let spaceAfterLast = N - SortedSeats[SortedSeats.length - 1 ];
    let spaceAFterCanFit = Math.floor((spaceAfterLast) / (K+1))
    console.log('This many people fit after the last seated person: ', spaceAFterCanFit)
    counter += spaceAFterCanFit
    console.log('counter count after space after:', counter)

    
    return counter;
}

getMaxAdditionalDinersCount()