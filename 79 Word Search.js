/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(!word || word.length <= 0)
        return false;
    
    var isValid = function(i, j, index){
        if(index >= word.length)
            return true;
        
        if( i < 0 || j < 0 || i >= board.length || j >= board[i].length)
            return false;
        
        var currentChar = word[index];
        
        if(currentChar == board[i][j]){
            index++;
            board[i][j] = null;
            
            if(isValid( i + 1, j, index) || 
               isValid( i - 1, j, index) ||
               isValid( i, j + 1, index) ||
               isValid( i, j - 1, index)
              )
                return true;
            
            board[i][j] = currentChar;
        }
        
        return false;
    }
    
    for(var i = 0; i<board.length; i++){
        for(var j = 0; j<board[i].length; j++){
            if(isValid(i, j, 0))
                return true;
        }
    }
    
    return false;
}