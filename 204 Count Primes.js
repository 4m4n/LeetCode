/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <= 1)
        return 0;
    
    var isPrime = {};
    
    for(var i = 0; i<=n; i++)
        isPrime[i] = 1;
    
    for(var p = 2; p*p <= n; p++){
        if(isPrime[p]){
            for(var j = 2*p; j<= n; j= j + p)
                isPrime[j] = 0;
        }
    }
    
    var result = 0;
    
    for(var i= 2; i< n; i++){
        if(isPrime[i])
            result++;
    }
    
    return result;
};