/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(!nums || nums.length <= 0)
        return 0;
    
    var curMax = 0;
    var prevMax = 0;
    
    for(var i in nums){
        var temp = curMax;
        curMax = Math.max(prevMax + nums[i], curMax);
        prevMax = temp;
    }
    
    return curMax;
};