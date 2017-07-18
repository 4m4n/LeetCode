/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    if(!n || !edges || edges.length <= 0)
        return n;
    
    var result = 0;
    
    var visited = {};
    
    var dfs = function(node){
        if(node in visited)
            return;
        
        visited[node] = 1;
        
        var adjacentNodes = getAdjacent(node);
        
        for(var i in adjacentNodes){
            if(!(adjacentNodes[i] in visited))
                dfs(adjacentNodes[i]);
        }
    }
    
    var getAdjacent = function(node){
        var result = [];
        
        for(var i in edges){
            if(node == edges[i][0] && !(edges[i][1] in visited))
                result.push(edges[i][1]);
            else if(node == edges[i][1] && !(edges[i][0] in visited))
                result.push(edges[i][0]);
        }
        
        return result;
    }
    
    for(var i in edges){
        if(!(edges[i][0] in visited)){
            dfs(edges[i][0]);
            result++;
        } 
    }
  
    var totalVisitedNodes = Object.keys(visited).length;
    
    result += n - totalVisitedNodes;
    
    return result;
};