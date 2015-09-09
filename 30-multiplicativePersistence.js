function mult(arr) {
  var i, multi = 1;

  for(i=0; i < arr.length; i++) {
    multi *= arr[i];
  }

  return multi;
}

function MultiplicativePersistence(num) {
  if (typeof num !== 'number') {
    return 'Input must be a number';
  }
  var numArr; 
  var multPers = 0,
      result = num;

  while(result > 9) {
    multPers += 1;
    numArr = (result).toString(10).split("").map(function(n){return parseInt(n);});
    result = mult(numArr);
  }

  return multPers;
}