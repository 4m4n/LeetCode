/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(n <= 0 || k <= 0)
        return [];
    
    var result = [];
    
    var nums = [];
    
    for(var i = 1; i <= n; i++)
        nums.push(i);
    
    var backtrack = function(curList, start){
        if(start > nums.length)
            return;
        
        if(curList.length == k)
            result.push(curList.slice());
        else {
            for(var i = start; i<nums.length; i++){
                curList.push(nums[i]);
                backtrack(curList, i + 1);
                curList.pop();
            }
        }
    };
    
    backtrack([], 0);
    
    return result;
};