/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if(wordDict.length <= 0)
        return false;
    
    var dp = [true];
    
    for(var i = 1; i<= s.length; i++){
        for(var j = 0; j<i; j++){
            if(dp[j] && wordDict.indexOf(s.substring(j, i)) != -1)
            {
                dp[i] = true;
                break;
            }
        }
    }
    
    if(s.length >= dp.length)
        return false;
    
    return dp[s.length];
};

