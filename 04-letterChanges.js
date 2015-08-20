function LetterChanges(str) { 
  var coded = str.split('');
  var result = [];
  var encrypted = "";
  
  for(var i=0; i < coded.length; i++) {
    if(coded[i].search(/[A-Za-z]|\s+/g) != -1) { 
      switch(coded[i]) {
        case ' ':
          result.push(' ');
          break;
        case 'z':
          result.push('a');
          break;
        case 'Z':
          result.push('A');
          break;
        default:
          result.push(String.fromCharCode(1 + coded[i].charCodeAt(0)));
      }
    } else {
      result.push(coded[i]);
  }         
}
  encrypted = result.join('');
  return encrypted.replace(/[aeiou]+/gi, function(vowel) {
    return vowel.toUpperCase();
  });
}