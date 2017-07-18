/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid)
        return 0;
    
    var visited = {};
    
    var canVisit = function(tron, i, j){
        return (visited[i + ' ' + j] != 1 && i >= 0 && j >= 0 && i < tron.length && j < tron[i].length && tron[i][j] == 1);
    }
    
    var dfs = function(tron, currentRow, currentColumn){
        visited[currentRow + ' ' + currentColumn] = 1;
       
        if(canVisit(tron, currentRow - 1, currentColumn))
            dfs(tron, currentRow - 1, currentColumn);
        
        if(canVisit(tron, currentRow + 1, currentColumn))
            dfs(tron, currentRow + 1, currentColumn);
      
        if(canVisit(tron, currentRow, currentColumn - 1))
            dfs(tron, currentRow, currentColumn - 1);
        
        if(canVisit(tron, currentRow, currentColumn + 1))
            dfs(tron, currentRow, currentColumn + 1);
    }
    
    var count = 0;

    for(var i = 0; i< grid.length; i++){
        for(var j = 0; j<grid[i].length; j++){
            if(canVisit(grid, i, j)){
                dfs(grid, i, j);
                count++;
            }
        }
    }
    
    return count;
};