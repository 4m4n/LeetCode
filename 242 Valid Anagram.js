/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length <= 0 || t.length <= 0 )
        return true;
        
    if(s.length != t.length)
        return false;
        
    var map = {};
    
    for(var index in s){
        if(s[index] in map)
            ++map[s[index]];
        else
            map[s[index]] = 1;
    }
    
    for(var index in t){
        if(!(t[index] in map) || map[t[index]] <= 0)
            return false;
        else
            --map[t[index]];
    }
    
    return true;
};