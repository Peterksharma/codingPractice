

/**
 * @param {string} s
 * @return {number}
 */

s="IV"

var romanToInt = function(s) {

    const numeralMap= {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    
    let total = 0

    for (let i=0; i<s.length; i ++) {
        let current = s[i]
        let nextValue = s[i+1]

        if(numeralMap[current] < numeralMap[nextValue]){
            total -= numeralMap[current]
        } else {
            total += numeralMap[current]
        }
    }

    return total

};

console.log(romanToInt(s))

