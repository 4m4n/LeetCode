/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if(nums.length <= 1)
    return 0
  
  var map = {};
  
  for(var i in nums){
    if(nums[i] in map)
      map[nums[i]]++;
    else
      map[nums[i]] = 1;
  }
  
  var result = 0;
  
  for(var i in map){
      if( k === 0 && map[i] > 1)
          result++;
      if (k > 0 && Number(i) + k in map)
          result++;
  }
  
  return result;
};