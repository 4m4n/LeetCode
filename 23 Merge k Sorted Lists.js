/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(!lists || lists.length <= 0)
        return [];
    
    var last = lists.length - 1;
    
    while( last != 0){
        var i = 0; var j = last;
        
        while(i < j){
            lists[i] = mergeTwoLists(lists[i], lists[j]);
            i++;
            j--;
            if(i >= j)
                last = j;
        }
    }
    
    return lists[0];
};

var mergeTwoLists = function(l1, l2) {
    if(!l1)
        return l2;
    
    if(!l2)
        return l1;
        
    var l3;
    
    if(l1.val < l2.val){
        l3 = l1;
        l1 = l1.next;
    } else {
        l3 = l2;
        l2 = l2.next;
    }
    
    var head = l3;
 
    while(l1 && l2 ){
        if(l1.val < l2.val){
            head.next = l1;
            l1 = l1.next;
        } else {
            head.next = l2;
            l2 = l2.next;
        }
        head = head.next;
    }
    
    if(l1)
        head.next = l1;
    
    if(l2)
        head.next = l2;
    
    return l3;
};