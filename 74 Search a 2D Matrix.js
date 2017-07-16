/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || matrix.length <= 0)
        return false;
    
    var row = matrix.length;
    var column = matrix[0].length;
    
    var begin = 0; var end = row * column - 1;
    
    while(begin <= end){
        var mid = Math.floor((begin + end)/2);
        
        var element = matrix[Math.floor(mid/column)][mid%column];
     
        if(element == target)
            return true;
        else if(element < target)
            begin = mid + 1;
        else
            end = mid - 1;
    }
    
    return false;
};