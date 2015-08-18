function FirstReverse(str) { 

  // This is pretty standard string reversal.
  // There are gotchas with symbols
  // such as oo 𝌆 bar mañana mañana  
  // See https://github.com/mathiasbynens/esrever
  return str.split('').reverse().join(''); 
         
}
