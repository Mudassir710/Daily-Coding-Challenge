/** Day14#100DaysOfChallenge
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
  let memo = [];
  for(let i=0; i<=n; ++i){
      if(i<=2) memo[i] = i;
      else memo[i] = memo[i-1] + memo[i-2];
  }
  return memo[n];
};