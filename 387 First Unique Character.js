/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if(s.length <= 0)
        return -1;
    
    if(s.length === 1)
        return 0;
        
    var map = {};
    
    for(var index in s){
        if(s[index] in map)
            map[s[index]]++;
        else
            map[s[index]] = 1;
    }
    
    if(Object.keys(map).length === 0 )
        return -1;
    
    for(var index in s){
        if(map[s[index]] == 1)
            return Number(index);
    }
    
    return -1;
};