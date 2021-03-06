/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if(!candidates || candidates.length <= 0)
        return [];
    
    var result = [];
    
    var backtrack = function(remain, currentList, start){
        if(remain < 0 )
            return;
        
        if(remain == 0)
            result.push(currentList.slice());
        else {
            for(var i = start; i<candidates.length; i++){
                if(i > start && candidates[i] == candidates[i-1])
                    continue;
                currentList.push(candidates[i]);
                backtrack(remain - candidates[i], currentList, i + 1);
                currentList.pop();
            }
        }
    }
    
    candidates.sort();
    backtrack(target, [], 0);
    
    return result;
};