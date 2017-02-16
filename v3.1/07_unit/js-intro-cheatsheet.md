**WDI Fundamentals Unit 7**

---

# Intro to JS Cheat Sheet

Here are some notes on what's been covered in this chapter. Feel free to copy this information and extend it to make your own cheat sheet.

#### Pseudocode
* A way to plan out your script before coding it. 
* It is a detailed, step-by-step description of what a computer must do, expressed in plain English rather than in a programming language.

#### Variables
  * Variables are used to store data into the memory of the computer so that it can be referenced later.
  * A variable is assigned a value using the `=` operator. First, the expression to the right of the `=` is evaluated. Then, this value is assigned to the variable to the left of the `=`.
  
  	```js
  	var favoriteMovie = "Jaws";
  	
  	favoriteMovie;
  	// => "Jaws"
  	```
  * To use the value that a variable is storing, simply include that variable in an expression. An expression containing variables will evaluate just like one without variables, except that the variables will themselves be evaluated as part of the expression. 
  * When a variable is reassigned, it retains **no knowledge** of any prior values it may have held.

  	```js
  	var winner = "Sarah";
  	winner = "Jeff";
  	
  	winner;
  	// => "Jeff"
  	```
  * A variable may be reassigned "in place" using an expression like `x = x + 1` (or its shorthand, `x += 1`).
  * An expression like `x = y` only means that the value that `y` had been holding is now _also_ held in `x`. **It does not imply any lasting relationship between x and y**.

  
#### Assignment Operators
* The `=` operator assigns a value to a variable.
* The `+=` operator adds a value to an existing variable.
* The `-=` operator subtracts a value from an existing variable.

#### Data Types
  * Some common data types are numbers, strings, and Booleans.
  * Strings should be surrounded by quotes: `"Hello"`.
  * Numbers should _not_ be surrounded by quotes: `7`.
  * To check to see what type of data a variable holds, the `typeof` operator can be used.
  	* Example:
  	
  		```js
  		var myPet = "Arthur";
  		typeof myPet;
  		// => "string" 
  		```

  
#### Expressions
  * An expression is a collection of values (like `1` and `2`) and operators (like `+` or `*`).  
  * The process of reducing this expression down to a single value is called **evaluation**.
  * An operator takes in a number of inputs but outputs/evaluates to a single value.
  * Common arithmetic operators include:
  	* `+` - Addition
  	* `-` - Subtraction
  	* `*` - Multiplication
  	* `/` - Division
  	* `%` - Modulus
  * Using the `+` operator with two strings literally puts them next to each other, instead of evaluating their total. This is called **string concatenation**.

---

Feeling confident? [Let's take what we've learned and apply it to a project.](js-intro-assignment.md)
