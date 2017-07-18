/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    if(!matrix)
        return;
        
    var firstRow = false;
    
    var firstCol = false;
    
    for(var i = 0; i< matrix.length; i++){
        for(var j = 0; j<matrix[0].length; j++){
            if(matrix[i][j] == 0){
                if(i == 0)
                    firstRow  = true;
                if(j == 0)
                    firstCol = true;
                
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    };
    
    for(var i = 1; i<matrix.length; i++){
        for(var j = 1; j<matrix[0].length; j++){
            if(matrix[i][0] == 0 || matrix[0][j] == 0)
                matrix[i][j] = 0;
        }
    }
    
    if(firstRow){
        for(var i = 0; i<matrix[0].length; i++)
            matrix[0][i] = 0;
    }
    
    if(firstCol){
        for(var j = 0; j<matrix.length; j++)
            matrix[j][0] = 0;
    }
};


