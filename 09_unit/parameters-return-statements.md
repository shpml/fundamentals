**WDI Fundamentals Unit 9**

---

# Parameters and Return Statements

Now that we know how to call functions, let's see how we can add more details to our functions through parameters and arguments.

### Why are parameters useful?

Let's imagine that we are tasked with creating a program to calculate the total amount, including sales tax, for each item at a coffee shop. 

Take a look at this function that will calculate the total amount for a latte:

```js
var latteTotal = function () {
  var price = 4.50;
  var salesTaxRate = .10;
  var totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
};

latteTotal();
```

What would we do if we also wanted to find the the total amount for Americanos?

We could create another function for that total:

```js
var americanoTotal = function () {
  var price = 5.00;
  var salesTaxRate = .10;
  var totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
};

americanoTotal();
```

What if we wanted to find the total for every item in the coffee shop, including drinks and baked goods?

We don't want to have to create a separate function for each item — that's a lot of work on our end.

It will also burden our program with repeated code, which we want to avoid.

Remember, keep it DRY! (Don't Repeat Yourself).

Wouldn't it be nice if we had some way to provide the total amount function with the information it needs to calculate the total, including sales tax, for any product?

In this lesson, we'll take a look at how we can do just that using **parameters**.


### Syntax - Parameters and Arguments
**Parameters** are the names listed in the function definition.

Let's take a look at how we can provide our function with a price for each item so we won't need to create a separate function every time we want to calculate the total amount for a product. 

We will also provide our function with the sales tax rate each time since the coffee shop has locations in different states.

Let's take a look:

```js
var calculateTotal = function (price, salesTaxRate) {
  var totalAmount = price + (price * salesTaxRate);
  console.log("The total is $" + totalAmount);
};

calculateTotal(5.5, .10);
calculateTotal(4.75, .12);
```

Let's break this down:

1. Notice that the parentheses after the word `function` are no longer empty! Here we have the words `price` and `salesTaxRate`. These are the **parameters**. Notice that our parameters are in a comma-separated list. Here we are telling our function that we are going to provide it with a `price` and a `salesTaxRate`.
	- There is nothing special about the words `price` and `salesTaxRate`. We are just using descriptive names in order to remember what information we are providing our function.
2. When we call the function, we provide it with the values for `price` and `salesTaxRate` like so: `calculateTotal(4.75, .10);`. These are called **arguments**. Each one of these arguments corresponds to a parameter in the function definition.
	- Order is important here. In the first example where the function is called above, the first argument that is provided, `5.5`, will correspond with the first parameter we provided for the function, `price`. The second argument, `.10`, will correspond with the second parameter, `salesTaxRate`. For the second example, what does `4.75` correspond to? `.12`?

To write functions with more than one parameter, use a comma separated list:

e.g., (parameter1, parameter2, parameter3, parameter4, etc.)

Here is an example of a function with four parameters:

```js
var greetUser = function(firstName, lastName, year, city) {
  console.log("Hello " + firstName + " " + lastName + " born in "+ year + " from " + city + "!" );
};
```

What would happen if we called the function with the following arguments?

```js
greetUser("Bruce", "Wayne", 1939, "Gotham");
```
We would get this result:

```js
// => "Hello Bruce Wayne born in 1939 from Gotham!"
```

What would happen if we called the function with the same arguments in a different order?

```js
greetUser("Bruce", 1939, "Gotham", "Wayne");
```

We would get this result:

```js
// => "Hello Bruce 1939 born in Gotham from Wayne!"
```

Take a look at this chart summarizing parameters and arguments:

![](http://circuits-assets.generalassemb.ly/prod/asset/5017/Slide-16-Chart.svg)

#### Test Yourself

Alright! Now it's time for you to test yourself.

Refresh the page if you don't see the JS Bin Console below.

<a class="jsbin-embed" href="http://jsbin.com/qozaziqodu/edit?js,console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.40.3"></script>

1. In the "JavaScript" panel in JS Bin, define a function `makeCone`.
2. It should accept two parameters, `flavor` and `numberScoops`.
2. The function should take the parameters and log the following to the console: `"Coming right up! One {flavor} ice cream cone with {numberScoops} scoops."`

	> Hint: You'll want to use string concatenation (`+`) to combine the variables with the human-readable text when logging the message to the console. 
3.  Now, call that function, passing in `"chocolate"` and `3` as the arguments.
4.  Hit the "Run" button in the "Console" panel and you should see `"Coming right up! One chocolate ice cream cone with 3 scoops."` displayed in the "Console" panel.

<br>

> Answer:
> 
> ```js
> var makeCone = function (flavor, numberScoops) {
>  console.log("Coming right up! One " + flavor + " ice cream cone with " + numberScoops + " scoops.");
>};
>
>makeCone("chocolate", 3);
>```
> 

Great job!

## Return Statements
We now know how to communicate with functions in one direction, by passing values to functions using parameters and arguments.

But, functions can also communicate back to you and return values.

#### Why use return statements?

Sometimes we don't necessarily want to show or log something immediately to the console, or update something on the page.

Instead, we might just want to update a variable within a function, or even call another function without showing its effects.

To do this, we use a `return` statement.

Let's look at an example of updating a variable within a function:

```js
// Here this function "spits out" the sum of the parameters x and y
var sum = function (x, y) {
  return x + y;
};

// We then save that sum to the variable totalSum.
var totalSum = sum(3, 4);
// => 7
// The variable totalSum will now hold the value 7.
```


#### Storing a return value in a variable

The `return` statement _stops the execution of a function_ and returns a value from that function.

When we `return` something, it ends the function's execution and "spits out" whatever we are returning.

We can then store this returned value in another variable.

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

1. Because the score in this case is greater than 50, we will hit the return statement `return score + (score * .10);` and the function will stop running after that point.
2. This means that the code inside the function block that is below the `return` statement will never be executed and will be ignored completely.

Pretty powerful, right?

#### Exiting a function

We can also use `return;` by itself as a way to exit the function and prevent any code after it from running.

Take a look at this example:

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

Here, we use `return;` as a way to exit the function instead of returning any value.

So when we call the function passing in `true` as an argument for `muted`, this statement will never run:

```js
console.log("Now playing: " + song + " by " + artist);
```


### Test Yourself

Alright! Now it's time for you to test yourself.

Refresh the page if you don't see the JS Bin Console below.

<a class="jsbin-embed" href="http://jsbin.com/koraxan/edit?js,console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.40.3"></script>

Take a look at the function provided in the JS Bin session above.

Where will the function stop if we provide the following values for `number` when we call the function? What value will be returned in each case?

- 5
- 10
- 20

Check yourself by calling the function three times in the "Console" panel in JS Bin (the right panel), passing in each number above as the argument for `number`.
 
> Hint: To call the function, use the following syntax: `functionName(argument)`.



---

[Here's another exercise for you](parameters-return-statements-exercise.md) - give it a shot.
