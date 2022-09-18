/** Day17#100DaysOfChallenge
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
  const length = height.length;
  const left  = new Array(length).fill(0);
  const right = new Array(length).fill(0);
  
  left[0] = height[0];
  for(let i=1; i<length; ++i){
      left[i] = Math.max(left[i-1], height[i]);
  }
  
  right[length-1] = height[length-1];
  for(let i=length-2; i>=0; --i){
      right[i] = Math.max(right[i+1], height[i]);
  }
  
  let maxWaterTrapped = 0;
  
  for(let i=1; i<length-1; ++i){
      let mini = Math.min(left[i], right[i]);
      if(mini > height[i]) maxWaterTrapped += (mini - height[i]);
  }
  
  return maxWaterTrapped;
};