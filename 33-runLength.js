function RunLength(str) {
  var encoded = [];
  
  encoded = str.match(/(.)\1*/g).map(function(str) {
    var strLength = str.length;
    return strLength + str[0];
  });

  return encoded.join('');
}