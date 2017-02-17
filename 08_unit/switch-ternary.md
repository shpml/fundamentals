**WDI Fundamentals Unit 8**

---

# Switch And Ternary Operators

## Switch Statements

Now that you're feeling more comfortable with `if...else` statements, let's take a look at another way we can add logic to our programs: **switch statements**. We've seen how a person can check numerous conditions by simply tacking on **else if statements**.

Before we dig into switch statements, watch this short [video](https://generalassembly.wistia.com/medias/sew8suaz5l) providing an overview of how they can help us keep our programs simple and readable.

<iframe src="//fast.wistia.net/embed/iframe/sew8suaz5l?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

Let's quickly review the structure of an `if...else` block:

```js
if (x > 10) {
	x += 10;
	y += 10;
} else if (x > 5) {
	x += 5;
} else if (x > 3) {
	x += 3;
}
```

Here's a refresher of what the flowchart for this action would look like: ![](http://circuits-assets.generalassemb.ly/prod/asset/4408/Slide-4-Flow-Chart.svg)

However, if we have a lot of conditions, the code becomes repetitive and hard to read.

For example:

```js
// day of the week in a number, Sunday is 0, Saturday is 6
var dayNumber = 1;

if(dayNumber === 0){
	day = 'Sunday';
} else if(dayNumber === 1) {
	day = 'Monday';
} else if(dayNumber === 2) {
	day = 'Tuesday';
} else if(dayNumber === 3) {
	day = 'Wednesday';
} else if(dayNumber === 4) {
	day = 'Thursday';
} else if(dayNumber === 5) {
	day = 'Friday';
} else if(dayNumber === 6) {
	day = 'Saturday';
} else {
	day = null;
	alert('wrong value for day');
}
```


This code is not easy to read, and a lot of it is repeated. For one, `} else if(dayNumber === __ ) {` is repeated seven times. What's more, if we ever want to change the name of our `dayNumber` variable, we'll need to swap it out every place it appears.

Enter the `switch statement`. A **switch statement** is used to perform different actions based on different conditions. It is a replacement for `if...else` statements when our code gets long and nested. Take a look at how the previous example would be written as a switch statement:


```js
var dayNumber = 1;
switch (dayNumber) {
case 0:
  day = 'Sunday';
  break;
case 1:
  day = 'Monday';
  break;
case 2:
  day = 'Tuesday';
  break;
case 3:
  day = 'Wednesday';
  break;
case 4:
  day = 'Thursday';
  break;
case 5:
  day = 'Friday';
  break;
case 6:
  day = 'Saturday';
  break;
default:
  day = null;
  alert('wrong value for day');
}
```

This code works exactly the same as our `if...else` statement, and, even though it contains more lines, it's significantly easier to read.

In a switch statement,

1. The variable in parentheses (in this case, `dayNumber`) is evaluated
2. If there is a `case` listed for the value it evaluates to, the code between `case __:` and `break` will be executed.
3. If there is no `case` that matches the value of the variable, the `default` will be executed (if it is specified, that is — if not, the program will do nothing).
4. If there is no `break;` at the end of a case, the computer will not skip to the end. Instead, it will start executing the next case's code (_even if the case's value is different than the variable's_), and will continue doing so until it eventually hits a `break;` statement.
5. For this reason, default never needs a `break;` statement, as it's the last case in the switch. Include breaks on all other statements to make sure the program breaks out of the switch statement once it executes the matched statement.  


#### Advantages and Disadvantages of Switch Statements
The main advantages of switch statements are the **increase in readability** and the **decrease in repetition**, both of which make your code more maintainable.

Although the switch statement has some advantages over `if...else`, it also has some major disadvantages. For instance, a switch statement will only work if you are testing the same variable (or expression) in every condition; if not, the `if...else` is your only option.

Also, depending on the circumstances, using `if...else` might scan more naturally. 

As a rule, use switch statements when both of the following conditions apply: 

1. You are working with only one variable.
2. You have three or more conditions to check.


### Test Yourself
We want to build a program where cashiers can look up an item's price by providing the name of the grocery item.

Consider the following `switch` statement:
 
```js
var groceryItem = "orange";
var price;

switch (groceryItem) {
 case "pear":
    price = "The price is $1.00";
    break;
 case "apple":
    price = "The price is $.65";
    break;
 case "orange":
    price = "The price is $.80";
    break;
 case "avocado":
    price = "The price is $1.50";
    break;
 case "grapes":
 	price = "Sorry, we are out of grapes";
 	break;
 default:
    price = "Item cannot be found in system";
}

price;
// => "The price is $.80"

```

What value will be assigned to `price` when `groceryItem` is...

* `"pear"`?
* `"apple"`?
* `"orange"`?
* `"avocado"`?
* `"grapes"`?

Check your answers by copying that whole statement into JS Bin and replacing the value for `var groceryItem = "orange"` each time with one of the values listed above.

You may need to refresh the page if you cannot see the JS Bin Console.

<a class="jsbin-embed" href="https://jsbin.com/qiqufo/1/embed?console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.35.12"></script>

## Ternary Operators

Great job! Now that we've had a chance to gain some experience with switch statements, let's move on. Another shortcut for a simple JavaScript `if...else` statement is the **ternary statement**. A ternary statement is a one-line shorthand for an `if...else` statement. Similar to an `if...else` statement, it evaluates a condition and then returns one of two results based on whether the condition is true or false. Take a look at the following `if...else` statement:

```js
var coffeeIsHot = false;
var isCoffeeReady;

if (coffeeIsHot === true) {
  isCoffeeReady = "Drink your hot coffee!";
} else {
  isCoffeeReady = "Time to brew a new batch.";
}

isCoffeeReady;
// => "Time to brew a new batch."
```

This code could be shortened to a single line using a ternary statement.  

```js
var coffeeIsHot = false;

var isCoffeeReady = coffeeIsHot === true ? "Drink your hot coffee!" : "Time to brew a new batch.";

isCoffeeReady;
// => "Time to brew a new batch."
```

The syntax for a ternary statement looks like this:

`condition ? resultIfTrue : resultIfFalse;`

Let's break it down:

0. The `if` condition from before will be used as the condition here. Again, a condition is a statement that evaluates to true or false.  
	- So, in this example, the condition would be `coffeeIsHot === true`. 
0. The condition is then followed by a question mark (`?`). 
0. `resultIfTrue ` and `resultIfFalse ` are our possible outcomes. If the condition is true, the operator will return the value of `resultIfTrue`, otherwise it will return the value of `resultIfFalse`.
0. `resultIfTrue` and `resultIfFalse` are separated by a colon `:`.

Think of the `?` like asking a question of the conditional. It may be helpful to say to yourself, "`coffeeIsHot === true ?`" with inflection like you're asking a question of it. If yes (or truthy), then do the first option, otherwise do the latter.

Here's a second example:

```js
var temperature = 55;
var typeOfExercise;

if (temperature >= 45) {
  typeOfExercise = "Go for a run outside.";
} else {
  typeOfExercise = "Go to the gym.";
}

typeOfExercise;
// => "Go for a run outside."
```

This could be shortened to the following:

```js
var temperature = 55;

var typeOfExercise = temperature >= 45 ? "Go for a run outside." : "Go to the gym.";

typeOfExercise;
// => "Go for a run outside."
```

Although having clean and succinct code is useful, readability is also important. Sometimes ternary statements can be harder to scan and understand than a simple `if...else` statement. So, if you're ever in doubt, remember to _choose readability over less code_. Let's give it a try! Take this `if...else` statement, and turn it into a ternary statement:

### Test Yourself

Take a look at the following `if` statement:

```js
var movieCategory = "scary";
var isMovieKidFriendly;

if (movieCategory === "scary" || movieCategory === "violent") {
	isMovieKidFriendly = "Pick a different movie.";
} else {
	isMovieKidFriendly = "Movie is kid-friendly.";
}

isMovieKidFriendly;
// => "Pick a different movie."
```

Try writing this code out as a ternary statement in the JS Bin Console.


You may need to refresh the page if you cannot see the JS Bin Console.


<a class="jsbin-embed" href="https://jsbin.com/qiqufo/1/embed?console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.35.12"></script>

Answer:

```js
var movieCategory = "scary";

var isMovieKidFriendly = movieCategory === "scary" || movieCategory === "violent" ? "Pick a different movie." : "Movie is kid-friendly.";

isMovieKidFriendly;
// => "Pick a different movie."
```

What will the value of `isMovieKidFriendly` be under the following circumstances? Test out each scenario in the JS Bin console by replacing the value `"scary"` in the answer above to check your answers. 

1.  `var movieCategory = "animated";`
2.  `var movieCategory = "violent";`
3.  `var movieCategory = "drama";`


## Conclusion

In this lesson we looked at how we can keep our code readable and concise by using switch statements and ternary operators.

You'll probably need to refresh yourself on the exact syntax a few times before you memorize it, but it's important to be able to remember these core "control flow" concepts in general, as they'll come up in pretty much every programming language you'll ever encounter.

Often, developers will write code to get things up and running first and then look back over the code to see how it could be streamlined. Switch statements and ternary operators are excellent tools for doing just that!

---

Think you've got it? [Try your hand at this exercise.](switch-ternary-exercise.md)
