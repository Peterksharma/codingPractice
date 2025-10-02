class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        nums =[1, 2, 3, 3]
      let seen = new Map()
    
      for (let num of nums) { 
        if(seen.has(num)) return true
      }
      return false
    }
}

let solution = new Solution()
solution.hasDuplicate()


