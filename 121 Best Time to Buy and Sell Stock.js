/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1)
        return 0;
        
    var minPrice = 2147483647;
    var maxProfit = 0;
    
    for(var i in prices){
        if(prices[i] < minPrice)
            minPrice = prices[i];
        else if(prices[i] - minPrice > maxProfit)
            maxProfit = prices[i] - minPrice;
        
    }
    
    return maxProfit;
};