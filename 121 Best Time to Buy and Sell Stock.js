/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length <= 1)
        return 0;
        
    var minPrice = Number.MAX_VALUE;
    var maxProfit = 0;
    
    for(var i in prices){
        var currentPrice = prices[i];
        if(currentPrice < minPrice)
            minPrice = currentPrice;
        else 
            maxProfit = Math.max(maxProfit, currentPrice - minPrice);
    }
    
    return maxProfit;
};