/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    if(!a || !b)
        return "0+0i";
    
    var parsedA = parseComplexNumber(a);
    
    var parsedB = parseComplexNumber(b);
    
    var a1a2 = parsedA.A * parsedB.A;
    
    var a1b2a2b1 = parsedA.A * parsedB.B + parsedA.B * parsedB.A;
    
    var b1b2 = (-1) * parsedA.B * parsedB.B;
    
    return (a1a2 + b1b2) + "+" + (a1b2a2b1 + "i");
};


var parseComplexNumber = function(complexNumber){
  var complexNumberParsed = complexNumber.split("+");
  return { A: Number(complexNumberParsed[0]), B: Number(complexNumberParsed[1].split("i")[0])}
}