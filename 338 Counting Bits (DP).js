/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if(num <= 0)
        return [0];
    
    var dp = [0];
    var b = 1;
    var i = 0;
    
    while(b <= num){
        while(i<b && i + b <= num){
            dp[i+b] = dp[i] + 1;
            i++
        }
        i = 0;
        b = b<<1;
    }
    
    return dp;
};

