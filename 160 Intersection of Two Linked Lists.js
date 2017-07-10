/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB)
        return null;
    
    if(headA == headB)
        return headA;
    
    var map = {};
    
    while(headA != null){
        map[headA.val] = headA;
        headA = headA.next;
    }
    
    while(headB != null){
        if(headB.val in map)
            return headB;
        headB = headB.next;
    }
    
    return null;
};