/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  
  
  if (divisor == 0) { 
    return undefined
  } else if (divisor == 1) {
    return dividend
  } else if (divisor == -1 &&  dividend < 0) {
    return -dividend
  }
  
  let flipdividend = false
  let flipdivisor = false
    
  if (dividend < 0) { 
    dividend = Math.abs(dividend)
    flipdividend = true
  }
  if (divisor < 0) { 
    divisor = Math.abs(divisor)
    flipdivisor = true
  }
  
    counter = 0
  while ((dividend - divisor) > 0) { 
    dividend -= divisor
    counter ++
  }
  
  if ((flipdividend == true && flipdivisor == false) || (flipdividend == false && flipdivisor == true)) { 
    counter = -counter
  }
  
  
  return counter
    
};

divide(1,-1)