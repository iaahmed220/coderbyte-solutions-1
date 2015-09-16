function StringScramble(str1, str2) {
  var str2Length = str2.length,
      i,
      idx;

  for(i=0; i < str2Length; i++) {
    idx = str1.indexOf(str2.charAt(i));
    if (idx == -1) {
      return false;
    }
  }

  return true;
} 