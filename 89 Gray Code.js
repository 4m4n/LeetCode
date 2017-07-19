/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if(!n)
        return [0];
    
    var result = [];
    
    var numBits = 1<<n;
    
    for(var i = 0; i< numBits; i++)
        result.push( i ^ i>>1);
    
    return result;
};