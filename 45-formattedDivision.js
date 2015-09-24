function FormattedDivision(num1, num2) {
  'use strict';
  var div = num1/num2;
  var result = div.toFixed(4);
  var strResultArr = result.toString().split('.');

  var strResult = strResultArr[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  strResult += '.' + strResultArr[1];

  return strResult;
}