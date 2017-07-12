/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if(!nums || nums.length <= 1)
        return [];
    
    var left = [];
    var right =[];
    
    for(var i in nums)
        right.push(null);
    
    left[0] = 1;
    right[nums.length - 1] = 1;
    
    for(var i = 1; i<nums.length; i++)
        left[i] = left[i-1] * nums[i-1];
    
    for(var j = nums.length -2; j >= 0; j--)
        right[j] = right[j+1] * nums[j+1];
    
    var result = [];
    
    for(var i in nums)
        result.push(left[i] * right[i]);
    
    return result;
};