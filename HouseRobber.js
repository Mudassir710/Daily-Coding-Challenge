/** Day9#100DaysOfChallenge
 * @param {number[]} nums
 * @return {number}
 */
 const maxRobbedMoney = (nums) => {
  let dp=new Array(nums.length).fill(0);
  for(let i=0; i<nums.length; ++i){
      if(i == 0) dp[i] = nums[i];
      else dp[i] = Math.max(nums[i] + ((i > 1) ? dp[i-2] : 0), dp[i-1]);
  } 
  return dp[nums.length-1];
};

var rob = function(nums) {
  return maxRobbedMoney(nums);
};