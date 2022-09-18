// Day16#100DaysOfChallenge
/**
 * @param {number[]} changed
 * @return {number[]}
 */
 var findOriginalArray = function(changed) {
  if(changed.length % 2 === 1) return [];
  
  const map = {};
  const res = [];
  changed.forEach(num => {
      if(map[num] !== undefined) map[num]++;
      else map[num] = 1;
  });
  
  changed.sort((a, b) => a-b);
  for(let i=0; i<changed.length; ++i){
     if(map[changed[i]] !== 0 && map[changed[i] * 2] !== undefined && map[changed[i] * 2] !== 0){
         map[changed[i]]--;
         map[changed[i] * 2]--;
         res.push(changed[i]);
     }
  }
  for(let key in map){
      if(map[key] !== 0) return [];
  }
  
  return res;
};