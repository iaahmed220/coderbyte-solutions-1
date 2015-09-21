function CaesarCipher(str, num) { 
  var encoded = '',
      strLength = str.length,
      curChar = '',
      re = /[a-z,A-Z]/,
      charCode = 0,
      i;

  for (i=0; i < strLength; i++) {
    curChar = str[i];

    // Only process a letter character
    if (re.test(curChar)) {
      charCode = str.charCodeAt(i);

      if ((charCode >= 65) && (charCode <= 90)) {
        curChar = String.fromCharCode(((charCode - 65 + num) % 26) + 65);
      }
      else if ((charCode >= 97) && (charCode <= 122)) {
        curChar = String.fromCharCode(((charCode - 97 + num) % 26) + 97);
      }
    }

      encoded += curChar;
  }
  
  return encoded;  
}