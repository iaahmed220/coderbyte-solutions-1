function ExOh(str) { 
  var countX = 0, 
    countY = 0,
    strLength = 0;

  strLength = str.length; 
  for (var i=0; i < strLength; i++) {
    
    switch (str[i].toLowerCase()) {
      case "x": 
        countX++; 
        break;
      case "o": 
        countY++; 
        break; 
      default: 
        break; 
    }
  }
    return countX == countY;       
}