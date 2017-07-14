/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(!nums || nums.length <= 0)
        return nums;
    
    var result = [];
    
    var backTrack = function(list, start){
        result.push(list.slice());
        for(var i = start; i < nums.length; i++){
            list.push(nums[i]);
            backTrack(list, i + 1);
            list.pop();
        }
    };
    
    backTrack([], 0);
    
    return result;
};