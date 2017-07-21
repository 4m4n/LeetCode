/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    var memo = {};
    
    var numSteps = function(step){
        if(step < 0)
            return 0;
        
        if(step <= 1)
            return 1;
        
        if(step in memo)
            return memo[step];
        
        memo[step] = numSteps(step - 1) + numSteps(step - 2);
        
        return memo[step];
    }
    
    return numSteps(n);
};