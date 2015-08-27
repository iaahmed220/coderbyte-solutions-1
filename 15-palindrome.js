function Palindrome(str) { 
  var re = /\s+/g; 
  var strNoSpace = str.replace(re, "");

  var strLength = strNoSpace.length, 
    word; 

  for (var i=strLength-1, word=''; i >= 0; word += strNoSpace[i--]) {}

  return word == strNoSpace;         
}
