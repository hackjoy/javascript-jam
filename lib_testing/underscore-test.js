_ = require('underscore');
// A utility belt for JS - like adding a standard lib

var containsTest = _.contains([1, 2, 3], 3);
console.log(containsTest == true);

var mapTest = _.map([1, 2, 3], function(num) { return num += 1; } );
// console.log(mapTest == [2, 3, 4]);
console.log(mapTest);