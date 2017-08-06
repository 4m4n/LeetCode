/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    if(!M || M.length <= 0)
        return 0;
    
    var parent = [];
    for(var i = 0; i < M.length; i++)
        parent.push(-1);
    
    for(var i = 0; i < M.length; i++){
        for(var j = 0; j<M.length; j++){
            if(i != j && M[i][j] == 1)
                union(parent, i, j);
        }
    }
    
    var count = 0;
    
    for(var i in parent){
        if(parent[i] == -1)
            count++;
    }
    
    return count;
};


var union = function(parent, x, y){
    var xSet = findSet(parent, x)
    var ySet = findSet(parent, y);
    
    if(xSet !=  ySet)
        parent[xSet] = ySet;
}

var findSet = function(parent, i){
    if(parent[i] == -1)
        return i;
    
    return findSet(parent, parent[i]);
}