/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix || !target)
        return false;
    
    var row = 0;
    var col = matrix[0].length - 1;
    
    while(col >= 0 && row <= matrix.length - 1){
        if(matrix[row][col] == target)
            return true;
        
        if(matrix[row][col] < target)
            row++;
        else
            col--;
    }
    
    return false;
};