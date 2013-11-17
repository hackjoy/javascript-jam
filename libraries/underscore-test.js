_ = require('underscore');
// JavaScript's missing standard library

// COLLECTIONS
// ***********************************************

// #EACH #FOREACH
// _.each(list, iterator, [context])
// Iterates thorugh a list
var person = {};
person.friends = {
    name1: true,
    name2: false,
    name3: true,
};

_.each(['name1', 'name3'], function(name){
    alert(this[name]); // this == person.friends because we passed it as a context
}, person.friends);
// => alerts name1 and name3 only


// #MAP #COLLECT
// _.map(list, iterator, [context])
// Returns a new array
var mapTest = _.map([1, 2, 3], function(num) { return num += 1; } );
console.log(mapTest);
// => [2, 3, 4]

// #REDUCE #INJECT #FOLDL
// _.reduce(list, iterator, memo, [context])        // memo is returned each time.
// Boils down a list of values into a single value.
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// => 6

// #FIND #DETECT
// _.find(list, iterator, [context])
// Halts and returns on first match found
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => 2


// CONTAINS
var containsTest = _.contains([1, 2, 3], 3);
// => true

