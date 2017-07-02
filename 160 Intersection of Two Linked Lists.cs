/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode GetIntersectionNode(ListNode headA, ListNode headB) {
        if(null == headA || null == headB)
            return null;
            
        if(headA == headB)
            return headA;
            
        var dict = new Dictionary<ListNode, int>();
        
        while(headA != null){
            dict.Add(headA, 1);
            headA = headA.next;
        }
        
        while(headB != null){
            if(dict.ContainsKey(headB))
                return headB;
            headB = headB.next;
        }
        
        return null;
    }
}