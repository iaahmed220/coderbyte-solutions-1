function PowersOfTwo(num) {
  if (typeof num !== 'number') {
    return "Input must be a number.";
  }

  if (num == 1) {
    return true;
  }

  if (num % 2 == 0) {
   return PowersOfTwo(num / 2);
  }  

   return false;
}

console.log(PowersOfTwo(4));