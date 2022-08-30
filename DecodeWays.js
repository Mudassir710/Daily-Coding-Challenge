// Day8#100DaysOfChallenge
/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
  let dp = new Array(s.length+1).fill(0);
  
  dp[0] = 1;
  dp[1] = s[0] != '0' ? 1 : 0;
  for(let i=2; i<=s.length; ++i){
      let singleDigit = s[i-1];
      let doubleDigit = s[i-2]+s[i-1];
      if(singleDigit >= '1' && singleDigit <= 9){
          dp[i] += dp[i-1];
      }
      if(doubleDigit >= '10' && doubleDigit <= '26'){
          dp[i] += dp[i-2];
      }
  }
  return dp[s.length];
};