
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs = ["flower","flow","flight", "flightw"]
    let newString = ''
    let counter = 0
    if (strs[0].length === 0) 
        {return ""}
    
    for (let i = 1; i < strs.length; i++) {
        if (strs[i-1].length > counter) {
            if (counter < strs[i].length) {
                counter = strs[i].length
                   console.log(counter)
            }
        }
    }


}

longestCommonPrefix()