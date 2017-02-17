**WDI Fundamentals Unit 8**

---

# Loops

**Collections** are groups of values. An example of a collection is an array. One of the most useful things about collections (and arrays in particular) is that if we structure our code correctly, we can repeat the same operation on each value within a collection.

This process of doing something over and over and over again in a loop, for each element in a set, is called **iteration**.

To tell your program to repeat something, you use a tool called a **loop**. Loops work just like you might imagine: Once your program has finished running a block of code, it 'loops' back to the beginning and starts again.

Remember our `if` statement from the conditionals lesson? Let's loop it back on itself.

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4819/Slide-14-Flow-Chart.svg" width="300px">

All we have to do is make one small (but very important) change: instead of advancing to the next bit of code after executing the block, we loop back to our condition.

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4820/Slide-6-Flow-Chart.svg" width="300px">

## The While Loop

Now, we have a loop that &mdash; so long as our condition remains `true` (or at least truthy) &mdash; will continue to run that block of code over and over again until the condition becomes false.

This type of loop is called a **while loop**, and it can be found in nearly every programming language.

The general rule for writing a **while loop** in JavaScript is:

```js
while (someConditionIsTrue) {
  //A block of code.
}

```

As you can see, it's written in almost exactly the same way as an `if` statement.


Let's look at an example. If `x = 10` and we're subtracting 2 each time we go through the loop, how many times will this loop run?


```js
var x = 10;
while (x > 5) {
  x -= 2;
}
```

If you guessed 3 times, you're right! The final value of `x` will be 4. Remember, you can use `console.log(x)` to find this answer in the console.


Let's look at another example. How many times will this loop run?

```js
var x = 10;
var y = 1;
while (x < 20) {
  y += 1;
}
```

The loop would run **indefinitely**. Since `x` is defined as 10 and `x` is less than 20, the computer will run it forever because it is always true (_and it will most likely cause your computer to freeze!_).


When using a `while` loop, it's **very important** to plan out beforehand how you will 'escape' the loop by making your condition evaluate to false.


### Test Yourself

* Consider the following code:
	
	```javascript
	var totalLaps = 0;
	
	while (totalLaps < 10) {
	  console.log('Swim Another lap!');
	  totalLaps += 1;
	}
	```

* How many times will this loop run? 
* How many times will `'Swim another lap!'` be logged to the console?
* What will the final value of `totalLaps` be when the `while` loop is finished?

Confirm your answers by entering the code above in a new JS Bin session.

You may need to refresh the page if you cannot see the JS Bin Console.

<a class="jsbin-embed" href="https://jsbin.com/qiqufo/1/embed?console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.35.12"></script>

---
#### For Loop

Next let's take a look at the `for` loop.

`for` loops are very useful when we want to use a loop to do something with each item in an array. Watch this short video to find out what that would look like.

<iframe src="//fast.wistia.net/embed/iframe/gguspr8ong?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>


Despite being one of the most basic ways to iterate through an array in JavaScript (and many other languages), the `for` loop is also one of the most versatile ones!

Let's make a few modifications to our `while` loop from earlier. As you can see, there are a couple of key ingredients to making our `for` loop work.


<img src="http://circuits-assets.generalassemb.ly/prod/asset/4365/Slide-27-Flow-Chart.svg" width="350px">



Let's break down what we'll need:

1. An 'initialization', which sets up a starting situation (e.g. `var i = 0`)
2. A condition, which gets evaluated each time we're about to execute the block (e.g. `i < 10`)
3. A 'finalExpression', which gets evaluated immediately after the block executes _but before the condition is evaluated again_ (e.g. `i += 1`)


The general syntax for a `for` loop is:

```js
for (initialization; condition; finalExpression) {
  // A block of code.
}

```

For example:

```js
for (var i = 0; i < 5; i += 1) {
  // do something 5 times.
}
```

### Test Yourself

Look at the code below:

```js
var x = 10;

for (var i = 0; i < x; i += 1) {
  console.log('HELLO');
}
```

1. How many times will `HELLO` be printed out in the console?

3. What if we changed the starting value of i to 1 instead of 0? How many times would `HELLO` get printed to the console then?
5. What would happen if we changed the condition from `i < x` to `i <= x?`   
7. What would happen if we changed the final condition from `i += 1` to `i += 2`?

Confirm your answers by entering the code above in a new JS Bin session and testing out each scenario.

You may need to refresh the page if you cannot see the JS Bin Console.

<a class="jsbin-embed" href="https://jsbin.com/qiqufo/1/embed?console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.35.12"></script>

> *Answers: (1. `HELLO ` will be printed out 10 times.  2. `HELLO ` will be printed out 9 times. 3. * `HELLO ` will be printed out 11 times. 4. `HELLO ` will be printed out 5 times.)*

---
#### For Loop vs. While Loop
Let's take a step back and recap what we have learned. What is the difference between `for` loops and `while` loops?

The `while` loop is usually used when you need to repeat something until a given condition is true:

```js
ovenTemperature = 0;

while (ovenTemperature < 350) {
  console.log('Keep preheating the oven.');
  ovenTemperature += 5;
}
```

On the other hand, the `for` loop is usually used when you need to iterate a given number of times:

```js
for (var i = 0; i < 10; i += 1) {
  // Do ten push-ups
  console.log('Do another push-up!');
}
```

You can learn more about the differences between `for` and `while` loops [here](http://programmers.stackexchange.com/questions/244393/what-are-the-differences-between-a-while-loop-and-a-for-loop).


#### Iterating over an array

For loops are particularly useful because we can use them to do something for each item in an array.

Take a look at the following program which greets each student:

```js
var students = ["Mark", "Melissa", "Noopur", "Olga", "Vivek"];

// Loop over the array of students
for (var i = 0; i < students.length; i += 1) {
	// Greet each student by name
	console.log("Hello " + students[i]);
}
```

Try copying/pasting the above code into the JS Bin Console below.

You may need to refresh the page if you cannot see the JS Bin Console.

<a class="jsbin-embed" href="https://jsbin.com/qiqufo/1/embed?console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.35.12"></script>

---

Feeling good about loops? [Let's do another exercise.](loops-exercise.md)
