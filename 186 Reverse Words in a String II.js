/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify the string in-place instead.
 */
var reverseWords = function(str) {
    if(!str || str.length <= 1)
        return;
    
    var reverseStr = function(s, start, end){
        while(start < end){
            var temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            start++;
            end--;
        }
    }
    
    reverseStr(str, 0, str.length - 1);
    
    var start = 0;
    
    for(var i = 0; i<str.length; i++){
        if(str[i] == ' '){
            reverseStr(str, start, i - 1);
            start = i + 1;
        }
    }
    
    reverseStr(str, start, str.length - 1);
};