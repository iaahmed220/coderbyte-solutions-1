function add(arr) {
  var i, sum = 0;

  for(i=0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function AdditivePersistence(num) {
  if (typeof num !== 'number') {
    return 'Input must be a number';
  }
  var numArr; 
  var addtvPers = 0,
      result = num;

  while(result > 9) {
    addtvPers += 1;
    numArr = (result).toString(10).split("").map(function(n){return parseInt(n);});
    result = add(numArr);
  }

  return addtvPers;
}