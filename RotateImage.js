// Day8#100DaysOfChallenge
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let length = matrix.length;
    for(let i=0; i<length; ++i){
        for(let j=0; j<length; ++j){
            //console.log(matrix[i][j], matrix[j][i]);
            if(i > j)[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
            //console.log(matrix[i][j], matrix[j][i]);
        }
    }
    for(let i=0; i<length; ++i){
        for(let j=0; j<Math.floor(length/2); ++j){
            [matrix[i][j], matrix[i][length-j-1]] = [matrix[i][length-j-1], matrix[i][j]];
        }
    }
};