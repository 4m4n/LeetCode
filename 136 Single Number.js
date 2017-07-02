/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(!nums || nums.length <= 0)
        return;
        
    if(nums.length <= 1)
        return nums[0];
        
    var result = 0;
    
    for(var i in nums)
        result = result ^ nums[i];
    
    return result;
};