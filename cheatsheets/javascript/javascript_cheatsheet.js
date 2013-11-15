// JavaScript Reference Docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference?redirectlocale=en-US&redirectslug=JavaScript%2FReference

// *****************************
// OPERATORS
// *****************************

//    + - / *
//    > < >= <= != == ===
//    &&   ||


// *****************************
// 6 DATA TYPES
// *****************************
var numberDataType = 1                                         // 64 bits of memory allocated
var stringDataType = "string"
var booleanDataType = true;                                    //console.log(typeof booleans)
var objectDataType1 = {color: "grey", links: [1,2,3,4]}
var objectDataType2 = ["grey", "red", "orange"]
var functionDataType = function() {console.log('dog');};
var undefinedDataType = undefined

// *****************************
// LOOPS
// *****************************

// FOR - initialize; check; update;
drawing_unit = ''
for (var i = 0; i < 10; i++) {
 drawing_unit += '#'
 console.log(drawing_unit);
};

// WHILE
count = 0
drawing_unit = '#'
while (count < 10) {
 console.log(drawing_unit);
 count++;
 drawing_unit += '#';
}

// FOR IN
for (var mail in mailArchive) {
 console.log(mail);
}

// *****************************
// IF ELSE CONTROL FLOW
// *****************************
for (var counter = 0; counter < 20; counter++) {
 if (counter > 15) {
   break;
 }
 else if (counter > 10) {
   console.log(counter + "*");
 }
 else {
   console.log(counter);
 }
}

// ternary operator
element === 0 ? 1 : 0;


// *****************************
// FUNCTIONS
// *****************************
function print(input) {
console.log(input);
}

// Functions dont just package computation - they package an environment
// Closure Example 1:
function makeAddFunction(amount) {
 function add(number) {
   return number + amount;
 }
 return add;
}

var addTwo = makeAddFunction(2);
var addFive = makeAddFunction(5);
show(addTwo(1) + addFive(1));

// Closure Example 2:
function greaterThan(x) {
 return function(y) {
   return y > x;
 };
}

var greaterThanTen = greaterThan(10);
show(greaterThanTen(9));


// anonymous function
function () {
 console.log('This is an anonymous function')
}


// Recursion
function power(base, exponent) {
 if (exponent == 0)
   return 1;
 else
   return base * power(base, exponent - 1);
}

// *****************************
// FUNCTIONAL PROGRAMMING
// *****************************
//functions that operate on other funcitons are called higher order functions
// Instead of a messy set of variables and loops, you can decompose algorithms
// into a combination of a few fundamental algorithms, which are invoked by name,
//  and do not have to be typed out again and again.
// Being able to write what we want to do instead of how we do it means we are
// working at a higher level of abstraction. In practice, this means shorter, clearer, and more pleasant code.

// higher order function - calls a method on each element of an array. Cleaner than for loop
function forEach(array, action) {
for (vari = 0; i < array.length; i++)
  action(array[i]);
}
forEach(["Wampeter", "Foma", "Granfalloon"], print);

// higher order function - builds a new array after with the values generated after applying function to each element in an array
function map(func, array) {
 var result = [];
 forEach(array, function (element) {
   result.push(func(element));
 });
 return result;
}

// filter returns a new array with elements that pass a test
function filter(test, array) {
 var result = [];
 forEach(array, function (element) {
   if (test(element))
     result.push(element);
 });
 return result;
}

show(filter(partial(op[">"], 5), [0, 4, 8, 12]));


// A function can return a modified function,
// if negate takes multiple args then we use .apply to ensure the function is applied to all
function negate(func) {
 return function() {
   return !func.apply(null, arguments);
 };
}

