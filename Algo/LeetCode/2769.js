/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
  let answer = 0
  while (num!== answer){
  if(num > answer) {
    answer ++
    num --
    console.log(num, answer)
  } else if (num < answer) {
    answer --
    num ++
    console.log(num, answer)
  }
  }
}

theMaximumAchievableX(4, 1)
