function DashInsert(str) { 
  'use strict';
  var stringArray = str.split(''),
      arrayLength = str.length,
      output = '';

  for(var i=0; i < arrayLength; i++) {
      if(stringArray[i] === '-') {
        continue;
      }

      if(stringArray[i] % 2 != 0) { 
        if(stringArray[i + 1] % 2 != 0 && stringArray[i] != stringArray[arrayLength-1]) {
          stringArray.splice(i+1,0,'-');
          arrayLength += 1;
        }
      }
  } 

  output = stringArray.join('');
  return output;       
}