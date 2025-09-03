//set a counter
//if number between () is not %2 == 0 return false




/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            counter++;
        } else if (s[i] == ')') {
            counter--;
            if (counter < 0) {
                return false;    
            }
        }  // <-- Added this closing brace
    }
    return counter === 0;
};
console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("([])"))
console.log(isValid("([)]"))