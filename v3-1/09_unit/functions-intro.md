**WDI Fundamentals Unit 9**

---

##### By the end of this unit, you'll be able to:
- Identify when to create a function 
- Use functions to break programs into smaller sub-programs 
- Create and call a function that accepts parameters to solve a problem
- Describe how parameters and arguments relate to functions
- Return a value from a function using the `return` keyword
- Describe the impact of hoisting on variable scope

---


# Functions

By now, you should be familiar with the concept of control flow, or how we  control the flow of a program by using conditional statements and loops. When practicing control flow, you notice how quickly a program can grow in length and complexity.

In this lesson we'll be taking a look at how we can use functions to group together statements that perform a specific task and reduce repetition in our programs.

<iframe src="//fast.wistia.net/embed/iframe/usuulfr9rs?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>

**Function** is a term that comes out of mathematics. You may remember hearing it in your high school algebra class.

The basic idea of a function is simple — it's a relationship between a set of inputs and a set of outputs.

Take a look at the relationship between variable `x` and function `f` in this example.

Function `f `takes the input `x` and spits out a single output ( `f(x)` ).

Can you guess what this function does to the value of `x`?

![](http://circuits-assets.generalassemb.ly/prod/asset/4416/Slide-5-Funnel-Chart.svg)

If you guessed "multiplies `x` by 2," you're right!

Functions play a similar role in programming. JavaScript Functions, like mathematical functions, take input values and return an output value.

Take a look at this short video that provides an overview of how functions are useful in our programs:

<iframe src="//fast.wistia.net/embed/iframe/qmhj5hv27i?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>

---

## Why are functions useful?

In JavaScript, a function can be:

1. Made up of either a single reusable statement or a group of reusable statements.
2. Called from anywhere in the program, which allows for the statements inside a function to not be written over and over again.

Functions are especially useful because they enable a developer to segment large, unwieldy applications into smaller, more manageable pieces.

## Function example

Here's an example of what a function can do. Let's take a look at a program that calculates the shipping charge for products on a website. 

If the order amount is over 30 dollars, the customer will receive free shipping. If the total order amount is under 30 dollars, there will be a 5 dollar shipping charge:


```js
var product = "Hanging Planter";
var orderAmount = 35;
console.log("Thank you for ordering the " + product + ".");
if (orderAmount >= 30) {
	console.log("It's your lucky day! There is no shipping charge for orders over $30.00.");
} else {
	console.log("There will be a $5.00 shipping charge for this order.");
}

var product = "Shell Mirror";
var orderAmount = 15;
console.log("Thank you for ordering the " + product + ".");
if (orderAmount >= 30) {
	console.log("It's your lucky day! There is no shipping charge for orders over $30.00.");
} else {
	console.log("There will be a $5.00 shipping charge for this order.");
}

var product = "Modern Shag Rug";
var orderAmount = 75;
console.log("Thank you for ordering the " + product + ".");
if (orderAmount >= 30) {
	console.log("It's your lucky day! There is no shipping charge for orders over $30.00.");
} else {
	console.log("There will be a $5.00 shipping charge for this order.");
}

```


This is all easy enough to write out, but considering that this website has thousands of products, this code is going to get pretty lengthy if we have to write it out for each product!

Let's try to keep our code from getting out of hand by using a function.


```js
var orderComplete = function (product, orderAmount) {
	console.log("Thank you for ordering the " + product + ".");
	if (orderAmount >= 30) {
		console.log("It's your lucky day! There is no shipping charge for orders over $30.00.");
	} else {
		console.log("There will be a $5.00 shipping charge for this order.");
	}
};

orderComplete("Hanging Planter", 35);
orderComplete("Shell Mirror", 15);
orderComplete("Modern Shag Rug", 75);

```


Notice how much cleaner and simpler this function looks than our repeated lines of code?

Now each time an order is completed, we simply have to write:

```js
orderComplete("productTitleHere", orderAmountHere);
```

and all lines of code in the `orderComplete` function will run.

## DRY - Don't repeat yourself
Functions are a critical component of programming because they allow us to execute on a key tenant of engineering:

"**D**on't **R**epeat **Y**ourself" (aka "DRY" code).

Our goal is to craft our programs in as few lines of code as possible, while still being clear.


#### Why should we avoid repetition?

1.  **Performance -** Having repeated code will lead to longer scripts. Longer scripts take up more memory and will take more time to load, which can make a website seem slow.

2.  **Maintainability -** Imagine that we have the same line of code repeated 10 times in our program. If we ever want to change that functionality, we would have to search for all 10 places where that code is repeated and make 10 individual changes.



## Summary
Let's review the three main reasons that functions are created:

![](http://circuits-assets.generalassemb.ly/prod/asset/5016/Slide-17-Chart.svg)


[Let's get started.](defining-calling-functions.md)
