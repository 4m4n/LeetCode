/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(!s || s.length <= 0 || s.length < p.length)
        return [];
    
    var results = [];
    
    var pMap = {};
    
    for(var i in p){
        var currentChar = p[i];
        if(currentChar in pMap)
            pMap[currentChar]++;
        else
            pMap[currentChar] = 1;
    }
    
    for(var i in s){
        var currentChar = s[i];
        if(!(currentChar in pMap))
            pMap[currentChar] = 0;
    }
    
    var left =0; var right = 0;
    var count = p.length;
    
    while(right < s.length){
        if(pMap[s[right]] >= 1)
            count--;
            
        pMap[s[right]]--;
        right++;
        
        if(count === 0)
            results.push(left);
            
        if(right - left === p.length){
            if(pMap[s[left]] >= 0 )
                count++;
            pMap[s[left]]++;
            left++;
        }
    }
    
    
    return results;
};
