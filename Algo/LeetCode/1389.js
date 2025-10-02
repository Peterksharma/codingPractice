/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    nums = [0,1,2,3,4]
    index = [0,1,2,2,1]

    let targetArray = []
    
  for (let i = 0; i < index.length; i++) { 
    let numberToPush = nums[i]
    let placetoPush = index[i]
    targetArray.splice(placetoPush, 0 , numberToPush)
  }
    
     console.log(targetArray)
    
};

createTargetArray()