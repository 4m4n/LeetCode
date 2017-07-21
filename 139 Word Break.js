/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    
    var map = {};
    
    return backtrack(s, map, wordDict, 0);
};

var backtrack = function(s, map, wordDict, start){
    if(start == s.length)
        return true;
    
    if(start in map)
        return map[start];
    
    for(var end = start + 1; end <= s.length; end++){
        if(wordDict.indexOf(s.substring(start, end)) != -1 && backtrack(s, map, wordDict, end))
            return map[start] = true;
    }
    
    return map[start] = false;
};