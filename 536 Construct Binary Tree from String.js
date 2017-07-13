/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
    if(!s || s.length <= 0)
        return null;
    
    if(s.length == 1)
        return new TreeNode(Number(s));
    
    var stack = [];
    
    var i = 0;
    
    while(i < s.length){
        
        var currentChar = s[i];
        
        if(!isNaN(Number(currentChar))){
            var parsedNumber = parseNumberChars(s, i, 0);
            currentChar = parsedNumber.number;
            i = parsedNumber.newIndex;
       
        } else if("-" == currentChar){
            var parsedNumber = parseNumberChars(s, i + 1, 0);
            currentChar = parsedNumber.number * (-1);
            i = parsedNumber.newIndex;
        } else
            i++;
        
        if(currentChar == ")")
            stack.pop();
        else {
            if(!isNaN(Number(currentChar))){
                var newNode = new TreeNode(Number(currentChar));
                if(stack.length >= 1){
                    var root = stack[stack.length - 1];
                    if(root.left)
                        root.right = newNode;
                    else
                        root.left = newNode;
                }
                stack.push(newNode);
            }
        }
    }
    
    return stack[stack.length - 1];
};

var parseNumberChars = function(s, i, j){
    var k = i;
    while(!isNaN(Number(s[k]))){
        j++;
        k++;
    }
    return {number: Number(s.substring(i, i + j)), newIndex: i + j };
}
