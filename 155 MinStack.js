/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.Stack = [];
    this.MinStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(this.MinStack.length <= 0)
        this.MinStack.push(x);
    else { 
        var top = this.MinStack[this.MinStack.length - 1];
        if(x <= top)
            this.MinStack.push(x);
    }
    this.Stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.MinStack.length <= 0)
        this.Stack.pop();
    else {
        if(this.Stack.pop() == this.MinStack[this.MinStack.length - 1])
            this.MinStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.Stack[this.Stack.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.MinStack.length <= 0)
        return null;
        
    return this.MinStack[this.MinStack.length -1 ];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */