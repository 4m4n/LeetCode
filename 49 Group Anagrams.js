/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(!strs || strs.length <= 0)
        return [[]];
    
    var map = {};
    
    for(var i in strs){
        var currentStr = strs[i];
        var tempStr = currentStr;
        currentStr = stringSort(currentStr);
        
        if(currentStr in map)
            map[currentStr].push(tempStr);
        else
            map[currentStr] = [tempStr];
    }
    
    var results = [];
    
    for(var i in map)
        results.push(map[i]);
    
    return results;
};

var stringSort = function(str){
    return str.split("").sort().join("");
};