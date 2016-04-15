**WDI Fundamentals Unit 11**

---

# Less Code and Better Logic with Arrays

We're now in the home stretch of creating our memory game! So far we have simulated cards in our game by creating variables that represented the value of the cards and looping through a fixed number we assumed to represent the number of cards. However, with our new found knowledge of arrays, we can now better simulate the cards in our game in a way that will be more versatile and require less lines of code! So, let's go ahead and edit some of our code utilizing arrays as well as write some fresh new code to create some dynamic game logic!

## Exercise

#### Requirements

Replace all your card variables `Array` types. Once that is complete, organize all your code into functions. Then create two more functions, one which will check if two cars are in play, and the other should check if two cards are a match.

##### Below are the steps to complete the assignment.

1) Declare a variable, `cards`, whose value is an `Array` that consists of four `String` elements: `queen`, `queen`, `king`, `king`.


2) Declare a variable, `cardsInPlay`, whose value is an empty array.


3) You will now need to set up each card during the `createBoard()` function. You'll need to loop through the your `cards` array and then Each element should have an attribute that equals the card value (i.e. "queen"). See example below.

```js
// instead of looping through a fixed number
// loop through the length of the cards
for (var i = 0; i< cards.length; i++) {

  ...

  // this will set the card's 'data-card' to be the element of the array
  // data- attributes are meant to store data about an element that is not
  // tied to a style.
  // i.e. "king"
  cardElement.setAttribute('data-card', cards[i]);

  ...

}
```

4) Add a click event listener to each card element that runs a function, `isTwoCards`. See below.

```js
for (var i=0; i<cards.length; i++) {

  ...

  // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards)

  ...

}

```

5) Create a function called `isMatch` to test if two cards in play are a match. **Hint:** We can then configure our previous game logic code to access the cards!


6) Create a function called `isTwoCards` to check if two cards are in play.

```js
//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}
```

>  **NOTE** `this` is referring to whatever called the function. For example, we add the eventListener of click to a **card** and then call isTwoCards. In our example above, _this_ is referring to _this card_. If this is confusing, don't worry! We'll cover this extensively in WDI.

7) We have the ability to 'flip' the card. This will require us to grab images first. [Bicycle Playing Cards](http://wheels-cards.wc.lt/bicycle_cards.html) are available to use for your personal project. You should download these and find a King and Queen image to your liking. Once you've found images you like, add them to your project's folder. It would be best to place them in the _root_ directory of that folder.

> **INFO** You may need to add a CSS selector that targets your `img` elements and gives them a height/width if the images you use are very large.

8) In your `cardElement`'s `click` event listener, set the `cardElement`'s innerHTML to an image of either a King of Queen. You will need to get the `data-card` attribute to decide which image to display. You can then use that 'data-card' value to decide which image to use using an if statement.

>  **NOTE** We can create an `img` tag as a string. For example... `<img src="my_king.png" alt="King of Spades" />` is an image that would render a King of Spades. We can set `cardElement`'s `innerHTML` value to a string. So, we could set `cardElement.innerHTML = '<img src="my_king.png" alt="King of Spades" />';`.

9) When `isMatch()` is ran, you should remove _all_ innerHTML of every card to reset the game board.

10) Once completed, you should have a working game that displays cards when clicked and tells you if you have a match or not! Congratulations! You have come a long way!

#### Deliverable

When finished, don't forget to **add**, **commit** and **push** your code to your GitHub repository!

Now it's time to submit you code! Submit your link to your Github repository via [this form](https://ga-immersives.typeform.com/to/UHC5Yp).

#### Taking it further on your own

Our game could use a few finishing touches. Take some time to think about how you might reset the game board to play again. What if you wanted to keep track of score?
