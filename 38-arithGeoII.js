'use strict'; 

function ArithGeoII(arr) {
  var numsLength = arr.length, 
    arithInit = arr[1] - arr[0], 
    geoInit = arr[1]/arr[0], 
    res = ''; 

  //Determine if arithmetic sequence
  for(var i=1; i < numsLength - 1; i++) {
    if (arr[i] + arithInit == arr[i+1]) {  
      res = 'Arithmetic'; 
    } else {
      res = -1; 
      break;  
    }
  }
 
  // Determine if geometric sequence
  if (res == -1) {
    for(var i=1; i < numsLength - 1; i++) {
      if (arr[i]*geoInit == arr[i+1]) {  
        res = 'Geometric'; 
      } else {
        res = -1; 
        break;  
      }
    }
  }

  return res; 
}