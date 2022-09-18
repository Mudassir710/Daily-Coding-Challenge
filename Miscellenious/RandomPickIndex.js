/** Day14#100DaysOfChallenge
 * @param {number[]} nums
 */
 var Solution = function(nums) {
  this.nums = nums;
  this.length = nums.length;
};

/** 
* @param {number} target
* @return {number}
*/
Solution.prototype.pick = function(target) {
  if(this.length === 1) return 0;
  var result = 0;
  var count = 0;
  for (var i = 0; i < this.length; i++) {
      if (this.nums[i] == target) {
          if (Math.floor(Math.random() * (++count)) == 0) result = i;
      }
  }
  return result;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.pick(target)
*/