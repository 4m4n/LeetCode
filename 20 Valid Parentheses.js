/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length <= 1)
        return false;
        
    var stack = [];
    
    for(var index in s){
        
        if(s[index] == "(" || s[index] == "[" || s[index] == "{")
            stack.push(s[index]);
        else{
            var item = stack.pop();
            
            if(s[index] == ")" && item != "(")
                return false;
            
            if(s[index == "]" && item != "["])
                return false;
            
            if(s[index] == "}" && item != "{")
                return false;
        }
    }
    
    if(stack.length >= 1)
        return false;
    
    return true;
};