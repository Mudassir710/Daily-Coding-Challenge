
// Day6#100DaysOfChallenge
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  let start = 0, end = nums.length-1;
  
  while(start <= end){
      const mid = (start+end) >> 1;
      if(nums[mid] >= target) end = mid -1;
      else start = mid + 1;
  }
 //   console.log(start, end);

  if(nums[start] !== target) return [-1,-1];
  
  const startIndex = start;
  
  end = nums.length-1;
  
  while(start <= end ) {
      const mid = start + end >> 1;
      
      if(nums[mid] <= target) start = mid + 1;
      else end = mid -1;
  }
  //nsole.log(start, end);
  return [startIndex, end]

};

/*
[5,7,7,8,8,10]
[0,1,2,3,4,5]

first 0  
mid   2
last  5
*/