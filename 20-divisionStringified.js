// Thanks to Elias Zamaria for the regex - http://stackoverflow.com/users/28324/elias-zamaria
function DivisionStringified(num1,num2) { 
  var result = Math.round(num1/num2); 
  var strResult = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");  
    
  return strResult; 
}