/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(!strs || strs.length <= 0)
        return [[]];
    
    var map = {};
    
    var primes = getPrimes(101);
    
    for(var i in strs){
        var currentStr = strs[i];
        var key = 1;
        
        for(var j in currentStr)
            key *= primes[currentStr.charCodeAt(j) - 97];
        
        
        if(key in map)
            map[key].push(currentStr);
        else
            map[key] = [currentStr];
    }
    
    var result = [];
    
    for(var i in map)
        result.push(map[i]);    
    
    return result;
};


var getPrimes = function(n){
    if(n <= 0)
        return [];
    
    var isPrime = {};
    
    for(var i = 2; i <= n; i++)
        isPrime[i] = true;
    
    for(var p = 2; p * p <= n; p++){
        if(isPrime[p]){
            for(var j = 2 * p ; j <= n; j += p)
                isPrime[j] = false;
        }
    }
    
    var result = [];
    
    for(var i = 2; i <= n; i++){
        if(isPrime[i])
            result.push(i);
    }    
    
    return result;
}
