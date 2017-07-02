/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var map = {};
    var i = 0; 
    var ans = 0;
  
     for(var j = 0; j<s.length; j++){
        if(s[j] in map){
            i = Math.max(map[s[j]], i);
        }
        ans = Math.max(ans, j-i +1);
        map[s[j]] = j +1;
    }
    return ans;
};