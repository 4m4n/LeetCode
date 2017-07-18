/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.map = {};
    var that = this;
    this.size = function(){ return Object.keys(that.map).length; };
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!(val in this.map)){
        this.map[val] = 1;    
        return true;
    }
    
    return false;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(val in this.map){
        delete this.map[val];
        return true;
    }
    
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var randomIndex = Math.floor(Math.random() * this.size());
    return Number(Object.keys(this.map)[randomIndex]);
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */