// on row one push the value
// one row push the value
// on row three we can take the row before and add it
//

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  numRows = 5;
  let answer = [];
  let answer2 = [];
  // Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
  let c
  
  for (let i = 0; i < numRows; i++) {
    if (i == 0) {
      answer2.push([1]);
    } else if (i == 1) {
      answer2.push([1, 1]);
    } else if (i > 1) {
      let counter = 0
      for (let j = i; j < answer2[i].length; j++) { 
        console.log()
      }
    }
  }
  console.log(answer2);

  return answer;
};

generate();
