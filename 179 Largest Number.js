/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    if(!nums || nums.length <= 0)
        return "";
    
    nums.sort(function(a, b){
        return ("" + a + b) > ("" + b + a) ? -1: 1;
    });
    
    
    if(nums[0] == 0)
        return "0";
    
    return nums.join("");
};