/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(nums.length <= 1 || k <= 0)
        return;
    k = k% nums.length
    var n = nums.length - 1;
    reverse(nums, 0, n);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n);  
};

var reverse = function(arr, start, end){
    while(start < end){
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}