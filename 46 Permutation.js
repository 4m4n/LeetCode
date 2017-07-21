/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length <= 0)
        return nums;
    
    var result = [];
    
    var backtrack = function(curList){
       if(curList.length == nums.length)
            result.push(curList.slice());
        else {
            for(var i = 0; i< nums.length; i++){
                if(curList.indexOf(nums[i]) != -1)
                    continue;
                curList.push(nums[i]);
                backtrack(curList);
                curList.pop();
            }
        }
    }
    
    backtrack([]);
    
    return result;
};

