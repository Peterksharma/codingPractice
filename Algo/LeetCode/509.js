/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    
  // F(n) = F(n - 1) + F(n - 2)
  
  //base Case
  const f2 = 1
  let nextValue = 0
    
  let numberArray = [0, 1]
  
    for (let i = 2; i <= n; i++) {
      let currentValue = i
      nextValue = numberArray[i-2]+numberArray[i-1]
      numberArray.push(nextValue)
      }
  
    
    
  if (n === 0) {
    console.log(0)
    return 0
  } else { 
  console.log(numberArray[n])
  return numberArray[n]
  }
};

fib(10)
