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
    
    var slow = head;
    var fast = head;
    
    var stack = [];
    
    while(fast && fast.next){
        stack.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    
    if(fast)
        slow = slow.next;
    
    while(slow){
        var top = stack.pop();
        if(slow.val != top)
            return false;
        slow = slow.next;
    }
    
    return true;
};