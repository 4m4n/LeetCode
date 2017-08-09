/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    var map = {};
    
    for(var i in prerequisites){
        if(prerequisites[i][0] in map)
            map[prerequisites[i][0]].push(prerequisites[i][1]);
        else
            map[prerequisites[i][0]] = [prerequisites[i][1]];
    }
    
    var visited = {};
    
    for(var i in map){
        if(hasCycle(i, map, visited))
            return false;
    }
    
    return true;
};

var hasCycle = function(item, map, visited){
    if(item in visited)
        return true;
    
    if(!(item in map))
        return false;
    
    visited[item] = true;
    
    for(var i = 0; i< map[item].length; i++){
        if(hasCycle(map[item][i], map, visited))
            return true;
    }
    
    delete map[item];
    
    delete visited[item];
    
    return false;
}