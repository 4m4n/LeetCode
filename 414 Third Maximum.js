/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var count = 0;
    var min , mid,  max = -2147483648;
    
    for(var i in nums){
        if(count > 0 && nums[i] == max || count >  1 && nums[i] == mid)
            continue;
        count++;
        
        if(nums[i] > max){
           min = mid;
           mid = max;
           max = nums[i];
           continue;
        }
        
        if(nums[i] > mid){
            min = mid;
            mid = nums[i];
            continue;
        }
        
        if(nums[i] > min)
            min = nums[i];
    }
    
    return (count < 3) ? max: min;
};