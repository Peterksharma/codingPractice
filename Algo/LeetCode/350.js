/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

  let nums1Map = new Map()
  let solution = []
  
  for (let i = 0; i < nums1.length; i++) {
    let key = nums1[i]
    let currentVal = nums1Map.get(nums1[i])
    let value = currentVal== undefined ? 1 : currentVal + 1
    
    nums1Map.set(key, value)
  }
  
  for (let i = 0; i < nums2.length; i++) {
    let key = nums2[i]
    let count = nums1Map.get(key)

    if (count == undefined) {
      continue
    } else if (count > 0 ) {
      solution.push(key)
      count--
      nums1Map.set(key, count)
    }
  }

    
  return  solution
};

intersect()