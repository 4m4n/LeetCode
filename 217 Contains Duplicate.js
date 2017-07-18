/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if(!nums || nums.length <= 0)
        return false;
    
    var map = {};
    
    for(var i in nums){
        if(nums[i] in map)
            return true;
        else
            map[nums[i]] = 1;
    }
    
    return false;
};