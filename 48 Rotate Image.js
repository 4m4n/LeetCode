/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    if(!matrix)
        return;
    
    for(var layer = 0; layer < Math.floor(matrix.length/2); layer++){
        var last = matrix.length - 1 - layer;
        for(var i = layer; i<last; i++){
            var offset = i - layer;
            
            var top = matrix[layer][i];
            
            //Top = Left
            matrix[layer][i] = matrix[last - offset][layer];
            
            //Left = Bottom
            matrix[last - offset][layer] = matrix[last][last - offset];
            
            //Bottom = Right
            matrix[last ][last - offset] = matrix[i][last];
            
            //Right = Top
            matrix[i][last] = top;
        }
    }
};