function SimpleAdding(num) { 
  var sum = 0;
  for(var i=0; i <= num; i++) {
    sum += i;
  }
  return sum;         
}

// Recursive solution
function SimpleAddingRecursive(num) { 
  if(num === 1){
    return 1; 
  }
  return num + SimpleAddingRecursive(num - 1);
}
