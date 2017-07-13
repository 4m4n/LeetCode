/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    var result = [];
    
    var rightTraversal = function(node, level){
        if(!node)
            return;
        
        if(level == result.length)
            result.push(node.val);
        
        rightTraversal(node.right, level + 1);
        rightTraversal(node.left, level + 1);
    };
    
    rightTraversal(root, 0);
    
    return result;
};