function OffLineMinumum(strArr) {
  var arrLength = strArr.length,
      result = [],
      temp = [],
      i;

  for(i=0; i < arrLength; i++) {
    if (strArr[i] == 'E') {
      temp.sort(function(a, b) { return a - b;});
      result.push(parseInt(temp[0]));
      temp.shift();
    }
    else {
      temp.push(parseInt(strArr[i]));
    }
  }    

  return result.join(',');
}