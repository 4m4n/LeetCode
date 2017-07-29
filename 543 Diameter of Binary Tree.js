/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    if(!root)
        return 0;
    
    var max = 0;
    
    var maxDepth = function(node){
        if(!node)
            return 0;
        
        var left = maxDepth(node.left);
        var right = maxDepth(node.right);
        
        max = Math.max(max, left + right);
        
        return Math.max(left, right) + 1;
    };
    
    
    maxDepth(root);
    
    return max;
};