/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    if(!n || n <= 1)
        return [["Q"]];
    
    var board = [];
    
    var result = [];
    
    for(var i = 0; i<n; i++){
        var temp = [];
        for(var j = 0; j<n; j++)
            temp.push(".");
        board.push(temp);
    };
    
    var isSafe = function(row, col){
        
        for(var i = 0; i<col; i++){
            if(board[row][i] == "Q")
                return false;
        }
        
        for(var i = row, j = col; i>= 0 && j>=0; i--, j--){
            if(board[i][j] == "Q")
                return false;
        }
        
        for(var i = row, j = col; i < n && j>= 0; i++, j--){
            if(board[i][j] == "Q")
                return false;
        }
        
        return true;
    }
    
    var backtrack = function(col){
        if(col >= n ){
            var temp = [];
            for(var i in board)
                temp.push(board[i].join(""));
            result.push(temp);
            
            return true;
        }
        for(var i = 0; i<n; i++){
            if(isSafe(i, col)){
                board[i][col] = "Q";
                backtrack(col + 1);
                board[i][col] = ".";
            }
        }
        
        return false;
    }
    
    
    backtrack(0);
    return result;
};