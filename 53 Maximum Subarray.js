/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums || nums.length <= 0)
        return 0;
    
    var max = nums[0];
    var maxAtI = nums[0];
    
    for(var i= 1; i<nums.length; i++){
        maxAtI = Math.max(maxAtI + nums[i], nums[i]);
        max = Math.max(max, maxAtI);
    }
    
    return max;
};