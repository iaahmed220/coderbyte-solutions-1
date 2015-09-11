function PrimeTime(num) {
  'use strict';

  // We only need to check up to the sqrt
  // of the number rounded up
  var checkTo = Math.ceil(Math.sqrt(num)), 
      res = true,
      i;

  // One is not a prime number
  if (num < 2) {
    return false;
  }

  for (i=2; i < checkTo && res == true; i++) {
      if (num % i === 0) {
          res = false;
      }
  }
  return res;
}