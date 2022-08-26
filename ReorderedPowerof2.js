// Day4#100DaysOfChallenge
var count = (n) => {
  const map = {};
  while(n > 0) {
      if(map[n%10] !== undefined){
          map[n%10] = map[n%10] + 1;
      }
      else map[n%10] = 1;
      n = Math.floor(n/10);
  }
  return map;
}

/**
* @param {number} n
* @return {boolean}
*/
var reorderedPowerOf2 = function(n) {
  const countN = count(n);
  //console.log(countN);
  for(let i=0; i<31; ++i){
      if(JSON.stringify(countN) === JSON.stringify(count(1 << i))){
          return true;
      }
  }
  return false;
};