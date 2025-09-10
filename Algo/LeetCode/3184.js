/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    hours = [72,48,24,3]
    let  counter = 0 

    for(let i = 0; i < hours.length; i++) {
        for(let j = i+1; j < hours.length; j++) {
            if((hours[i]+hours[j]) % 24 === 0) {
                console.log('complete day found at', i, j)
                counter++
        } 
        }
        }
    return counter
};

countCompleteDayPairs()