// flatten's an array
function flatten(arrays) {
 var result = [];
 forEach(arrays, function (array) {
   forEach(array, function (element){result.push(element);});
 });
 return result;
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// EXAMPLE OF FUNCTIONAL PROGRAMMING WITH HIGHER ORDER FUNCTIONS

// applies each
function forEach(array, action) {
for (vari = 0; i < array.length; i++)
  action(array[i]);
}

//  applies a function(combine) to each element of array + base value
function reduce(combine, base, array) {
 forEach(array, function (element) {
   base = combine(base, element);
 });
 return base;
}

//
function count(test, array) {
 return reduce(function(total, element) {
   return total + (test(element) ? 1 : 0);
 }, 0, array);
}

function equals(x) {
 return function(element) {return x === element;};
}

function countZeroes(array) {
 return count(equals(0), array);
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////









// *****************************
// PROPERTIES
// *****************************
// Can be accessed in two ways. String properties cannot be changed
// strings have a length property and many others
var text = "purple haze";
show(text.length);
show(text["length"]);
console.log('This outputs to terminal');

// *****************************
// Hash / Dictionary Object. Hash objects can behave like sets.
// *****************************
// Properties can be created and modified. A property must be a string.
var cat = {colour: "grey", name: "Spot", size: 46, "5": 10}; // create set of property: value
cat.eye_color = "green"; // create property
cat.size = 47; // update
cat["5"] // read property        must be quoted if not valid string
delete cat.size // delete property
"eye_color" in cat // check existence of property

// *****************************
// Array / List object
// *****************************
var mailArchive = ["mail one", "mail two"]; // create
mailArchive[0] // read
mailArchive.push("mail three") // add to end
mailArchive.pop(); // delete last
delete mailArchive[0] // set zeroth element to undefined
mailArchive.splice(0,2) // remove the zeroth and first elements
mailArchive.join(" "); // join array of strings into a single string

// looping array - option 1
for (mail in mailArchive) {
 console.log(mail)
};
// looping array - option 2
for (var current = 0; current < mailArchive.length; current++)
 print("Processing e-mail #", current, ": ", mailArchive[current]);


// *****************************
// Date object
// important to have specific objects with their own methods to protect the namespace and make them easier to use
// *****************************

var dateVar = new Date(1980,1,1); // Date object created using keyword 'new'. Object built up by constructor function
var dateVar = new Date(2007, 2, 30, 8, 20, 30)); // specific time
var dateVar = new Date() // Time now
var dateYear = dateVar.getFullYear() // Date object has various methods.
var minutesDifferentFromGMT = dateVar.getTimezoneOffset());

// *****************************
// Math object
// important to have specific objects with their own methods to protect the namespace and make them easier to use
// *****************************

var pi = Math.PI;
var roundedDown = Math.floor(3.7)
var randomVarZeroToOne = Math.random()
var randomVarZeroToThree = Math.random() * 3


// *****************************
// Error handling
// *****************************
// Have to make sure that your catch block only handles exceptions
// that it knows how to handle. Otherwise can make it hard to recognise
// the type of the exception (e.g. if you return a string message).
// A better idea is to use unique values, such as the FoundSeven object, or to introduce a new type of objects

var FoundSeven = {};

function hasSevenTruths(object) {
 var counted = 0;

 function count(object) {
   for (var name in object) {
     if (object[name] === true) {
       counted++;
       if (counted == 7)
         throw FoundSeven; // raise exception
     }
     else if (typeof object[name] == "object") {
       count(object[name]);
     }
   }
 }

 try {
   count(object);
   return false;
 }
 catch (exception) {
   if (exception != FoundSeven)
     throw exception;
   return true;
 }
}


function roadsFrom(place) {
 var found = roads[place];
 if (found == undefined)
   throw new Error("No place named '" + place + "' found.");
 else
   return found;
}

show(roadsFrom("Puamua"));





// *****************************
// OBJECT ORIENTATED PROGRAMMING (OOP)
// *****************************

// To keep things clear and organised, it is important to keep the amount of methods and responsibilities that an
// object type has as small as possible. When an object does too much, it becomes a big mess of functionality, and a formidable source of confusion

// Constructor. An object factory. Names start with a capital letter.
// "this" keyword always refers to the object it is being called on. The instance
function Cat(name) {
 this.name = name;
 this.speak = function(words) {
   print("I'm a cat instance and my name is", this.name, "I wanted to say...", words);
 };
}

var killerCat = new Cat("Killer");      // create instance of class
killerCat.speak("GRAAAAAAAAAH!");       // call instance method


// PROTOTYPE
// *****************************

// Every object is based on a prototype, which gives it a set of inherited properties properties/methods
// You can define them as you wish. Even a basic "new Object()" will come with methods like toString() for free - although they are hidden

// Create a Dog class that inherits from Object class. It is called a Dog constructor.
// it defines an instance method .name that can be called on instances of Dog
function Dog() {
 this.name = "Bob";
}


// You can add new variables/functions to a constructor by using the Class.prototype.nameOfMyNewMethod
Dog.prototype.dance = function(adjective) {
 print("The dog is ", adjective);
};
Dog.prototype.teeth = "small";

