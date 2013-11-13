_ = require('underscore');
// utility belt for JS

var testContains = _.contains([1, 2, 3], 3);
console.log(testContains);

var testMap = _.map([1, 2, 3], function(num){ return num += 1; });
console.log(testMap);

