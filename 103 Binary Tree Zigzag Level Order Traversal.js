/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(!root)
        return [];
    
    var result = [];
    
    var curList = [root];
    
    var lr = false;
    
    while(curList.length > 0){
        var tempList = [];
        var count = curList.length;
        for(var i = 0; i< count; i++){
            var element;
            if(lr){
                element = curList.shift();
                if(element.right)
                    curList.push(element.right);
                if(element.left)
                    curList.push(element.left);
            } else {
                element = curList.pop();
                if(element.left)
                    curList.unshift(element.left);
                if(element.right)
                    curList.unshift(element.right);
            }
            
            tempList.push(element.val);
        }
            
        result.push(tempList.slice());
        lr = !lr;
    }
    
    return result;
};