/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    if(!s || s.length <= 1)
        return s;
    
    var map = {};
    
    for(var i in s){
        if(s[i] in map)
            map[s[i]]++;
        else
            map[s[i]] = 1;
    }
    
    var sortedKeys = Object.keys(map).sort(function(a, b){return map[b] - map[a] });
    
    var result = "";
    
    for(var i in sortedKeys){
        for(var j = 0; j< map[sortedKeys[i]]; j++)
            result += sortedKeys[i];
    }
    
    return result;
};