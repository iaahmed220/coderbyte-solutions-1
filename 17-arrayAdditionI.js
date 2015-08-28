function ArrayAdditionI(arr) { 
  var largestNum = arr.sort(function(a,b) {
    if(a < b) {
      return -1; 
    }
    if(a > b) {
      return 1;
    }
    return 0; 
  }).pop(); 

function recursion(target, array) {
     if(array.length == 0) {
        return target == 0; 
     }

     var n = array[0];    
     array = array.slice(1); 
     return recursion(target,array) || recursion(target-n,array);
   }
   
   return recursion(largestNum,arr);          
}
