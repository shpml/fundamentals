# Less Code and Better Logic with Arrays

We're now in the home stretch of creating our memory game! So far we have simulated cards in our game by creating variables that represented the value of the cards and looping through a fixed number we assumed to represent the number of cards. However, with our new found knowledge of arrays we can now better simulate the cards in our game in a way that will be more versatile and require less lines of code! So, let's go ahead and edit some of our code utilizing arrays as well as write some fresh new code to create some dynamic game logic.

## Exercise

#### Requirements

- Create a variable, `cards`, which will represent the cards of the game (our game will have four cards)
- Create a variable, `cardsInPlay`, whose value is an empty array
- Each element should have innerHTML which equals the card value (i.e. "queen")
- Add a click event listener to your card element that runs a function, `isTwoCards`
- Create a function called `isMatch` to test if two cards in play are a match
- Create a function called `isTwoCards` to check if two cards are in play
  - clicked on card should be added to `cardsInPlay` array
  - if two cards are in play, run `isMatch`

#### Below are the steps to complete the assignment.

1) Declare a variable, `cards`, whose value has four `String` elements: `queen`, `queen`, `king`, `king`.

```js
// represents the cards of the game
var cards = ['queen', 'queen', 'king', 'king'];
 ```

2) Declare a variable, `cardsInPlay`, whose value is an empty array.

```js
// this array keeps track of the cards in play
var cardsInPlay = [];
```

3) Add innerHTML to each card element

```js
// instead of looping through a fixed number
// loop through the length of the cards
for (var i=0; i<cards.length; i++) {

  ...

  // this will set the card's innerHTML to be the element of the array
  // i.e. "king"
  cardElement.innerHTML = cards[i];

  ...

}
```

4) Add a click event listener to each card element

```js
for (var i=0; i<cards.length; i++) {

  ...

  // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards)

  ...

}

```

5) Create `isMatch` function

```js
// this function takes an array argument
function isMatch(cards) {

  // we can then configure our previous game logic code to access the cards
  if (cards[0] === cards[1]) {

    alert("You found a match!");

  } else {

    alert("Sorry, try again.");

  }
}
```

6) Create `isTwoCards` function

```js
//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' is not covered in the pre-work but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.innerHTML)

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}
```

#### Deliverable

Voila! You've done it! You have just written all the JavaScript code needed for a basic memory card game. Your code should look something similar to the following:

```js
// represents the cards of the game
var cards = ['queen', 'queen', 'king', 'king'];

// represents the cards in play
var cardsInPlay = [];

// function that will create your board
function createBoard() {

  // find the board and set it to a variable
  // so that we can add cards to it
  var board = document.getElementsByClassName('board')[0];

  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {

    // create a div element which will be used as a card
    var cardElement = document.createElement('div');

    // add a class to the card element which will help link styling
    cardElement.className = 'card';

    // this will set the card's innerHTML to be the element of the array
    // i.e. "king"
    cardElement.innerHTML = cards[i];

    // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards)

    // append the card to the board
    board.appendChild(cardElement);

  }

}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards being viewed
  // 'this' is not covered in the pre-work but
  // for now, just know it gives you access to the cardElement you click on
  cardsInPlay.push(this.innerHTML)

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}

function isMatch(cards) {

  // alert winning message
  if (cards[0] === cards[1]) {

    alert("You found a match!");

  } else {

    alert("Sorry, try again.");

  }
}

// run your createBoard function
createBoard();

```
