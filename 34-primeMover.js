function prime(num) {
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

  if (num == 2) {
    return true;
  }

  for (i=2; i < checkTo + 1 && res == true; i++) {
      if (num % i === 0) {
          res = false;
      }
  }
  return res;
}

function PrimeMover(num) {
    'use strict';

  if (num > 10000) {
    return 'Number must be 10,000 or less.';
  }

  var primesArr = [],
      curNum;

  for (curNum=0; primesArr.length < num; curNum++) {
    if (prime(curNum)) {
      primesArr.push(curNum);
    }
  }
    return primesArr[num - 1];
}
