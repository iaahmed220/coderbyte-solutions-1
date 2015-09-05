function NumberAddition(str) { 
 var strLength = str.length,
      re = /[0-9]/,
      currentNum = '',
      sum = 0,
      i;

  for(i=0; i <= strLength; i++) {
    if(re.test(str[i])) {
      currentNum += str[i];
    } 
    else {
      sum += Number(currentNum);
      currentNum = '';
    } 
  }
   return sum;        
}