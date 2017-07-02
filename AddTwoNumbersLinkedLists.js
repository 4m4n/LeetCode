/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var result = new ListNode(null);
    addLinkedLists(l1, l2, 0, result);
    return result;
};

function addLinkedLists(l1, l2, carry, result){
    if(null === l1 && null === l2 && carry <= 0)
        return;
        
    var sum = carry;

    if(null !== l1)
        sum += l1.val;
    
    if(null !== l2)
        sum += l2.val;
    
    addToResult(result, sum % 10);
    
    addLinkedLists( null === l1? null: l1.next, null === l2? null: l2.next, sum >= 10? 1: 0, result);
}

function addToResult(result, value){
    
    if(null === result.val)
        result.val = value;
    else{
        var newNode = new ListNode(value);
        
        var temp = result;
        
        while(temp.next !== null)
            temp = temp.next;
        
        temp.next = newNode;
    }
}