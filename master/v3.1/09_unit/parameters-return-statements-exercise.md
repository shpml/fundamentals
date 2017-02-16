**WDI Fundamentals Unit 9**

---

##![Your Turn](../assets/exercise.png) Your Turn

### Parameters and Return Statements Exercise

---

#### Instructions

0. Write the code to perform the actions listed below in the **"JavaScript"** panel in the JS Bin editor. 
0. If you don't see the JS Bin below, please refresh the page.
0. Click "Run" to run the code in the "Console" panel.
0. After clicking "Run", to check functions, call the function in the **"Console"** panel on the right and hit enter/return.

<a class="jsbin-embed" href="http://jsbin.com/gikuni/edit?js,console&height600">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.40.3"></script>

#### Let's get started!

1. In the "JavaScript" panel in JS Bin, define a function `sayHello`.
	- It should accept one parameter, `name`.
	- Inside the function, _return_ a greeting in the following format: `"Hello, *name*"`.
		
		> Hint #1: You'll want to use a return statement here.
		
		> Hint #2: You'll want to use string concatenation (`+`) to combine the name parameter with the human-readable text for the return statement.
	- After hitting the "Run" button in the "Console" panel, call the `sayHello` function in the "Console" panel, using `"Bill"` as the argument.
	- You should see `"Hello, Bill"` displayed in the console.

0. In the "JavaScript" panel in JS Bin, define a function `areBothEven`.
	- It should accept two parameters, `num1` and `num2`.
	- Inside the function, _return_ `true` if `num1` and `num2` are both even, but `false` if they are not.

		> Hint #1: You can use the modulus operator `%` to see if both numbers are even. 
		
		> Hint #2: If we divide by 2 and have a remainder of 1, we know the number is odd. If we have a remainder of 0, then we know that the number is even.
		
	- After hitting the "Run" button in the "Console" panel, call the `areBothEven` function in the "Console" panel, using `2` and `4` as the arguments.
	- You should see `true` displayed in the console.

0. In the "JavaScript" panel in JS Bin, define a function `hotOrNot `.
	- It should accept one parameter, `temp`.
	- Inside the function, _return_ `"Hot!"` if `temp` is greater than or equal to `70`, but `"Not hot."` if `temp` is less than `70`.
		
		> Hint: You'll want to use a conditional statement inside the function.
		
	- After hitting the "Run" button in the "Console" panel, call the `hotOrNot ` function in the "Console" panel, using `76` as the argument.
	- You should see `"Hot!"` displayed in the console.
	- Test out the function using different numbers for the argument when calling the function to make sure everything is working.


Once you've written and tested all of these functions, go ahead and move on to the next lesson.

> *Stuck? Check out the [solutions](../exercise-solutions.md#parameters-return-statements) for assistance.*

---
[Ready to move on? Here's the next lesson.](scope.md)
