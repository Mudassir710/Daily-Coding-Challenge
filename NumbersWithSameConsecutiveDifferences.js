/** Day11#100DaysOfChallenge
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
 var numsSameConsecDiff = function(n, k) {
  let res = new Set([1,2,3,4,5,6,7,8,9]);
  for(let i = 2; i <= n; ++i){ // starting numbers
      let updatedRes = new Set();
      //console.log('res', res);
      res.forEach(num => {
          let lastDigit = num % 10;
          if(lastDigit + k < 10){
              updatedRes.add(num * 10 + lastDigit + k);
          }
          if(k > 0 && lastDigit - k >= 0){
              updatedRes.add(num * 10 + lastDigit - k);
          }
      });
      //console.log('updatedRes', updatedRes);
      res = updatedRes;
  }
  return Array.from(res);
};