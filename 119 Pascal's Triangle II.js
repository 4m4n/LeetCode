/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex < 0)
    	return [];
   	
    if(rowIndex == 0)
        return [1];
    
    var results = [];
    var map = {};
    
    for(var i = 0; i<= rowIndex; i++){
        var diff = rowIndex - i;
        if(i in map)
            results.push(map[i]);
        else {
            var bCoff = coff(rowIndex, i);
            map[diff] = bCoff;
            results.push(bCoff);
        }
    }
    
    return results;
};

var coff = function(n, r){
    return fact(n) / (fact(n - r) * fact(r));
};

var fact = function(num){
    if(num == 0 || num == 1)
    	return 1;
    
    var result = fact(num - 1) * num;
    return result;
};