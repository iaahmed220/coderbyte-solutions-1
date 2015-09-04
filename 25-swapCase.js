function SwapCase(str) { 

  var strArray = str.split(''),
     strArrayLength = strArray.length;
  var newArray = [];

  // Danger, testing of number and symbols will return true
  // In this case it may be ok since these just pass thru anyway.
   for(var i=0; i < strArrayLength; i++ ) {
    if(strArray[i] == strArray[i].toUpperCase()) {
     newArray.push(strArray[i].toLowerCase());
    }
    else if(strArray[i] == strArray[i].toLowerCase()) {
     newArray.push(strArray[i].toUpperCase());
    }  
   }

   str = newArray.join('');
   return str;      
}