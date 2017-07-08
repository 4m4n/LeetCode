/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length <= 1)
        return [];
    
    var map = {};
    
    for(var i = 0; i<nums.length; i++){
        var diff = target - nums[i];
        if(nums[i] in map)
            return [map[nums[i]], i];
        else
            map[diff] = i;
   }
    
    
    return [];
};