**WDI Fundamentals Unit 8**

---

# Unit 8 Assignment


In this unit, we covered some game-changing concepts (pun intended). For example, can you guess what type of feature we can now begin to implement in our memory card game? If you guessed game logic, you're right!

With our new-found knowledge of arrays, we can also better simulate the cards in our game in a way that will be more versatile and require fewer lines of code. 

For this unit's assignment, you will implement your knowledge of booleans, conditionals, and arrays to help with the task of storing cards and creating your game's logic.


## Exercise

#### Requirements

Based on whether or not your users discover a match, **notify them with a winning or losing message in a pop-up box using `alert`.**

In some of our other exercises, we have used `console.log` to provide feedback regarding our code. However, as we start to have a more "user-facing" mindset, we need to begin to code in a way that makes more sense for the user. For our game, this means notifying the user about a win or loss with a pop-up notification rather than on the console, a place where most users don't look.

We can use **alert** to display a pop-up message to a user. In a JavaScript file, you could write `alert('Hello, friends.');` and you would create a pop up from your browser that displays the string `'Hello, friends'`.

For this assignment, you'll use an `alert` to display messages to your user:

<img src="https://s3.amazonaws.com/f.cl.ly/items/1S1E0E3Q3m1K1G2L3C1A/Image%202016-03-06%20at%208.24.46%20AM.png?v=6094ee76" width="450px">

> **Warning** Alerts are _annoying_ pop ups that can be used to show a string of data to a user. They also interfere with a user's ability to interact with a web page until he or she clicks `OK`. While alerts are a great tool for seeing results as you learn JavaScript, you should avoid using them for any professional project.

> **Note** Curious about `alert`? Check out its documentation <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/alert" target="_blank">here</a>.

#### Instructions

0. Open the `memory_game` folder in Sublime and open the `main.js` file. You'll be writing code to work through the following steps in Sublime Text.
0. In your `main.js` file, create an array to store the four cards. 
	- Create an array `cards`.
	- The array should hold four strings - one for each of our cards.
	- The strings should be `"queen"`, `"queen"`, `"king"`, and `"king"`.
	- After creating the `cards` array, you can delete the variables you created in the last unit's project. 

0. Next we'll want to create an empty array. This will eventually hold the cards that are in play.
	- Create an array `cardsInPlay`.
	- Set its value to an empty array `[]`

0. Next up, you'll create a variable to represent the first card that the user flipped.
	- Create a variable `cardOne`.
	- Store the first item in the `cards` array in the variable `cardOne`.
		>Hint: Use the array name, square brackets, and the index number to retrieve this card from the array.

0. Now we'll want to add this first card to the `cardsInPlay` array.
	- Use the `push()` method to add `cardOne` to the end of the `cardsInPlay` array.
	- Here's an example of the `push()` method if you need a syntax refresher:
		
		```js
		ghosts.push('clyde');
		```

0. For testing purposes, it will be helpful to display the card that was just flipped to the console to make sure we've done things correctly.
	- Use `console.log()` to display the card that the user flipped
	- The message that is displayed in the console should say `"User flipped queen"`.
	- After saving the changes you made to `main.js`, open the `index.html` file in Sublime Text, right click, and open the project in Chrome. Then navigate to the console in Chrome and check to make sure that this message is displayed. If not, double-check to make sure that you've saved any changes to your `main.js` file.

0. Now create a variable to represent the second card that the user flipped.
	- Create a variable `cardTwo`.
	- Store the third item in the `cards` array in the variable `cardTwo`.

0. Now we'll want to add this second card to the `cardsInPlay` array.
	- Use the `push()` method to add `cardTwo` to the end of the `cardsInPlay` array.

0. Use `console.log()` to display the card that the user flipped
	- The message that is displayed in the console should say `"User flipped king"`.
	- After saving the changes you made to `main.js`, open the `index.html` file in Sublime Text, right click, and open the project in Chrome. Then navigate to the console and check to make sure that this message is displayed. If not, double-check to make sure that you've saved any changes to your `main.js` file.

0. Next we'll add logic to check to see if two cards have been played, because in our final game we will not want to check for a match until the user has selected two cards.
	- Write an `if` statement that checks to see if the length of the cardsInPlay array is 2.
	- For the condition, you can use the `length` property to find out how many items are in the `cardsInPlay` array and then use the `===` operator to see if the length is equal to 2.

0. Now we'll want to add logic that checks for equality between the two cards in the `cardsInPlay` array.
	- Inside of the `if` statement you created in the last step, create an `if...else` statement that checks for equality between the two cards in the `cardsInPlay` array.
	- For the condition, check to see if the first card in the `cardsInPlay` array (`cardsInPlay[0]`) is equal to the second card in the `cardsInPlay` array. 

		> Hint: You'll want to use the `===` operator here.

0. If values are equal, execute an `alert` with the message "You found a match!" 
	
	```js
	alert("You found a match!");
	```
	
0. If values are not equal, execute an `alert` with the message "Sorry, try again."

0. After saving your `main.js` file, open the `index.html` file in Sublime Text, right click, and open the project in Chrome. The alert "Sorry, try again." should pop up.

0. Test out storing different cards in the `cardOne` and `cardTwo` variables to make sure that everything is up and running!

#### Deliverable

![](assets/control-flow-assignment/deliverable.png)

![](assets/control-flow-assignment/deliverable-2.png)

#### Pushing Code Up to the Repository

In order to back up your code and track your work, you'll want to commit the changes you've made to the project's repository. You'll have to open up the terminal and `cd` into the correct folder that holds the cloned repository for this assignment. Once you're there, complete these three steps:

0. Stage your code.

	`git add -A`

0. Create a version of your staged code.

	`git commit -m 'created game logic'`

0. Push your code to the GitHub repository.

	`git push origin master`


---
[Next up: Functions!](../09_unit/functions-intro.md)
