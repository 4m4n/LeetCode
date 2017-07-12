/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(!nums || nums.length <= 0)
        return null;
    
    nums.sort(sortNumber);
    
    return nums[nums.length - k];
};

var sortNumber = function(a,b) {
    return a - b;
}
