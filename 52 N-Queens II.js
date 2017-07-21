/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if(!n || n <= 1)
        return 1;
    
    var board = [];
    for(i = 0; i<n; i++){
        var temp = [];
        for(var j = 0; j<n; j++)
            temp.push("");
        board.push(temp);
    }
    
    var result = 0;

    var backtrack = function(board, col){
        if(col == board.length){
            result++;
            return true;
        }

        for(var i = 0; i<board.length; i++){
            if(isSafe(board, i, col)){
                board[i][col] = "Q";
                backtrack(board, col + 1);
                board[i][col] = "";
            }
        }

        return false;
    };
    
    backtrack(board, 0);
    
    return result;
};


var isSafe = function(board, row, col){
    for(var i = 0; i<col; i++){
        if(board[row][i] == "Q")
            return false;
    }
    
    for(var i = row, j = col; i >= 0 && j >= 0; i--, j--){
        if(board[i][j] == "Q")
            return false;
    }
    
    for(var i = row, j = col; i < board.length && j >= 0; i++, j--){
        if(board[i][j] == "Q")
            return false;
    }
    
    return true;
};