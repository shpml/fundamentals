**WDI Fundamentals Unit 9**

---

# Functions Cheat Sheet

Here are some notes on what's been covered in this unit. Feel free to copy this and extend it to make your own cheat sheet.

## Defining and Calling JavaScript Functions

* In JavaScript, a **function** can be:
	- Made up of either a single reusable statement or a group of reusable statements.
	- Called from anywhere in the program, which allows for the statements inside a function to not be written over and over again.

* To define a function, use the following syntax:

	```js
	var myFunctionName = function() {
	  // Body of the function
	};
	```

* To use, or **call**, a function, simply type the name of your function, followed by `()` (plus any inputs you might be passing in).

	```js
	myFunctionName();
	```

	
## Parameters and Arguments

* **Parameters** are the variables that are defined in the function's declaration when the function is defined. They allow us to provide some extra information for a function.
	- In the following function example, `firstName`, `lastName`, `year` and `city` in the parentheses that follow the word `function` are the parameters:

		```js
		var greetUser = function (firstName, lastName, year, city) {
		  console.log("Hello " + firstName + " " + lastName + " born in "+ year + " from " + city + "!" );
		};
		```
* **Arguments** are the actual values passed to the function when the function is called.
	- In the following example, `"Bruce"`, `"Wayne"`, `1939` and `"Gotham"` are the arguments:
	
		```js
		greetUser("Bruce", "Wayne", 1939, "Gotham");
		```

## Return Statements

* **Return statements** allow us to "spit out" or "hand back" a value to the line where we called the function.
	- We can then store that value that we returned in a variable, or work with it:
	
		```js
		var addBonusPoints = function (score) {
		    if (score > 50) {
		        return score + (score * .10);
		          // if score is 55, then 60.5 will be returned
		    }
		
		    return score;
		};
		
		var totalPoints = addBonusPoints(55);
		// => 60.5
		// The variable totalPoints will now hold 60.5
		```
* Additionally, a return statement will cause the function that contains it to immediately end when that line is run. In the example below, we are simply using `return` to exit the function if `muted` is equal to `true`, instead of returning a value:

	```js
	var rockAndRoll = function (muted) {
	   var song = "It's only Rock 'N' Roll";
	   var artist = "Rolling Stones";
	
	   if (muted === true) {
	       return; // Here we use return as a way to exit a function, instead of returning any value
	   }
	
	    console.log("Now playing: " + song + " by " + artist);
	};
	
	rockAndRoll(true);
	```

## Variable Scope

- When we declare variables inside a function, those variables will only be accessible from within that function. This is known as **scope**.
- If a variable is declared inside a function, it is local to that function and therefore referred to as a **local variable**.
	- This also means it has **local scope**. When we have a variable with local scope, it cannot be referenced outside of that function, which means it cannot be called or used outside of the brackets in which it's contained.
- When a variable is declared outside a function, it is referred to as a **global variable**. A global variable has **global scope**, which means all scripts and functions on a web page can access it.


[Let's put this into practice!](functions-assignment.md)
