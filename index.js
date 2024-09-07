//JavaScript Classes
//https://www.w3schools.com/js/js_classes.asp
//https://www.w3schools.com/js/js_functions.asp
//

console.log(`*****************hello JS Class********************`);

/*
ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
JavaScript Classes are templates for JavaScript Objects.

Syntax:
class ClassName {
  constructor() { ... }
}

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

A JavaScript class is not an object.
It is a template for JavaScript objects.
*/

//When you have a class, you can use the class to create objects:

class Car {
  constructor(name, year) {
    console.log("enjoy JS Class");
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);
console.log(myCar1);
const myCar2 = new Car("Audi", 2019);
console.log(myCar2.name);

//The constructor method is called automatically when a new object is created.

/*
The Constructor Method
The constructor method is a special method:

    It has to have the exact name "constructor"
    It is executed automatically when a new object is created
    It is used to initialize object properties
If you do not define a constructor method, JavaScript will add an empty constructor method. 
*/

/*
Class Methods

Class methods are created with the same syntax as object methods.
Use the keyword class to create a class.
Always add a constructor() method.
Then add any number of methods.

Syntax:
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
*/

class Car2 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    const aged = date.getFullYear() - this.year;
    return aged;
  }
}

const myCar = new Car2("Ford", 2004);
console.log(
  "My car name is " + myCar.name + " & age is " + myCar.age() + " years old."
);

//You can send parameters to Class methods:

class Car3 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

const date = new Date();
let year = date.getFullYear();

const myCar3 = new Car3("Ford", 2011);
console.log("My car is " + myCar3.age(year) + " years old.");

//JavaScript Functions
console.log("*******************start JavaScript Functions******************");

/*
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).
*/
function myFunction(p1, p2) {
  return p1 * p2;
}
let result = myFunction(4, 3);
console.log(result);

/*
JavaScript Function Syntax

A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Function parameters are listed inside the parentheses () in the function definition.
Function arguments are the values received by the function when it is invoked.
Inside the function, the arguments (the parameters) behave as local variables.
*/

/*
Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

    When an event occurs (when a user clicks a button)
    When it is invoked (called) from JavaScript code
    Automatically (self invoked)
*/

/*
Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":
*/

let x = myFunction(4, 5);

function myFunction(a, b) {
  return a * b;
}
console.log(x);

/*
Why Functions?

With functions you can reuse code
You can write code that can be used many times.
You can use the same code with different arguments, to produce different results.
*/

//The () Operator
// The () operator invokes (calls) the function:

function toCelsius(f) {
  return (5 / 9) * (f - 32);
}
let value = toCelsius(102);
console.log(value);

//Accessing a function with incorrect parameters can return an incorrect answer:

let value2 = toCelsius();
console.log(value2);
console.log(typeof value2);

//Accessing a function without () returns the function and not the function result:

let value3 = toCelsius;
console.log(value3);
console.log(typeof value3);

/*
Note:
As you see from the examples above, toCelsius refers to the function object, and toCelsius() refers to the function result.
*/

// Functions Used as Variable Values

// Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.

let c = toCelsius(77);
let text = "The temperature is " + c + " Celsius";
console.log(text);

/*
Local Variables:

Variables declared within a JavaScript function, become LOCAL to the function.
Local variables can only be accessed from within the function.
*/

function myFunction() {
  let carName = "Volvo";
  let text = "Inside: " + typeof carName + " " + carName;
  console.log(text);
}

myFunction();

let text2 = "Outside: " + typeof carName;
console.log(text2);

/*
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.
*/

//JavaScript Objects
console.log("***************now enJoy JavaScript Objects****************");

/*
Here is a car object example:
Car Object 	    Properties 	            Methods
	
            car.name = Fiat           car.start()
            car.model = 500           car.drive()
            car.weight = 850kg        car.brake()
            car.color = white 	      car.stop()
*/

/*
Object Properties

A real life car has properties like weight and color:
car.name = Fiat, car.model = 500, car.weight = 850kg, car.color = white.
Car objects have the same properties, but the values differ from car to car.
*/

/*
Object Methods

A real life car has methods like start and stop:
car.start(), car.drive(), car.brake(), car.stop().
Car objects have the same methods, but the methods are performed at different times.
*/

