**WDI Fundamentals Unit 8**

---

# Expressions with Variables

One major calculator function we haven't mentioned yet is **memory**. Many calculators have buttons that can be used to store the results of calculations for later use. JavaScript's answer to this is **variables**.

Suppose we wanted to save the result of our expression, `(99 * 746) - (837 * 23)`, and then multiply the whole thing by `2`. We could store our first result in a variable, `x`, using `=` (the "assignment" operator) as follows:

`var x = (99 * 746) - (837 * 23);`

> **HINT**  The <b>keyword</b> `var` stands for `variable` and is used to *declare* a variable the first time we use it. A variable *can* be declared without using the keyword `var`, but this has major implications as to where that variable is stored and what code can access it. You'll learn more about this when you cover the concept of <b>scope</b>. For now, always declare your variables using `var`.

> **HINT** As mentioned above, `=` is called the <b>assignment operator</b>. An interesting fact to note is that it actually returns a value after it's finished with its "assignment" work. In particular, the `=` operator evaluates to whatever the expression to the right of the `=` evaluates to. In other words, the expression `x = 2;` returns `2`.

When we want to then use this result, we simply substitute `x` for wherever our original expression might have gone. For instance, we could write `x * 2;` and this expression would evaluate to double the value stored in `x`.

Like before, to figure out how to evaluate an expression containing variables, we simply draw a tree. The only difference is that `x` (or any other variable we might be using) evaluates to the value it is storing at the time.

### Test Yourself
Assume that `x` is equal to 10. What values do the following expressions evaluate to? Save `x` as a variable in the JS Bin console, and check your answers.

* `x + 20;`
* `x * x;`
* `3 * (x * x) - 2 * x + 5;`

We can redefine our variable `x` as many times as we want. However, ***only the most recent value of `x` is retained*** Once `x` is redefined, its original value is lost forever.

Consider the following JavaScript code in a JS Bin console.

```javascript
var x = 1;
x
// => 1
x = 2 + x;
// => 3
x
// => 3
```

On the first line, we are _assigning_ the variable `x` as equal to the integer `1`. Then, on the next line, we are _reassigning_ the variable `x` and setting it as equal to the following: `2` plus the most recent value of x (in this case, `1`). `x` would now be equal to the integer `3`.  

>**Caution**  Beginners often confuse the assignment operator (`=`) and the equality operators (`==`, `===`). Remember, if you want to compare two values, you use a double equal or triple equal sign. Using a single equal sign, as described above, does not compare values; instead, a single equal sign assigns a value to a variable. See below:
>```javascript
> x
> // => 3
> x == 4;
> // => false
> x = 4;
> // => 4
> x == 4;
> // => true
> ```


Suppose we ran the following lines of code in order, one by one.

```javascript
var x = 10;
x = 1;
x = 5;
x = 15;
2 * x;
```
What does that last expression evaluate to? Or, put differently, what is the most recent value of `x` (as of that line) multiplied by `2`? If you guessed 30, you're correct!



Sometimes, we find variables on both sides of the `=`. Suppose we have two variables, `x` and `y`, like the example below:

```javascript
var x = 5;
var y = 10;
x = y + 10;
```

What happens in that third line? For starters, everything to the right of the `=` must be evaluated before any kind of assignment can happen. `y + 10;` evaluates to 20, so what we're left with is the expression `x = 20;`. This assigns the value 20 to `x`, and the entire expression evaluates to 20.

Let's look at one more example using the same two variables, `x` and `y`.

```javascript
var x = 1;
var y = 10;
x = y * 2;
y = x + 1;
x = y + 1;
y = 2 * x;
```

Feeling dizzy? Don't worry, we'll step through this one together.

  __Line 1__: We declare a new variable `x` and assign it the value `1`.

  __Line 2__: We declare another new variable `y` and assign it the value `10`.

  __Line 3__: As of this point in the code, `y` has a value of 10. We multiply that by `2`, resulting in 20. We assign that resulting value to `x`.

  __Line 4__: `x` now has a value of 20, so `y` gets assigned a new value of 21 (`20 + 1`).

  __Line 5__: `y` was just changed to 21, so `x` becomes 22 (`21 + 1`).

  __Line 6__: `x` is now 22, so `y` becomes `2 * 22`, or 44.

One important thing to mention here is that **at no point is any lasting relationship established between x and y** (unlike math equations). We are simply evaluating the expression on the right and assigning the result to the variable on the left.

### Test Yourself
Give these a try – see if you can predict the final values of `x`, `y`, and `z`. Check your answers in JS Bin by copying the entire chunk of code into the editor window, running it, and then checking `x`,`y`, and `z` in the JS Bin Console.

##### Challenge \#1

```javascript
var x = 1;
var y = 2;
var z = 3;
x = y;
y = z;
z = x;
```

##### Challenge \#2

```javascript
var x = 1;
var y = 0;
var z = -1;
x = y + z;
y = z * x;
z = x - y;
x = y * y;
y = z * z;
z = z - 1;
```

Whoa! That last one's pretty weird - how can z be on both sides of the `=`? What do you think happens there?

The key is remembering how the `=` operator works. Before it assigns anything to the variable on the left, *it first evaluates the expression on the right*. This means that, if we have any expression like `x = x + 1;`, what we are doing is taking the old value of `x`, adding 1 to it, and storing this new result back in `x`. In short, we are "incrementing" x: increasing its value by 1, no matter its original value.

### A Few Shortcuts

The need to operate "in place" (in other words, storing the result back inside the original variable) is quite common in programming - so common that most languages include shorthand syntax for these kind of operations. Some examples are shown below:

| Longhand Syntax | Shorthand Syntax |
|------------------|-------------------|
| `x = x + 1;`      | `x += 1;` |
| `x = x - 5;`      | `x -= 5;` |
| `x = x * 2;`      | `x *= 2;` |
| `x = x / 10;`     | `x /= 10;` |
| `x = x % 10;`     | `x %= 10;` |
| `x = x + 1;`      | `x++;` |

---



[Your turn!](07_exercise.md)
