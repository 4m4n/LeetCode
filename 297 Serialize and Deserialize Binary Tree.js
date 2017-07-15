/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(!root)
        return "";
    
    var result = "";
    var delimiter = ",";
    
    var preOrderTraversal = function(node){
        if(!node){
            result += "/" + delimiter;
            return;
        }
        
        result += node.val + delimiter;
        
        preOrderTraversal(node.left);
        preOrderTraversal(node.right);
    }
    
    preOrderTraversal(root);
    
    return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(!data)
        return [];
    
    var parsePreOrder = function(arr){
        if(arr.length <= 0 )
            return;
        
        var element = arr.shift();
        
        if(element == "/")
            return null;
        
        var newNode = new TreeNode(Number(element));
        
        newNode.left = parsePreOrder(arr);
        newNode.right = parsePreOrder(arr);
        
        return newNode;
    }
    
    return parsePreOrder(data.split(","));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */