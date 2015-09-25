function CountingMinutes(str) {
 'use strict';
  var time = str.split(/[:-]+/g);
  // Get the start and end times in minutes
  var start = (+time[0] * 60) + (+time[1].substr(0,2));
  var end = (+time[2] * 60) + (+time[3].substr(0,2));
  var duration = 0;

  // Determine if in same 12 hours 
  // If not we add 12 hours to our end time
  if(time[1].substr(2,1) != time[3].substr(2,1) ) {
    end += (12 * 60); 
  }

  duration = end - start;

  // If the result is negative
  // The end time is the next day (we assume this)
  // The format does not allow for anything else
  // so add 24 hours
  // Will be same am or same pm for both times
  if(duration < 0) {
    duration += 1440;
  }

  return duration;
}
