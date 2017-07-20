/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if(nums.length == 1)
        return nums[0];
    
    var candidate = null;
    var counter = 0;
    
    for(var i in nums){
        if(counter == 0) {
            candidate = nums[i];
            counter = 1;
        }
        else {
            if(nums[i] == candidate)
                counter++;
            else
                counter--;
        }
    }
    
    return candidate;
};