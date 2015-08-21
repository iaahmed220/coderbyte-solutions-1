// Capitalize each word
// Don't capitalize single letters
function LetterCapitalize(str) { 
  return str.replace(/\w\S*/g, function(wrd) {
  return wrd.charAt(0).toUpperCase() + wrd.substr(1).toLowerCase();
  });
         
}