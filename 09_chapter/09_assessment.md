**WDI Fundamentals Unit 9**

---

# Game Logic


In this unit, we covered some game-changing concepts (pun intended). For example, can you guess what type of feature we can now begin to implement in our memory card game? If you guessed game logic, you're right! For this section's homework, you will implement your knowledge of conditionals to help with the task of creating your game's logic.


## Exercise

#### Requirements

Based on whether or not your users discover a match, notify them with a winning or losing message in a pop-up box using `alert`. In some of our other exercises, we have used `console.log` to provide feedback regarding our code. However, as we start to have a more "user-facing" mindset, we need to begin to code in a way that makes more sense for the user. For our game, this means notifying the user about a win or loss with a pop-up notification rather than on the console, a place where most users don't look.

We can use **alert** to display a pop-up message to a user. In a JavaScript file, you could write `alert('Hello, friends.');` and you would create a pop up from your browser that displays the string `'Hello, friends'`.

For this assessment, you'll use an `alert` to display messages to your user:

![](https://s3.amazonaws.com/f.cl.ly/items/1S1E0E3Q3m1K1G2L3C1A/Image%202016-03-06%20at%208.24.46%20AM.png?v=6094ee76)

**Note** Warning! `alert`s are _annoying_ pop ups that can be used to show a string of data to a user. They also interfere with a user's ability to interact with a web page until he or she clicks `OK`. While `alert`s are a great tool for seeing results as you learn JavaScript, you should never use them for any professional project. Why? Not only are they a nuisance, but some browsers (such as Chrome) allow users to prevent them from being displayed.

> **Note:** Curious about `alert`? Check out its documentation <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert" target="_blank">here</a>.



##### Below are the steps for completing the assignment:

1) In your `main.js` file, create an `if else` statement that checks for equality between two of your cards (you choose which ones).
* An `if` statement should consist of a Boolean checking for equality between two created variables. You should have a condition to compare two `"king"` variables, two `"queen"` variables, and one of each. Start by comparing `cardTwo` with `cardFour` (using `===`).

2) If values are equal, execute an `alert` with the message "You found a match!" If values are not equal, execute an `alert` with the message "Sorry, try again."

> **Info** If you are testing code that uses alerts in JS Bin, disable "auto-run JS." You can then "run with JS" when you are ready to test your code. If you do not, these alerts will be looped every few seconds!

3) Save your `main.js` file, and open your `index.html` file in the browser to check if your alert is working. When the alerts are working properly, you should see:

![](https://s3.amazonaws.com/f.cl.ly/items/1S1E0E3Q3m1K1G2L3C1A/Image%202016-03-06%20at%208.24.46%20AM.png?v=6094ee76)

We'll check for these conditionals in the following units when we learn about `onclick` methods and the DOM.

#### Deliverable

You'll want to keep track of all your hard work, so don't forget to ACP — **Add**, **Commit**, and **Push** — that code to GitHub!

---
[Next up: Chapter 10](../10_chapter/intro.md)
