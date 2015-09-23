function Consecutive(arr) {
  'use strict';
  arr.sort(function(a,b) {
    return a - b;
  });

  var arrLength = arr.length,
      diff;

  // How many numbers do we need?
  // Need to add 1, which we do later
  diff = arr[arrLength-1] - arr[0];

  // Get how many numbers missing
  // to get a sequence
  return diff - arrLength + 1; 
}

console.log(Consecutive([4,8,6]));