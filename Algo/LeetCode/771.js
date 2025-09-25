/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  jewels = "aA";
  stones = "aAAbbbb";

  jewelCounter = 0
  
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] == jewels[j]) { 
        jewelCounter++
      }
    }
    
  }
  return jewelCounter
};

numJewelsInStones();
