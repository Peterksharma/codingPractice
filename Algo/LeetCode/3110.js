/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    s = 'hello'
    let sArray = s.split('')
    let total = 0


    for(let i = 0; i < sArray.length; i++) {
        let charCode = sArray[i].charCodeAt()
        let currentCount = charCode
        if (i > 0) {
            let previousCount = sArray[i-1].charCodeAt()
            total += Math.abs(currentCount - previousCount)
        }
    }
    return total
};

scoreOfString()