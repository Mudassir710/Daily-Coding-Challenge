// Day7#100DaysOfChallenge
/**
 * @param {character[][]} grid
 * @return {number}
 */
 var explore = function(grid, i, j){
  let row = grid.length;
  let col = grid[0].length;
  if(i < 0 || j < 0 || i >= row || j >= col) return;
  if(grid[i][j] == '1'){
      grid[i][j] = '#';
      explore(grid, i+1, j);
      explore(grid, i-1, j);
      explore(grid, i, j+1);
      explore(grid, i, j-1);
  }
}
var numIslands = function(grid) {
  let count = 0;
  for(let i=0; i<grid.length; ++i){
      for(let j=0; j<grid[0].length; ++j){
          if(grid[i][j] == '1'){
             ++count;
              explore(grid, i, j);
          }
      }
  }
  return count;
  
};