function FirstFactorial(num) { 
  var prod = 1;
    if (num == 0 || num == 1) 
      return 1;
   
    for(i = 2; i <= num; i++) {
      prod *= i;
    }
    
  return prod; 
        
}
