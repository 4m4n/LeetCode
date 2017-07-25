/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 0)
        return 0;
    
    if(s.length == 1)
        return 1;
    
    var map = {};
    var num = 0;
    var i = 0;
    var j = 0;
    
    while(i < s.length && j < s.length){
        var char =  s[j];
        if(!(char in map)){
            map[char] = 1;
            j++;
            num = Math.max(num, j - i);
        } else {
            delete map[s[i]];
            i++;
        }
    }
    
    return num;
};