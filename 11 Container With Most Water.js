/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    var start = 0;
    var end = height.length - 1;
    
    var area = 0;
    
    while(start != end){
        var area = Math.max(area, (end - start) * Math.min(height[start], height[end]));
        
        if(height[start] < height[end])
            start++;
        else
            end--;
    }
    
    return area;
};