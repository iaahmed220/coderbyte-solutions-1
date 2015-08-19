function LongestWord(sen) {
  var result = sen.match(/[A-Za-z0-9]+/g);
  var strLength = 0;
  var longestWord = '';
  
  for(var i = 0; i < result.length; i++) {
    if(strLength < result[i].length) {
      strLength = result[i].length;
      longestWord = result[i];
    }
  }

  return longestWord;          
  
}