//JavaScript Classes
//https://www.w3schools.com/js/js_classes.asp
//https://www.w3schools.com/js/js_functions.asp
//

console.log(`hello JS Class`);

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
console.log("start JavaScript Functions");

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
