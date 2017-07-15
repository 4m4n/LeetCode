/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root)
        return [];
    
    var result = [];
    
    var queue = [];
 
    queue.push(root);
    
    while(queue.length >= 1){
        var curLevel = queue.length;
        var subList = [];
        
        for(var i = 0; i<curLevel; i++){
            var element = queue.shift();
            
            if(element.left)
                queue.push(element.left);
            
            if(element.right)
                queue.push(element.right);
            
            subList.push(element.val);
        }
        
        result.push(subList.slice());
    };
    
    return result;
};