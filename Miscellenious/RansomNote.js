/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  const map = {};
  
  for(let i=0; i<ransomNote.length; ++i){
      if(map[ransomNote[i]] !== undefined){
          map[ransomNote[i]] = map[ransomNote[i]] + 1;
      }
      else {
          map[ransomNote[i]] = 1;
      }
  }

  for(let j=0; j<magazine.length; ++j){
      if(map[magazine[j]] !== undefined){
          map[magazine[j]] = map[magazine[j]] - 1;
      }
  }

  for(const key in map){
      if(map[key] > 0) return false;
  }
  
  return true;
};