'use strict'
function SimpleMode(arr) {
  var nums = {},
      arrLength = arr.length,
      maxCnt = 1,
      mode = arr[0],
      i;

  for (i=0; i < arrLength; i++) {
    if (!(arr[i] in nums)) {
      nums[arr[i]] = 0;
    }    
      
  nums[arr[i]]++;

  if (nums[arr[i]] > maxCnt) {
    maxCnt = nums[arr[i]];
    mode = arr[i];
  }
  }

  return maxCnt > 1 ? mode : -1;
}