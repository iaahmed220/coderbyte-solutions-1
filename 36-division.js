function Division(num1, num2) {
  var temp = 0;

  if ( num1 < num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
  }

 // dividend = divisor x quotient + remainder
 // To solve we continually factor until we have 
 // a non-zero remainder
  while(true) {

    num1 = num1 % num2;
    if(num1 == 0) {
      return num2;
    }

    num2 = num2 % num1;
    if(num2 == 0) {
      return num1;
    }
  }

  return num2;
}