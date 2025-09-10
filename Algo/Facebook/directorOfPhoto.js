//iterate through the string
//find the first P or B
//iterate through into the inverse of above is found (if p is found looking for a B, vise verse)
//Count the space between


/**
 * @param {number} N
 * @param {string} C
 * @param {number} X
 * @param {number} Y
 * @return {number}
 */
function getArtisticPhotographCount(N, C, X, Y) {
    
    N = 5       //Cell Length
    C = "APABA"   //Order of things
    X = 1       //Valid Min Distance
    Y = 2       //Valid Max Distance

    let possiblePhoto = 0
    let counter1 = 0
    let filledCells = C.split('')


    for (let i = 0; i < filledCells.length; i++) {
        if (filledCells[i] == "P" || filledCells[i] == "B") {
            counter1++
            console.log('counter at:', counter1, 'from position:', i)
        }
    }


  return possiblePhoto;
}

getArtisticPhotographCount()
