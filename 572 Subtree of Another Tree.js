/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
   return traverse(s, t);
};

var equals = function(s, t){
    if(!s && !t)
        return true;
    
    if(!s || !t)
        return false;
    
    return s.val == t.val && equals(s.left, t.left) && equals(s.right, t.right);
}
  
var traverse = function(s, t){
    return s !=null && ( equals(s, t) || traverse(s.left, t) || traverse(s.right, t));
};