// Create dog object - an instance of the Dog class
var dog1 = new Dog();

Dog.prototype;                              // {name: "bob", dance: [Function], teeth: "small" }     Dog class/constructor has 2 prototype variables/functions set up
Dog.constructor;                            // <function Function()>                                 Dog belongs to the Object/Function class/constructor

dog1.prototype;                             // undefined                                             dog1 not a Class/constructor so has no prototype methods
dog1.constructor;                           // <function Dog()>                                      dog1 belongs to the class/constructor Dog

dog1.teeth;                                 // "small"
dog1.teeth = "long, sharp, and bloody";     // changes only the object/instance value of .teeth
dog1.teeth;                                 // "long, sharp, and bloody"
Dog.prototype.teeth;                        // Still "small"

dog1.instanceof Dog                         // true

function Animal() {}                        // define animal class
Dog.prototype = new Animal();               // make Dog inherit from Animal

dog1.hasOwnProperty("teeth")                // true       will also return true for hidden properties in some browsers
dog1.propertyIsEnumerable("teeth")          // true       will ignore hidden properties in browsers - which give hidden properties the _proto_ key


// Writing the above expression every time you need to check whether a property is present in an object is unworkable.
// We could put it into a function, but an even better approach is to write a constructor and a prototype specifically for situations like this,
// where we want to approach an object as just a set of properties. Because you can use it to look things up by name, we will call it a Dictionary.

// Now the whole mess related to approaching objects as plain sets of properties has been 'encapsulated' in a convenient interface: one constructor and four methods.
// Note that the values property of a Dictionary object is not part of this interface, it is an internal detail, and when you are using Dictionary objects you do not need to directly use it.

// Whenever you write an interface, it is a good idea to add a comment with a quick sketch of what it does and how it should be used.
// This way, when someone, possibly yourself three months after you wrote it, wants to work with the interface, they can quickly see how to use it,
// and do not have to study the whole program.

function Dictionary(startValues) {
 this.values = startValues || {};
}
Dictionary.prototype.store = function(name, value) {
 this.values[name] = value;
};
Dictionary.prototype.lookup = function(name) {
 return this.values[name];
};
Dictionary.prototype.contains = function(name) {
 return Object.prototype.hasOwnProperty.call(this.values, name) &&
   Object.prototype.propertyIsEnumerable.call(this.values, name);
};
Dictionary.prototype.each = function(action) {
 forEachIn(this.values, action);
};

var colours = new Dictionary({Grover: "blue",
                             Elmo: "orange",
                             Bert: "yellow"});
show(colours.contains("Grover"));
show(colours.contains("constructor"));
colours.each(function(name, colour) {
 print(name, " is ", colour);
});

























// iterate through a set of properties
function forEachIn(object, action) {
 for (var property in object) {
   if (object.hasOwnProperty(property))
     action(property, object[property]);
 }
}

var chimera = {head: "lion", body: "goat", tail: "snake"};
forEachIn(chimera, function(name, value) {
 print("The ", name, " of a ", value, ".");
});













// Another way to give an object methods is to write a function then just call the method on the object
function speak(line) {
 print("The ", this.adjective, " rabbit says '", line, "'");
}
var whiteRabbit = {adjective: "white", speak: speak};
whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
speak.apply(whiteRabbit, ["Yum."]);     // args must be supplied as an array
speak.call(whiteRabbit, "Burp.");       // args must be supplied as individually





// *****************************
// String methods
// *****************************
string = "This, is a test string";
string.charAt(0);
string.slice(0,2);
string.split(" "); // split single string into array of strings
string.indexOf(",")















// *****************************
// MISC METHODS
// *****************************
// var confirmationBox = confirm('message');
// var alertBox = alert('message');
// var answerPrompt = prompt('what is 2+2?')

// each function has an arguments property
function argumentCounter() {
 print("You gave me ", arguments.length, " arguments.");
}
argumentCounter("Death", "Famine", "Pestilence");












// *****************************
// KEYWORDS RESERVED FOR USE
// *****************************
// abstract boolean break byte case catch char class const continue
// debugger default delete do double else enum export extends false
// final finally float for function goto if implements import in
// instanceof int interface long native new null package private
// protected public return short static super switch synchronized
// this throw throws transient true try typeof var void volatile
// while with