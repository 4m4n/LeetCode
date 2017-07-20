/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    
    if(!root)
        return root;
    
    var invert = function(node){
        if(!node)
            return null;
        
        var left = invert(node.left);
        var right = invert(node.right);
        
        node.left = right;
        node.right = left;
        
        return node;
    }
    
    return invert(root);
};