/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(!nums || nums.length <= 0)
        return null;
    
    return convertToBST(nums);
};

var convertToBST = function(nums){
    if(!nums || nums.length <= 0)
        return null;
    
    var mid = Math.floor(nums.length / 2);
    
    var node = new TreeNode(nums[mid]);
    
    node.left = convertToBST(nums.slice(0, mid));
    node.right = convertToBST(nums.slice(mid + 1));
    
    return node;
}