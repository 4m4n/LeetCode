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
    if(!root)
        return true;
    
    var arr = [];
    
    var inorder = function(node){
        if(!node)
            return;
        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
    }
    
    inorder(root);
    
    for(var i = 0; i<arr.length - 1; i++){
        if(arr[i + 1] <= arr[i])
            return false;
    }
    
    return true;
};