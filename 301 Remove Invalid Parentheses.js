/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    if(!s || s.length <= 0)
        return [""];
    
    var q = [];
    var visited = {};
    var result = [];
    
    q.push(s);
    visited[s] = true;
    var found = false;
       
    while(q.length > 0){
        var str = q.shift();
        if(isValid(str)){
            result.push(str);
            found = true;
        }
        
        if(found)
            continue;
        
        for(var i = 0; i<str.length; i++){
            if(str[i] != "(" && str[i] != ")")
                continue;
            var t = str.substring(0, i) + str.substring(i+1);
            if(!(t in visited)){
                q.push(t);
                visited[t] = true;
            }
        }
    }
    
    return result;
};


var isValid = function(str){
    var counter = 0;
    
    for(var i = 0; i<str.length; i++){
        if(str[i] == "(")
            counter++;
        if(str[i] == ")"){
            if(counter-- == 0)
                return false;
        }
    }
    
    return counter == 0;
}