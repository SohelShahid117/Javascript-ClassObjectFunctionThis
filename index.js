//JavaScript Classes
//https://www.w3schools.com/js/js_classes.asp
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
