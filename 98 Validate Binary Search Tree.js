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
var isValidBST = function(root) {
    var prev = null;
    
    var isValid = function(node){
        if(node){
            if(!isValid(node.left))
                return false;
            
            if(prev && node.val <= prev.val)
                return false;
            
            prev = node;
            return isValid(node.right);
        }
        
        return true;
    }
    
    return isValid(root);
};