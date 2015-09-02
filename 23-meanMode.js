// Thanks to Derek Bailey for some great insights
// http://derickbailey.com/2014/09/21/calculating-standard-deviation-with-array-map-and-array-reduce-in-javascript/
function MeanMode(arr) { 
  var size = Math.max.apply(null, arr);
  // Need one more slot for max value
  size += 1; 
  var count = [];
  var arrLength = arr.length;
  var elem;
  var max = 0;

  // mean or avg
  var sum = arr.reduce(function(a,b) { return a + b; });
  var avg = sum / arr.length;

  // mode
  // Initialize array to 0
  count = Array.apply(null,Array(size)).map(Number.prototype.valueOf, 0);
  // Count occurences of a number in the array
  for (var i=0; i < arrLength; i++) {
      count[arr[i]] += 1;
  }

  // Get the max count,and extract the index to get the value
  max = Math.max.apply(null, count);
  if(avg == count.indexOf(max)) {
    return 1;
  }
    return 0;    
}