/*
JavaScript Objects

Objects are variables too. But objects can contain many values.
This code assigns many values (Fiat, 500, white) to an object named car:
*/
const car = { type: "Fiat", model: "500", color: "white" };
console.log(car);
console.log(car.color);

//It is a common practice to declare objects with the const keyword.

/*
JavaScript Object Definition
How to Define a JavaScript Object

    Using an Object Literal
    Using the new Keyword
    Using an Object Constructor
*/
/*
JavaScript Object Literal

An object literal is a list of name:value pairs inside curly braces {}.
{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
*/

// Create an Object:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person.firstName + " is " + person.age + " years old.");

// Create an empty Object
const person2 = {};

// Add Properties
person2.firstName = "Tohn";
person2.lastName = "Doe";
person2.age = 40;
person2.eyeColor = "blue";
console.log(person2.firstName + " is " + person2.age + " years old.");

/*
Using the new Keyword
This example create a new JavaScript object using new Object(), and then adds 4 properties:
*/
// Create an Object
const person3 = new Object();
person3.firstName = "John";
person3.lastName = "Doe";
person3.age = 50;
person3.eyeColor = "blue";
console.log(person3);

//there is no need to use new Object().
// For readability, simplicity and execution speed, use the object literal method.

//The named values, in JavaScript objects, are called propertie

/*
Objects written as name value pairs are similar to:

    Associative arrays in PHP
    Dictionaries in Python
    Hash tables in C
    Hash maps in Java
    Hashes in Ruby and Perl
*/
console.log(person.lastName);
console.log(person["lastName"]);

//start from--JavaScript Object Methods
/*
Methods are actions that can be performed on objects.
Methods are function definitions stored as property values
*/

const person4 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person4.fullName());

/*
In JavaScript, Objects are King.
If you Understand Objects, you Understand JavaScript.

Objects are containers for Properties and Methods.
Properties are named Values.
Methods are Functions stored as Properties.
Properties can be primitive values, functions, or even other objects.
In JavaScript, almost "everything" is an object.

    Objects are objects
    Maths are objects
    Functions are objects
    Dates are objects
    Arrays are objects
    Maps are objects
    Sets are objects

All JavaScript values, except primitives, are objects.
JavaScript Primitives

A primitive value is a value that has no properties or methods.
3.14 is a primitive value
A primitive data type is data that has a primitive value.
JavaScript defines 7 types of primitive data types:

    string
    number
    boolean
    null
    undefined
    symbol
    bigint
*/

/*

Immutable

Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
   Value	       Type	            Comment
 "Hello"	      string	      "Hello" is always "Hello"
  3.14	        number	      3.14 is always 3.14
  true	        boolean	      true is always true
  false	        boolean	      false is always false
  null	        null(object)	null is always null
  undefined   	undefined	    undefined is always undefined
*/

/*
JavaScript Objects are Mutable

Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:
const x = person;
The object x is not a copy of person. The object x is person.
The object x and the object person share the same memory address.
Any changes to x will also change person:
*/

// Create an Object
const person5 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Create a Copy
const m = person5;

// Change Age
m.age = 10;
console.log(person5.firstName + " is " + person5.age + " years old.");

//JavaScript Object Properties
console.log(`****************JavaScript Object Properties****************`);

/*
An Object is an Unordered Collection of Properties
Properties are the most important part of JavaScript objects.
Properties can be changed, added, deleted, and some are read only.
*/
console.log(person5["firstName"] + " is " + person5["age"] + " years old.");

let x2 = "firstName";
let y2 = "age";
console.log(person5[x2] + " is " + person5[y2] + " years old.");
/*
Adding New Properties
You can add new properties to an existing object by simply giving it a value:
*/
person5.nationality = "English";
console.log(person5.firstName + " is " + person5.nationality + ".");

//Deleting Properties
delete person5.age;
console.log(person5.firstName + " is " + person5.age + " years old.");

delete person5["firstName"];
console.log(person5.firstName + " is " + person5.age + " years old.");

//Nested Objects
// Property values in an object can be other objects:

const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};
console.log(myObj.myCars.car2);
console.log(myObj.myCars["car2"]);
console.log(myObj["myCars"]["car2"]);
let p1 = "myCars";
let p2 = "car2";
console.log(myObj[p1][p2]);

//start from JavaScript Object Methods
//https://www.w3schools.com/js/js_object_method.asp
