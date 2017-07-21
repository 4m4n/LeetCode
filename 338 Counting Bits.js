/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if(num <= 0)
        return [0];
    
    var result = [];
    
    for(var i = 0; i<= num; i++)
        result.push(hammingWeight(i));
    
    return result;
};

var hammingWeight = function(number){
    var weight = 0;
    while(number){
        weight++;
        number = number & ( number - 1);
    }
    
    return weight;
}