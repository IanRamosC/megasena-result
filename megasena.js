'use strict';

var generateRandom = function generateRandom(_) {
  return ~~(Math.random() * 60) + 1;
};

var generateMegaSenaResult = function generateMegaSenaResult() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var returnAsString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (isNaN(num)) {
    throw new TypeError('The specified argument is not a number');
  }

  var result = [],
      _num = Math.min(num, 60);

  while (result.length < _num) {
    var number = generateRandom();

    if (result.indexOf(number) < 0) {
      result.push(number);
    }
  }

  result.sort(function (a, b) {
    return a - b;
  });

  return returnAsString ? result.join(', ') : result;
};

module.exports = generateMegaSenaResult;
