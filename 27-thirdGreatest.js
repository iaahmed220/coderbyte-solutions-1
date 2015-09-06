function ThirdGreatest(strArr) { 
  var strArrLength = strArr.length,
      curWordLength = 0,
      first = 0,
      second = 0,
      third = 0,
      idx = 0,
      theWord = '',
      i;

  for(i=0; i < strArrLength; i++) {
    curWordLength = strArr[i].length;
    if (first == 0 || curWordLength > first) {
      third = second;
      second = first;
      first = curWordLength;
    }
    else if (second == 0 || curWordLength > second) {
      third = second;
      second = curWordLength;
    }
    else if(third == 0 || curWordLength > third) {
      third = curWordLength;
    }
  } 

  for(i=0; i < strArrLength; i++) {
    if (strArr[i].length == third) {
      theWord = strArr[i];
    }
  } 

  return theWord;
}