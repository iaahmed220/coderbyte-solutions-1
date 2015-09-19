function BinaryConverter(str) {
  var res = 0,
      numBits = str.length,
      power = 0,
      i;

  for (i=numBits; i >= 0; i--) {
    power = (numBits - i) - 1; 
    if (str[i] === '1') {
      res += Math.pow(2, power);
    }
   }

  return res;
}

// The much shorter answer
function BinaryConverter(str) { 
  return parseInt(str,2);          
}
