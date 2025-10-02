/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  n = 5
  m = 1

  let nAraay = []
  let cArray = []
  
  for (let i = 1; i < n + 1; i++) {
    if (i % m == 0) {
      cArray.push(i)
    } else {
      nAraay.push(i)
    }
  }
  
  let counter1 = 0
  let counter2 = 0
  
  for (let i = 0; i < nAraay.length; i++) {
    counter1 += nAraay[i]
  }
  
  for (let i = 0; i < cArray.length; i++) { 
    counter2 += cArray[i]
  }
  
  return counter1-counter2
};

differenceOfSums()