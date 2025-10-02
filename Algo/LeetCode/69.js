/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    x = 4
    let numbers  = []

  for (let i = 0; i < x+1; i++){
    numbers.push(i)
  }

  let place =  numbers.length/2
  let arrayLocation = Math.floor(place)
  let halfDigit =(numbers[arrayLocation])
  

  // return Math.floor(anwser)
};

mySqrt()