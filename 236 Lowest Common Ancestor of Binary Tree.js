/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root)
        return null;
    
    if(root == p || root == q)
        return root;
    
    var leftNode = lowestCommonAncestor(root.left, p, q);
    var rightNode = lowestCommonAncestor(root.right, p, q);
    
    if(leftNode && rightNode)
        return root;
    
    return (leftNode) ? leftNode : rightNode;
}