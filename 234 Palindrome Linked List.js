/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || head.next ==  null)
        return true;
        
    var str = [];
    
    var headPtr = head;
    while(headPtr != null){
        str.push(headPtr.val);
        headPtr = headPtr.next;
    }
    
    var reverse = str.slice().reverse();
    
    return (str.join() == reverse.join());
};