//Make the shape
//If its 1 row return the value
//if its 2 rows custom return
//
//if its more than three rows we need to go to the answer.[i]
//take the current 

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

  let answer = [];
 
  if(numRows == 1 ) {
    answer.push([1])
  } else if (numRows == 2) {
    answer.push([1],[1,1])
  }

  for(let row = 0 ; row < numRows; row++){
      answer.push([1])
  }

  console.log(answer)
};

generate(5)
