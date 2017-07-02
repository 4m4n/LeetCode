/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(!nums || nums.length <= 0 )
        return;
        
    if(nums.length === 1)
        return nums[0];
        
    var map = {};
    
    for(var index in nums){
        var currentNumber = nums[index];
        
        if(currentNumber in map){
            if(map[currentNumber] <= 1)
                map[currentNumber]++;
            else
                delete map[currentNumber];
        } else
            map[currentNumber] = 1;
    }
    
    for(var i in map)
        return Number(i)
};