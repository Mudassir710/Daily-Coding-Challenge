// Day6#100DaysOfChallenge
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var diagonalSort = function(mat) {
  let map = {};
  
  for(let i=0; i<mat.length; ++i){
      for(let j=0; j<mat[i].length; ++j){
          let diff = i-j;
          if(map[diff] === undefined){
              map[diff]=[];
          }
          map[diff].push(mat[i][j])
      }
  }
  for(let key in map){
      map[key].sort((a, b) => a-b);
  }
   
  for(let i=0; i<mat.length; ++i){
      for(let j=0; j<mat[i].length; ++j){
          let diff = i-j;
          mat[i][j] = map[diff].shift();
      }
  }
  return mat;
};