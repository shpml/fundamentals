**WDI Fundamentals Unit 10**

---

# Functions

When you write software, you may find yourself repeating the code over and over again. So, let's learn how to instead write code that's reusable. You'll accomplish this using **functions**! Functions are _abilities_ (or actions), and they must be _defined_ to be viable. They must be _called_ to be used, and, when they are called, they may _return_ a value to you. 

Let's define your first function:

## Defining JavaScript Functions

To create a new function, we must *declare* it like we would a variable. A **function expression** typically looks like this:

```javascript
var nameOfMyFunction = function(x) {
  // Body of the function 'nameOfMyFunction';
}
```

As you can see, the first line begins with `nameOfMyFunction`, followed by the word `function`, which is how we'd like to refer to that function later on.

Next, we write a list of the input values we'd like to use, enclosed in parentheses and separated by commas. These values are known as **parameters** of the function. Above, we only used one parameter, `x`.

Finally, we write the body of our function, enclosed by a pair of curly braces (`{}`).

We'll focus on using **function expressions** in this unit's lessons. Let's look at an example:

```javascript
var tripleIt = function(x) {
  return 3 * x;
}
```

This function takes one parameter — `x`. The body of the function consists of one statement that says to return the parameter of the function (`x`) multiplied by 3.

This is the first time we've seen a `return` statement — and its name is self-explanatory. `return` gives back the output of the function.

## Naming Functions

Function names should describe what the function does as best as possible; a general rule of thumb is to keep the name short and simple.

You may have noticed how we capitalize names in JavaScript using the **camelCase** style. Remember that identifiers *(how we name things)* can't include spaces.

To make it easier to read a name like `nameofmyfunction`, capitalize the first letter of each word after the first one (e.g., `nameOfMyFunction` — see the resemblance to a camel's humps?)

Here are some good (and bad) examples of function names:

- **bad**:  `thisfunctioncalculatestheperimeterofarectangle` (no camelCase, too verbose)
- **bad**:  `my new function` (contains spaces)
- **bad**:  `myNewFunction` (doesn't explain what the function does!)
- **good**: `calculatePerimeter` (describes what the function does, is short, and uses camelCase)


## Calling JavaScript Functions

Declaring a function does not execute the instructions we include in its body. By declaring, we've simply given the function a name and specified how it should work when it is given a set of parameters.

To actually *evaluate* a function, we have to **call** that function as follows:

```javascript
nameOfMyFunction();
```

In the case of `var tripleIt = function(x)`, if we wanted to call the function by passing the value 4, we would write:

```javascript
tripleIt(4)
```

> **NOTE**: In this case, the number `4` that's used when the function is called is known as an **argument**.

The function would execute its statements and evaluate to the value `12`.

Just like a variable, we can use the return value of this function in any expression. For example:

```javascript
var a = tripleIt(1);                         // a === 3
var b = 100 * tripleIt(4);                   // b === 1200
var c = 200 + (tripleIt(20) / tripleIt(10)); // c === 202
```
## Other Ways to Define Your Functions

Function expressions are only one way to define a function in JavaScript. There are actually several others. Another common method is a **function declaration**, which is a function that you can call later in your code. It typically looks like this:

```javascript
function nameOfMyFunction (x) {
  // Body of the function 'nameOfMyFunction';
}
```

Don't worry about this right now, however. We're focusing solely on function expressions!


### Test Yourself

Suppose we've defined the function 'glorp' as follows:

```javascript
var glorp = function(someNumber) {
  return someNumber * 5 - 3;
}
```

What will each of the following expressions evaluate to?

* glorp(10)
* 2 * (glorp(5) + 10)
* glorp(1 + 2)
* glorp(glorp(1))

Test your answers in JS Bin by copying the function definition into the editor, clicking the 'play' button, and typing each of these expressions into the console.

>**Note**  JavaScript follows the order of operations for mathematical expressions. When mathematical operations occur, certain operators will be evaluated first. Code inside of a `()` will execute first, then multiplication and division, followed by addition and subtraction. [Check out some further reading](https://www.mathsisfun.com/operation-order-pemdas.html).

---

## The Return Statement

As mentioned above, `return` specifies the value of the function when it's executed. It also has another important job - telling the function to immediately stop whatever it's doing.

Consider the following program:

```javascript
var doAThing = function(x) {
  if (x > 10) {
    return x + 10;
  }
  return x;
}
```

If `x` is greater than 10, the computer will run the `if` statement and hit that first `return` statement (`x + 10`).

This will *immediately end the function* - that second `return` statement won't be reached.

### Test Yourself

Where will the function stop if `x` is 5? 10? 20? What value will be returned in each case?

```javascript
var categorize = function(x) {
  if (x < 8) {
    return 8;
  }
  x += 3;
  if (x < 15) {
    return x;
  }
  return 100;
}
```

---

[Here's another exercise for you](04_exercise.md) - give it a shot.
