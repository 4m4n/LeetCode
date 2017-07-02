/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head)
        return null;
    
    var prev = null;
    var current = head;
    
    while(current != null){
        var tempNode = current.next;
        current.next = prev;
        prev = current;
        current = tempNode;
    }
    
    return prev;
};