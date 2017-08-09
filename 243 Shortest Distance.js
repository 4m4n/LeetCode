/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    if(!words || words.length <= 0)
        return 0;
    
    var index1 = -1;
    var index2 = -1;
    var minDistance = words.length;
    
    for(var i in words){
        if(words[i] == word1)
            index1 = i;
        if(words[i] == word2)
            index2 = i;
        
        if(index1 != -1 && index2 != -1)
            minDistance = Math.min(minDistance, Math.abs(index1 - index2));
    }
    
    return minDistance;
};