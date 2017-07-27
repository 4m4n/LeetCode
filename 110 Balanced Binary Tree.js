/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    return dfsHeight(root) != -1;
};

var dfsHeight = function(node){
    if(!node)
        return 0;
    
    var lHeight = dfsHeight(node.left);
    if(lHeight == -1)
        return -1;
    
    var rHeight = dfsHeight(node.right);
    if(rHeight == -1)
        return -1;
    
    if(Math.abs(lHeight - rHeight) > 1)
        return -1;
    
    return Math.max(lHeight, rHeight) + 1;
};