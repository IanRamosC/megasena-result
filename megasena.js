'use strict';

var generateRandom = function generateRandom(_) {
  return ~~(Math.random() * 60) + 1;
};

var generateMegaSenaResult = function generateMegaSenaResult() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

  var result = [];

  while (result.length < num) {
    var number = generateRandom();

    if (result.indexOf(number) < 0) {
      result.push(number);
    }
  }

  return result.sort(function (a, b) {
    return a - b;
  }).join(', ');
};

module.exports = generateMegaSenaResult;
