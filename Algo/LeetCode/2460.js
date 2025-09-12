/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  nums = [1, 2, 2, 1, 1, 0]


    for (let i = 0; i < nums.length-1; i++) {

    if (nums[i] == nums[i + 1]) {
      nums[i] = nums[i] * 2
      nums[i+1] = 0

    }
      }


    indexDigit = 0 

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[indexDigit] = nums[i]
        indexDigit ++
      }
    }

    while (indexDigit < nums.length) {
      nums[indexDigit] = 0
      indexDigit ++
    }

  return nums
};

applyOperations()

