/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    var map = {};
    
    return backtrack(s, wordDict, map, 0);
};

var backtrack = function(s, wordDict, map, start){
    if(start in map)
        return map[start];
    
    var result = [];
    
    if(start == s.length)
        result.push("");
    
    for(var end = start + 1; end <= s.length; end++){
        if(wordDict.indexOf(s.substring(start, end)) != -1){
            var words = backtrack(s, wordDict, map, end);
            for(var i in words)
                result.push(s.substring(start, end) + ((words[i] == "")? "": " ") + words[i]);
        }
    }
    
    map[start] = result;
    return map[start];
};