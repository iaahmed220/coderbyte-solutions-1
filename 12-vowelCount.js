function VowelCount(str) { 
  var vowels = str.match(/[aeiou]/ig);
    if(vowels === null) {
      return 0;
    }
    return vowels.length;  
}