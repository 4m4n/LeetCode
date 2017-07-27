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
var minDepth = function(root) {
    if(!root)
        return 0;
    
    var lHeight = minDepth(root.left);
    var rHeight = minDepth(root.right);
    
    return (lHeight == 0 || rHeight == 0)? lHeight + rHeight + 1: 1 + Math.min(lHeight, rHeight);
};