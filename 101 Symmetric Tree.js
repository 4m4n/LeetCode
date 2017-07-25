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
var isSymmetric = function(root) {
    return checkSymmetric(root, root);
};

var checkSymmetric = function(nodeA, nodeB){
    if(null == nodeA && null == nodeB)
        return true;
        
    if(null == nodeA || null == nodeB)
        return false;
        
    return (nodeA.val == nodeB.val) && checkSymmetric(nodeA.left, nodeB.right) && checkSymmetric(nodeA.right, nodeB.left);
};

