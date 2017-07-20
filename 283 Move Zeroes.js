/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(!nums || nums.length <= 1)
        return;
    
    var nonZeroIndex = 0;
    
    for(var cur = 0; cur<nums.length; cur++){
        if(nums[cur] != 0){
            var temp = nums[nonZeroIndex];
            nums[nonZeroIndex] = nums[cur];
            nums[cur] = temp;
            nonZeroIndex++;
        }
    }
};