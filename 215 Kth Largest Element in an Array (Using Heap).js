/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if(!nums || nums.length <= 0)
        return null;
    
    var heap = new maxHeap();
    
    for(var i in nums)
        heap.add(nums[i]);
    
    for(var i = 0; i < k - 1; i++)
        heap.poll();
    
    return heap.poll();
};

var maxHeap = function(){
  this.items = [];
}

maxHeap.prototype = {
  getSize: function(){
    return this.items.length;
  },
  getLeftChildIndex: function(parentIndex){
    return 2*parentIndex + 1;
  },
  getRightChildIndex: function(parentIndex){
    return 2*parentIndex + 2;
  },
  getParentIndex: function(childIndex){
    return Math.floor((childIndex - 1)/2);
  },
  hasLeftChild: function(index){
    if(this.getLeftChildIndex(index) < this.getSize())
      return true;
    return false;
  },
  hasRightChild: function(index){
    if(this.getRightChildIndex(index) < this.getSize())
      return true;
    return false;
  },
  hasParent: function(index){
    if(this.getParentIndex(index) >= 0)
      return true;
    return false;
  },
  leftChild: function(index){
    return this.items[this.getLeftChildIndex(index)];
  },
  rightChild: function(index){
    return this.items[this.getRightChildIndex(index)]
  },
  parent: function(index){
    return this.items[this.getParentIndex(index)];
  },
  swap: function(index1, index2){
    var temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  },
  peek: function(){
    if(this.getSize() <= 0)
      throw "Heap is empty.";
    
    return this.items[0];
  },
  poll: function(){
    if(this.getSize() <= 0)
      throw "Heap is empty.";
    
    var item = this.items[0];
    
    this.items[0] = this.items.pop();
    
    this.heapifyDown();
    
    return item;
  },
  add: function(item){
    this.items.push(item);
    this.heapifyUp();
  },
  heapifyUp: function(){
    var index = this.getSize() - 1;
    
    while(this.hasParent(index) && this.parent(index) < this.items[index]){
      var parentIndex = this.getParentIndex(index)
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  },
  heapifyDown: function(){
    var index = 0;
    while(this.hasLeftChild(index)){
      var smallerChildIndex = this.getLeftChildIndex(index);
      if(this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index))
        smallerChildIndex = this.getRightChildIndex(index);

      if(this.items[index] > this.items[smallerChildIndex])
        break;
      else
        this.swap(index, smallerChildIndex);
      
      index = smallerChildIndex;
    }
  }
};