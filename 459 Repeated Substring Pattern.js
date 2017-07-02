/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if(s.length <= 1)
        return false;
    
    var lps = getLPSArray(s);
    
    var len = lps[s.length -1];
    
    if(len <= 0)
        return false;
    
    return (s.length % (s.length - len) === 0);
};

var getLPSArray = function(str){
    var lps = [];
    lps[0] = 0;
    var j = 0;
    
    for(var i = 1; i<str.length;){
        if(str[i] === str[j]){
            lps[i] = j + 1;
            i++;
            j++;
        } else{
            if(j <= 0){
                lps[i] = 0;
                i++;
            } else {
                j = lps[j-1];
            }
        }
    }
    
    return lps;
}