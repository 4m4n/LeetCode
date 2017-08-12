/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if(!nums || nums.length <= 0)
        return;
    
    var second = nums.length - 1;
    var zero = 0;
    
    for(var i = 0; i<nums.length; i++){
        while(nums[i] == 2 && i < second){
            swap(nums, i, second);
            --second;
        }
        
        while(nums[i] == 0 && i > zero){
            swap(nums, i, zero)
            zero++;
        }
    }
};

var swap = function(arr, index1, index2){
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}