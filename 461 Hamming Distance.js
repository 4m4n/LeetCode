/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    if(x == y)
        return 0;
    
    var xor = x ^ y;
    var diff = 0;
    while(xor){
        diff++;
        xor = xor & (xor - 1);
    }
    
    return diff;
};