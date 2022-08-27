
//Day5#100DaysOfChallenge
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    for(let i=0; i<nums.length; ++i){
        while(nums[i]>0 && nums[i]<=nums.length && nums[nums[i]-1] !== nums[i]){
            let tp = nums[nums[i]-1];
                nums[nums[i]-1] = nums[i];
                nums[i] = tp;
        }
    }
    
    for(let i=0; i<nums.length; ++i){
        if(i+1 != nums[i]) return i+1;
    }
    
    return (nums.length+1);
};