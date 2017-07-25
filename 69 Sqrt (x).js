/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x <= 1)
        return x;
    
    var min = 1; var max = 2147483647;
    
    while(true){
        var mid = min + (max - min)/2;
        
        if(mid > x/mid)
            max = mid - 1;
        else {
            if ( mid + 1 > x / (mid + 1))
                return mid;
            min = mid + 1;
        }
    }
};