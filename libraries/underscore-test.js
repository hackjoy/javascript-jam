_ = require('underscore');
// JavaScript's missing standard library

// COLLECTIONS
// ***********************************************

// #EACH #FOREACH  ::: Iterates thorugh a list
// _.each(list, iterator, [context])
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


// #MAP #COLLECT :::  Returns a new array
// _.map(list, iterator, [context])
var mapTest = _.map([1, 2, 3], function(num) { return num += 1; } );
console.log(mapTest);
// => [2, 3, 4]

// #REDUCE #INJECT #FOLDL :::  Boils down a list of values into a single value.
// _.reduce(list, iterator, memo, [context])        // memo is returned each time.
var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// => 6

// #FIND #DETECT ::: Halts and returns on first match found
// _.find(list, iterator, [context])
var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => 2

// #FILTER #SELECT ::: Returns array of values that pass truth test of iterator
// _.filter(list, iterator, [context])
var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [2, 4, 6]

// #WHERE ::: Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
// _.where(list, properties)
var plays = _.where(listOfPlays, {author: "Shakespeare", year: 1611});
// => [{title: "Cymbeline", author: "Shakespeare", year: 1611}, {title: "The Tempest", author: "Shakespeare", year: 1611}]

// #FINDWHERE ::: Returns first item that matches all properties
// findWhere_.findWhere(list, properties)
_.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
// => {year: 1918, newsroom: "The New York Times",  reason: "Bla bla bla."}

// #REJECT ::: returns an array excluding items that pass the truth test
// _.reject(list, iterator, [context])
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [1, 3, 5]

// #EVERY ::: Returns true if all items pass the iterator truth test
// every_.every(list, [iterator], [context]) Alias: all
_.every([true, 1, null, 'yes'], _.identity);
// => false

// #SOME #ANY ::: Returns true if any items pass the iterator truth test
// _.some(list, [iterator], [context])
_.some([null, 0, 'yes', false]);
// => true


// #CONTAINS #INCLUDE
// .contains(list, value)
var containsTest = _.contains([1, 2, 3], 3);
// => true

