function SimpleSymbols(str) {
  var re = /[a-z]/i;

  if (str[0] != '+' && str[0] != '=') return false;

  for(var i=0; i < str.length; i++) {
    if (re.test(str[i])) {
      if (str[i-1] == '+' && str[i+1] == '+') {
        continue; 
      } else {
        return false; 
      }
    }    
  }
  return true;
}