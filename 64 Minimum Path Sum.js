/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var dp = [];
    dp[0] = [grid[0][0]];
    
    for(var i = 1; i < grid.length; i++){
        dp[i] = [];
        dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    for(var j = 1; j<grid[0].length; j++)
        dp[0][j] = dp[0][j-1] + grid[0][j];
    
    for(var i = 1; i < grid.length; i++){
        for(var j = 1; j< grid[i].length; j++){
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        }
    }
    
    return dp[grid.length -1][grid[0].length -1];
};