/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if( !nums || nums.length <= 0)
        return [];
    
    var result = [];
    var q = [];
    for(var i = 0; i<nums.length; i++){
        //Remove from q elements that are out of current window
        while(q.length >= 1 && q[0] < (i - k + 1))
            q.shift();
        
        //Remove from q elements that are smaller than current
        while(q.length >= 1 && nums[q[q.length - 1]] < nums[i])
            q.pop();
        
        q.push(i);
        
        if( i >= k - 1)
            result.push(nums[q[0]]);
    }
    
    return result;
};