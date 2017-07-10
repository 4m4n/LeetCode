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
var convertBST = function(root) {
    var sum = 0;
    
    function Transform(node){
        if(!node)
            return;
        
        Transform(node.right);
        
        sum += node.val;
        
        node.val = sum;
        
        Transform(node.left);
    }
    
    Transform(root);
    
    return root;
};


