**WDI Fundamentals Unit 11**

---
# Unit 11 Assignment

Now that we've learned how to access and manipulate the DOM, we can finally finish up our memory game! We will no longer need to rely on logging messages to the console to see our game in action. And we can use our event handlers to allow a user to actually play the game!


## Exercise

#### Requirements

After completing this assignment you will have a working memory game! 

**When the user clicks on a card, the image with the face of that card should be displayed. If the user has selected two cards, an alert should pop up letting the user know if the two cards match.**


#### Setup

Open the `memory_game` folder in Sublime Text.

Before following the instructions listed below, we'll be making a couple of changes to the `index.html` file for our game.

In your html file, find the following block of HTML:

```html
	<div class="board clearfix">
		<img src="images/queen-of-diamonds.png" alt="Queen of Diamonds">
		<img src="images/back.png" alt="Queen of Hearts">
		<img src="images/king-of-diamonds.png" alt="King of Diamonds">
		<img src="images/back.png" alt="King of Hearts">
	</div>
```

In this exercise, we'll be adding cards to the board with JavaScript instead of placing them in our HTML file. 

This will make our game more scalable and would also allow us to eventually add functionality that would randomize the cards before they get added to the page, so that they would appear in a different order each time.

It will also allow us to practice creating elements and appending them to the DOM.

Replace that block of HTML with the following code:

```html
	<div id="game-board" class="board clearfix"></div>
```

Notice how we've removed the images from the board. 

We've also added the id `game-board` to the div, which will allow us to quickly search for that element and append our card images.

Alright, let's get started!

#### Instructions

0. In the `main.js` file in Sublime Text, add a function that will create the game board. Right after the `flipCard` function, add a new function `createBoard`. This function will not have any parameters.
	
0. Now add each card to the board.
	- Within the `createBoard` function, use a `for` loop to loop through the cards array.
	- Here's a refresher on the syntax for a `for` loop:

		```js
		for (var i = 0; i < arrayName.length; i++) {
		
		}
		
		```
	- Now use the `createElement` method to create an `img` element and store it in a variable `cardElement`.
	
		> Hint: Here's what the code for creating a list item would look like, for reference: 
		
		>`var newListItem = document.createElement('li');`
		
		>In our project, we'll want to create an `img` element instead of a `li`.
	
	- Now use the `setAttribute()` method to add a `src` attribute for the `cardElement`. The `src` should be `"images/back.png"`

		> Hint: For reference, here's the syntax for setting an attribute:		
		>
		>`cardElement.setAttribute('attributeName', 'attributeValue');`

	- Now use the `setAttribute()` method once again to set the card's `'data-id'` attribute to be the index of the current element, `i` (no quotes).
    
    	> Note: `data-` attributes are meant to store data about an element that is not tied to a style.

	- When each card is created (still within the `for` loop), we'll want to use the `addEventListener()` method to add a `click` event to the `cardElement`. The function that we want to run when a user clicks on a card is the `flipCard` function.
	- Finally, use the `appendChild()` method to append the current `cardElement` to the game board (which has an id of `game-board`).

0. Now let's call the `gameBoard` function to create the board!
	- Delete the two lines of code where you are calling the flipCard function:

	```js
	flipCard(0);
	flipCard(2);
	```
	- At the very end of your JavaScript file, after the `createBoard` function, call the `createBoard` function.

0. In the last step we added a click event to each card, so that when each card is clicked, the `flipCard` function will run. Before we can test things out, we'll need to make a few edits to our `flipCard` function.
	- Remove the `cardId` parameter from the flip card function. We no longer want to hard-code the index number of the card that should be flipped.
	- On the first line inside the `flipCard` function, use the `getAttribute` method to get the `data-id` attribute of the card that was just clicked and store it in a variable `cardId`. 
	
	> Hint: We can use the `this` keyword to access the card that was clicked: `this.getAttribute('attribute-we-want-to-get-goes-here');`
	
	- Alright! Finally, when the user clicks a card we want to display the image for the face of that card in place of the back of the card. _Right before_ the `if` statement where you are checking to see if two cards have been played, use the `setAttribute` method to update the `src` attribute to the image of the card that was just clicked, which is stored in the `cardImage` property in that card's object in the `cards` array.

	> Hint #1: How can you access the cardImage property? Take a look at the line where we were logging this property to the console in the last assignment for a hint:
	>
	> `console.log(cards[cardId].cardImage)`
	

	> Hint #2: Just as we did in the last step, we can use the `this` keyword to access the element the user just clicked on. Except now instead of getting an attribute, we want to _set_ the `src` attribute.
	>
	> Hint #3: We'll want to make sure that there are _no quotation marks_ surrounding the new value of the `src` attribute (cards[cardId].cardImage) when we use the `setAttribute()` method.
	
0. Save your `main.js` file, open the project in Chrome and open the console. Test out the game! If things aren't working, check the console to see if an error message is displayed.

Once completed, you should have a working game that displays cards when clicked and tells you if you have a match or not! Congratulations! You have come a long way!

#### Bonus

We've done it! Think about how you could take this game even further. It might be useful to add a "Reset" button to the HTML and set up an event in the JavaScript file so that the user can reset the game after playing. 

For an extra challenge, consider how you could keep track of and display the user's score.

#### Deliverable

![](assets/the-dom-assignment/deliverable.gif)


#### Pushing Code Up to the Repository

In order to back up your code and track your work, you'll want to commit the changes you've made to the project's repository. You'll have to open up the terminal and `cd` into the correct folder that holds the cloned repository for this assignment. Once you're there, complete these three steps:

0. Stage your code.

	`git add -A`

0. Create a version of your staged code.

	`git commit -m 'created game logic'`

0. Push your code to the GitHub repository.

	`git push origin master`


Now it's time to submit you code. Submit your link to your GitHub repository via [this form](https://ga-immersives.typeform.com/to/xG1aSd).

*Don't worry if you had trouble finishing up the memory game. Go ahead and submit what you have, and you'll be able to review it with your instructor soon enough!*



---
[We want your feedback!](../12_feedback/intro.md)
