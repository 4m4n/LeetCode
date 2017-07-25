/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(!nums || nums.length <= 0)
        return 0;
    
    var max = nums[0];
    var min = nums[0];
    var result = nums[0];
    
    for(var i = 1; i< nums.length; i++){
        var temp = max;
        max = Math.max(Math.max(max * nums[i], min * nums[i]), nums[i]);
        min = Math.min(Math.min(temp * nums[i], min * nums[i]), nums[i]);
        
        if(max > result)
            result = max;
    }
    
    return result;
};