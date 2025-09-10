/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = 4
    y = 2
    
    counter = 0
    lengthCounter = 0

    let binaryY = y.toString(2)
    let binaryX = x.toString(2)

    if(binaryX.length > binaryY.length) {
        lengthCounter += binaryX.length
    } else {
        lengthCounter += binaryY.length
    }


    let lengthY = binaryY.padStart(lengthCounter,'0')
    let lengthX = binaryX.padStart(lengthCounter,'0')


    for(let i = 0; i < lengthX.length; i++) {
        if (lengthX[i] !== lengthY[i]) {
            counter++
        }
    }
    return counter

};

hammingDistance()
