**WDI Fundamentals Unit 9**

---

# Defining and Calling Functions

Now we know what functions are and why we use them. But how do we create them?

Just as we do with a variable, we must define a function before we call or "use" it.

## Defining Functions

The syntax for defining a function looks like this:

![](http://circuits-assets.generalassemb.ly/prod/asset/4421/Slide-19.svg)

Let's take a look at an example:

Have you ever tried to move forward to the next page of an online form, only to be greeted by an alert that says "Please fill out all the required fields"?

This kind of code can be placed in a function and this function can be called anytime the user hasn't filled out a field on any form on the site. Let's code for this pop-up alert using a function expression:


```js
var errorAlert = function () {
	alert("Please be sure to fill out all required fields.");
};
```


Let's take a look at the function in more detail:

  1. The first line begins by declaring a variable called `errorAlert`. This is the name that we can then use to call that function.
  2. This is followed by the word `function`, which is a keyword we use to let JS know that we are creating a function.
  3. Next, you have a list of parameters surrounded by parentheses. Even though the parameters that can go within the parentheses are optional, the parentheses themselves are _always_ required.
  4. The statements inside the function will run every time the function is called. The function body must always be wrapped in curly braces `{ }`, even when it consists of only a single statement.

#### Naming Conventions
Now that we've learned how to define a function, let's discuss naming conventions.

You may have noticed how we capitalize names in JavaScript using the camelCase style.

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4427/Slide-25-Camel.svg" width="250px">

A good function name uses proper formatting and is short and succinct, but still descriptive.

Let's take a quick look at some good and bad examples of function names, and what can cause them to break down:

*   **Bad:** `thisfunctioncalculatestheperimeterofarectangle`  
    (no camelCase, too verbose)

*   **Bad:** `my new function`  
    (contains spaces)

*   **Bad:** `myNewFunction`  
    (doesn't explain what it does!)

*   **Good:** `calculateArea`  
    (describes what it does, short, and uses camelCase)

## Calling functions
To run the code in a function, we **call**, or invoke, the function by using the function name followed by parentheses.

```js
nameOfFunction();
```

Here's what this would look like in action for our `errorAlert` function:

```js
// First we define the function
var errorAlert = function () {
	alert("Please be sure to fill out all required fields.");
};

// Then we can call the function to run all lines of code inside the function.
errorAlert();

```

The code in a function will not run when the function is defined. The code will only run when the function is _called_.

#### Order 

One important note is that we'll want to be sure to define our functions _before_ we call them. The function is not processed until the interpreter gets to that statement. We have to wait for the interpreter to reach that line, otherwise we will get an error:


```js
sayHello();

var sayHello = function () {
	console.log('Hey!');
};
```

Here we are calling the function before the function is defined. Which means we will get an error.

This is because the interpreter hasn't reached that line yet and doesn't know that `var sayHello = function () { ... };` exists. 

We could fix this code by moving the line where we call the function to after the function definition:

```js
var sayHello = function () {
	console.log('Hey!');
};

sayHello();  // Much better!
```



### Test Yourself
Alright! Now it's time for you to test yourself.

Refresh the page if you don't see the JS Bin Console below.

<a class="jsbin-embed" href="http://jsbin.com/qozaziqodu/edit?js,console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.40.3"></script>

1. In the "JavaScript" panel in JS Bin, define a function `baseballVendor`.
2. Inside the function, log `"Hot dogs! Get your hot dogs!"` to the console. 

	> Hint: add `console.log("Hot dogs! Get your hot dogs!");` inside the function.
3.  Call the `baseballVendor` function.

	> Hint: make sure you use parentheses after the function name.
4.  Hit the "Run" button in the "Console" panel and you should see `"Hot dogs! Get your hot dogs!"` displayed in the "Console" panel.


<br>

>Answer:
>
>```js
>var baseballVendor = function () {
>  console.log("Hot dogs! Get your hot dogs!");
>};
>
> baseballVendor();
>```

Great job!

---

[Here's another exercise for you](defining-calling-functions-exercise.md) - give it a shot.
