/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if(!nums || nums.length <= 0)
        return;
    
    var low = 0; var high = Math.floor(nums.length / 2);
    
    while(low < high){
        var mid = Math.floor((low + high) / 2);
        if(nums[2 * mid] != nums [2* mid + 1])
            high = mid;
        else
            low = mid + 1;
    }
    
    return nums[2*low];
};