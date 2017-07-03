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
    
    while(head != null){
        var tempNode = head.next;
        head.next = prev;
        prev = head;
        head = tempNode;
    }
    
    return prev;
};