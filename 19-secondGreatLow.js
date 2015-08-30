function SecondGreatLow(arr) { 
  var sorted = arr.sort(function(a, b) {
    return a - b; 
  }); 

  var arrLen = sorted.length;
  var ansString = ''; 
  var minNum = sorted[0]; 
  var maxNum = sorted[arrLen-1]; 
  
  if (arrLen == 2) {
    return minNum + ' ' + maxNum; 
  } 

  for(var i=0; i < arrLen; i++) {
    if (sorted[i+1] != minNum) {
      ansString = ansString + ' ' +  sorted[i+1];
      break;  
    }
  }

  for(var i=arrLen-1; i >= 0; i--) {
    if (sorted[i-1] != maxNum) {
      ansString += ' ' + sorted[i-1];
      break; 
    } 
  }

  return ansString;          
}