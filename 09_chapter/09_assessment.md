**WDI Fundamentals Unit 9**

---

# Game Logic

In Unit 8, we covered some game-changing concepts (pun intended). For example, can you guess what type of feature we can now begin to implement in our memory card game? If you guessed game logic, you're right! For this section's assignment, you will implement your knowledge of conditionals to help with the task of creating your game logic.

## Exercise

#### Requirements

Based on whether or not your user discovers a match, notify them with a winning or losing message in a popup message using `alert`. In some of our other exercises, we have used `console.log` to give feedback from our code. However, as we start to have a more "user facing" mindset, we begin to code in a way that makes more sense for the user. For our game, this means notifying the user about a win or a loss with a popup rather than the console, a place where most users don't look.

We can use **alert** to display a popup message to a user. In a JavaScript file, you could write `alert('Hello, friends.');` and you would be displayed a popup from your browser that displays the sting 'Hello, friends'.

For this assessment, you'll use an alert to display messages to your user:

![](https://s3.amazonaws.com/f.cl.ly/items/1S1E0E3Q3m1K1G2L3C1A/Image%202016-03-06%20at%208.24.46%20AM.png?v=6094ee76)

**Note** Warning! Alerts are _annoying_ popup that can be used to show a string of data to a user. They also interfere with a user interacting with a web page until they click 'ok'. While it is a great tool to see results as you learn JavaScript, you should never use it for any professional project. Why? Some browsers (such as Chrome) allow users to hide them from being displayed. But also - it is annoying.

> **Note:** Curious about `alert()`? Check out the documentation <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert" target="_blank">here</a>



##### Below are the steps to complete the assignment.

1) In your main.js file, create an `if else` statement checking for equality between two of your cards (you choose which ones).
* `if` statement should consist of a boolean checking for equality between two created variables. You should have a condition to compare two king variables, two queen variables, and one of each. Start with comparing `cardTwo` with `cardFour` (using `===`).

2) If values are equal, execute an `alert` with the message, "You found a match!". If values are not equal, execute an `alert` with the message, "Sorry, try again.".

> **Info** If you are testing code that uses alerts in JSBin, disable "auto-run JS". You can then "run with JS" when you are ready to test your code. If you do not, alerts will be looped every few seconds at you! 

3) Save your main.js file and open your index.html file in the browser to check to see if your alert is working. When the `alerts are working properly, you should see:

![](https://s3.amazonaws.com/f.cl.ly/items/1S1E0E3Q3m1K1G2L3C1A/Image%202016-03-06%20at%208.24.46%20AM.png?v=6094ee76)

We'll check for these conditionals in the following units when we learn about `onclick` methods and the DOM.

#### Deliverable

You'll want to keep track of all your hard work, so don't forget to ACP: **Add**, **Commit** and **Push** that code to GitHub!

---
[Next up: Chapter 10](../10_chapter/intro.md)
