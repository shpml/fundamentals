**WDI Fundamentals Unit 8**

---

# Control Flow Cheat Sheet

Here are some notes on what's been covered in this unit. Feel free to copy this and extend it to make your own cheat sheet.


## Logical Operators and Booleans
#### Comparison and Equality Operators

| Operator | Meaning	                | True expressions |
|:-:       |:-:                        |:-:               |
| ===      | Equality          | (2 * 5) === 10   |
| !==	     | Inequality        | '10' !== 10      |
| >        | Greater than	            | 20 > 10          |
| >=       | Greater than or equal to   | '10' >= 10       |
| <	       | Less than	              | 10 < 30          |
| <=       | Less than or equal to      | '10'<= 10        |

#### Undefined and Null
  * When a variable is created but is not assigned a value, it will be evaluated as `undefined`.
  * We can assign a variable the value `null` as a way to "reset" the value of a variable to "nothing."


#### Logical Operators

Below are the exact rules Boolean operators follow when dealing with non-Boolean input values.

<img src="assets/logical-operators-boolean/falsey_truthy.png" width="500px">

- NOT(`!`): If the value is _truthy_, return `false`; if the value is _falsey_, return `true`.
- OR (`||`): Return the first _truthy_ value; if both values are _falsey_, return the last _falsey_ value. OR is nicknamed the "default operator" (can you explain why?)
- AND `(&&):` Return the first _falsey_ value; if both values are _truthy_, return the last _truthy_ value. AND is nicknamed the "guard operator" (can you explain why?)

**AND operator <code>&&</code>**

Condition 1 | Condition 2 | Result
----|----|----
true | true | true
true | false | false
false | true | false
false | false | false


**OR operator `||`**

Condition 1| Condition 2 | Result
----|----|----
true | true | true
true | false | true
false | true | true
false | false | false


**NOT operator `!`**

Condition | Result
----|----|----
true  | false
false | true

We can use parentheses to change the order of operations for logical operators, just like we do in mathematics.


## Conditionals
### `if...else` Statement Syntax

```javascript
if (condition1) {
  // Code to be executed if condition1 is true
} else if (condition2) {
  // Code to be executed if condition1 is false and condition2 is true
} else if (condition3) {
  // Code to be executed if condition1 and condition2 are false and condition3 is true
} else {
  // Code to be executed if condition1, condition2, and condition3 are false
}
```


* With `else if`, each additional condition will only be checked if all of the prior conditions have failed.

## Switch and Ternary Operators

### `switch` Statement Syntax

```javascript
switch (expression) {
  case value1:
    // Code to be executed if expression === value1
    break;
  case value2:
    // Code to be executed if expression === value2
    break;
  default:
    // Code to be executed if expression is different from both value1 and value2
  }
```

### Ternary Operator Syntax
A ternary statement is a one-line shorthand for an `if...else` statement.

The syntax for a ternary statement looks like this:

`condition ? result1 : result2;`

Example:

```js
var temperature = 55;

var typeOfExercise = temperature >= 45 ? "Go for a run outside." : "Go to the gym.";

typeOfExercise;
// => "Go for a run outside."
```

## Arrays
### What is an Array?
  * An array is an ordered list of values; these values can be strings, booleans, numbers... even other arrays.
  * The values within an array, called **elements**, are accessed by their
  position (via a value called an **index**) within the array.
  * An array can be defined by enclosing a list of values within square braces,
  like so : <code>var myArray = ['a','b','c','d']</code>
  * To retrieve the value at some index `i` from an array, add `[i]` to the
  end of the array. e.g. `myArray[2]`
  * To edit the value at some index `i`, simply act as if you were assigning a variable. e.g. `myArray[1] = 'f'`

### Additional Array Features
  * In addition to storing a set of values, arrays also have a number of in-built properties and functions that they can use.
  * `.length` gives you the length of the array you call it on.
  * `.push()` adds a new element to the end of an array, and returns that element.
  * `.pop()` removes the last element in an array, and returns that element.


## Loops
* Loops are used to tell our programs to take repeated action.

### `while` Loops
* `while` loops can run indefinitely, so long as the condition remains true.
* A loop's condition is re-evaluated each time the code block finishes running.

The syntax for a while loop looks like this:

```js
while (someConditionIsTrue) {
  //A block of code.
}

```

### `for` Loops
* A `for` loop will generally run a fixed number of times, not indefinitely.
* The three parameters for a `for` loop, in order, are (1) an initialization, (2) a condition, and (3) a final expression.

	```js
	for (initialization; condition; finalExpression) {
	  // A block of code.
	}
	
	```
	
### Iterating over arrays
  * `for` loops are an easy way to iterate through an array. The following will execute an arbitrary function `someFunction` for every element in array `myArray`, from left to right.

    ```javascript
      for (var i = 0; i < myArray.length; i += 1) {
        someFunction(myArray[i]);
      }
    ```
  * To change the way that you iterate through the array, just change the settings of your `for` loop.

[Let's put this into practice!](control-flow-assignment.md)
