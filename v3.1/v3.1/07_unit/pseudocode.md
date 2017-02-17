**WDI Fundamentals Unit 7**

---

# Pseudocode

Now let's take a look at how thinking programmatically helps you tell a computer exactly what to do. 

For example, if you asked people to identify the shortest character in the _Lord of the Rings_ series by looking at the lineup below, they would simply compare the characters' heights and pick the little Hobbit on the right, Frodo.

<img src="http://circuits-assets.generalassemb.ly/prod/asset/4279/Slide-24-LOTR-Characters.svg" width="400px">

Computers work a little differently — they break things down into more specific steps.

So how might you instruct a computer to pick the shortest character from _Lord of the Rings?

Your first step might be:

1. "Find the height of character A."

> What might the next step be?

Here are some possible instructions you could give a computer to complete this task:

1. Find the height of character A.
2. Find the height of character B.
3. Compare height of character A to character B.
4. Choose the character with shorter height.
5. Find the height of character C.
6. Compare the height of character C to answer from Step 4.
7. Choose the character with the shorter height.
8. Repeat steps 5-7 for all remaining characters.
9. Label the last character who is determined to be shorter "shortest."

As you can see, it takes a computer many more steps to do what humans do intuitively, but it gets there eventually.

As we begin to write our JavaScript code, we need to continuously think like a programmer so we can make fewer mistakes and identify errors before they become a problem.

One way to do this is through the use of **pseudocode**.

## What is Pseudocode?

What is pseudocode?

- Pseudocode is a technique that lets you write out your program in simple, step-by-step instructions using plain English rather than a programming language.

- There are no special commands, so if there are errors or omissions, they're easier to identify.

- It allows you to break down a program into simple steps, like a computer would, without getting caught up or distracted by syntax.

#### What does that mean?

The goal when using pseudocode is to think through the problem and break it down into simple steps, which can then be written out in code.

As there are no formal rules for writing pseudocode, each programmer's version will vary slightly.

When writing pseudocode, organize thoughts into ideas that relate to one another.

## Writing Pseudocode

Let's take a look at the pseudocode for a program that lets a player know whether or not he or she has passed the current level in a game:

```js
// Passing score = 150 points
// Get the player's score

// If the player's score is greater than or equal to the passing score
	// Display message "Current level: Passed"
// Otherwise
	// Display message "Current level: Failed"
```

#### Comments in JavaScript

You'll notice in the example above that each line starts with `//`.

There may be times when we'll want to write "notes," or **comments**, in our code. 

Comments tell a computer to completely ignore that line (or lines) in the JavaScript file so that they will not be interpreted.

Putting `//` at the beginning of the line when writing pseudocode allows the pseudocode to be in the same location as the actual code but ignored during processing of the source code.

There are two kinds of comments in Javascript: 

1. **multi-line** comments (`/* comment */`), which can run across multiple lines

	```javascript
	/* 
	Here is a multi-line comment.
	This is for longer comments or notes.
	 */
	```
2. **single-line** comments (`// comment`), which only comment out everything following it on the current line.

	```javascript
	// Here is a single line comment
	```


## What Role Does Pseudocode Play in Development?

Pseudocode is helpful during the initial design or planning stages, especially when you are working with a team.

It helps you break problems apart before you begin worrying about the syntax. It also gives you a step-by-step process to follow for solving the problem at hand. This is helpful to both your teammates AND you-in-the-future when you revisit your code!

It allows you to clearly explain concepts and lines of code, even when speaking with non-developers.

It's also easier to identify problems early on if you use pseudocode as your first step.

Even professional developers use pseudocode. As tempting as it may be to jump right into a problem and start writing code, you'll find that taking a few minutes to plan will save you valuable time in the future.

You'll often find that during the planning process, you or your team member will come up with additional functions or design changes. Starting with pseudocode allows you to incorporate these new ideas without having to rewrite a lot of code.


## Examples of Pseudo Code

#### Example 1
Let's take a look at another example of pseudocode using a Lord of the Rings example.

Suppose you were given the following assignment:

> Create a button. Every time users click on the button, the Ring of Power gets put on Frodo's finger, which makes Frodo disappear. If users click on the button again, the Ring of Power gets taken off of Frodo's finger, and Frodo reappears.

Your pseudocode for the assignment might look like this:

```js
// When the button is clicked
   // If ring is not on Frodo's finger
		// Put ring on Frodo.
		// Make Frodo disappear.

	// If ring is on Frodo's finger
		// Take ring off of Frodo.
		// Make Frodo appear.
```

As you can see, you do not need to know any JavaScript in order to write pseudocode. You can write out the steps in plain language that makes the most sense to you.

#### Example 2

Let's take a look at another example. Suppose you were given the following assignment:

> Create a website with a pop-up survey that appears when the homepage loads. The user must check off the box "I love Lord of the Rings!" and click "Submit" in order to move on to the next page.

How would you write the pseudocode for this assignment?

Take out a piece of paper, and write down your own pseudocode. Continue reading this lesson when you are done.

> Your pseudocode for the assignment might look like this:

 ```js
 // When user enters website
    // Pop up survey.
// When user clicks the check box
    // Highlight SUBMIT button.
// When user clicks SUBMIT
    // IF the check box has been clicked, close the survey.
    // otherwise, prompt them to answer the survey
```

Your pseudocode may have looked different, but that's totally fine as long as you covered all the steps required for the computer to understand the task.

JavaScript is a language with a different syntax than other languages you may have previously used to code. This means there is a lot of room for error, so utilizing pseudocode can be especially helpful when it's your first time coding in JS.

#### Example 3

Let's take a look at one final example. Suppose you were given the following assignment:

> Create a program that lets a player know whether or not he or she has passed the current level in a game. In order to pass the level, the player must have a score of 150 or higher.

How would you write the pseudocode for this assignment?

Take out a piece of paper, and write down your own pseudocode. Continue reading this lesson when you are done.

> Your pseudocode for the assignment might look like this:

```
// Passing score = 150 points
// Get the player's score

// If the player's score is greater than or equal to the passing score
	// Display message "Current level: Passed"
// Otherwise
	// Display message "Current level: Failed"
```

Again, it's okay if your pseudocode looks different from the sample code above. Just make sure you've covered all of the conditions.

## Summary

Breaking down problems in this fashion will likely seem a little challenging in the beginning. But, once you gain some practice, it will become second nature.

Many of the programs you'll be working on in the following chapters might seem a little daunting at first. Instead of trying to tackle a problem all at once, take a few minutes to **think about the overall goal of the program, and then break that answer down into series of short instructions.** It will be time well spent.

> **HINT** You could write pseudocode for your memory game! How would you get started? 

Watch this video to hear developers talk about the importance pseudocode plays in their workflow:

<iframe src="//fast.wistia.net/embed/iframe/8axbgun2i4?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>


---

Now it's your turn. Practice writing pseudocode [with this exercise](pseudocode-exercise.md).
