**WDI Fundamentals Unit 4**

---

## Project

Now that we've learned a bit more about how Functions work in JavaScript, let's revisit our 'Rock Paper Scissors' project.

---


Go back to `RockPaperScissors.js`, and scroll down to the following code:

```javascript
var playToFive = function() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
  return [playerWins, computerWins];
}
```

As you might infer from the title, the purpose of this function is to run the 'Rock Paper Scissors' game until either the player or the computer has won a total of five games.

Please write whatever code will be necessary for this function to work.

Once your code is working, you can commit your changes and move on to the next chapter.

[Next up: Chapter 6](../06_chapter/intro.md)

> If you are interested in an additional challenge, try writing another function called `playTo(x)` that allows us to play Rock Paper Scissors until either the player or the computer has won `x` times. Feel free to steal liberally from `playToFive()`.

To complete this assignment, you will need to utilize these methods.

>**Note:** In order to append your card elements, you're going to need something to append to, in this case a `div` with the class `board`. In order to find an element to you want to append to, use JavaScript's `document` object to run the method [`getElementsByClassName`](http://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp).

## Exercise

#### Requirements

###### Create the HTML for the cards:

- Find an element with the class name `board` and set it to a variable
- Assuming your memory card game consists of four cards, create a `for loop` that makes an HTML element for each card
  - each HTML element should be a `div`
  - each element should have a class `card` (this will help when you add CSS)
- Append each newly created card to the `div` that has the class `board`

###### Create functions to organize your code:

- create a function called `createBoard` that creates the HTML for your cards and appends the resulting HTML to your `div` that has the class board
- execute/fire your `createBoard` function so it runs

#### Below are the steps to complete the assignment.

1) Find the board and set it equal to a variable. See below.

```js
var board = document.getElementsByClassName('board')[0];
```

2) Create a `for loop` that will iterate four times. No hints here!


3) Create the required HTML for each card on each iteration and append this HTML to the board - add this logic inside the `for loop`. See below for hint.

```js

  // create a div element which will be used as a card
  var cardElement = document.createElement('div');

  // add a class to the card element which will help link styling
  cardElement.className = 'card';

  // append the card to the board
  board.appendChild(cardElement);

}
```

4) Create a `createBoard` function.

5) Add your board creation logic to the function from steps 1, 2 & 3.

6) Execute the `createBoard` function.

#### Deliverable

Once you're happy with your work, save your code and make a commit to your project's repository.

---
[Next up: Chapter 6](../05_chapter/intro.md)
