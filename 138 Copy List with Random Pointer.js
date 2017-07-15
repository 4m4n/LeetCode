/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if(!head)
        return head;
    
    var map = {};
    
    var prev = null;

    var newHead = null;
    
    while(head){
        if(head.label in map){
            var storedCopy = map[head.label];
            
            if(head.random)
                setNewRandomNode(head, storedCopy, map);
            
            prev.next = storedCopy;
            prev = prev.next;
        
        } else {
            var newNode = new RandomListNode(head.label);
            
            if(head.random)
                setNewRandomNode(head, newNode, map);
            
            if(prev == null) {
                prev = newNode;
                newHead = newNode;
            } else {
                prev.next = newNode;
                prev = prev.next;
            }
            
        }
        
        head = head.next;
    }
    
    return newHead;
};

 var setNewRandomNode = function(node, newNode, map){
    var newLinkedNode = new RandomListNode(node.random.label);
    map[newLinkedNode.label] = newLinkedNode;
    newNode.random = newLinkedNode;
}

