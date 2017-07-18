/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var vowels = {
        a: 1,
        A: 1,
        e: 1,
        E: 1,
        i: 1,
        I: 1,
        o: 1,
        O: 1,
        u: 1,
        U: 1
    };
    
    var stringArr = s.split("");
    
    var start = 0;
    var end = stringArr.length - 1;
    
    while( start < end){
        if(!(stringArr[start] in vowels)){
            start++;
            continue;
        }
        
        if(!(stringArr[end] in vowels)){
            end--;
            continue;
        }
        
        var temp = stringArr[start];
        stringArr[start] = stringArr[end];
        stringArr[end] = temp;
        
        start++;
        end--;
    };
    
    return stringArr.join("");
};