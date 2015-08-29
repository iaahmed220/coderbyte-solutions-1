function LetterCountI(str) { 
  var words = str.toLowerCase();
  var arr = words.split(/\W/);   
  var curWord = []; 
    var count = 0;   
    var ltrCount  = []; 

    var arrLength = arr.length; 
  for(var i=0; i < arrLength;  i++) {    
     if (arr[i] !== '') {
      curWord = arr[i].split(''); 
      curWord.sort(); 
      ltrCount[i] = 0; 
     } 
     for(var j=0; j < curWord.length; j++) {
        if (curWord[j] == curWord[j+1]) {
          count++; 
        }
          if (ltrCount[i] < count) {
            ltrCount[i] = count;
          } 
        }
        count = 0;  
  }

     var idx = ltrCount.indexOf(Math.max.apply(null, ltrCount));
     if (ltrCount[idx] !== 0) {
        return arr[idx]; 
     } 
     else {
        return -1; 
     }     
}