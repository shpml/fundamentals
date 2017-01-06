**WDI Fundamentals Unit 11**

---

# Less Code and Better Logic with Arrays

We're now in the home stretch of creating our memory game! So far we have simulated cards in our game by creating variables that represent the value of our cards and looping through a fixed number we assumed to represent the number of cards. However, with our new-found knowledge of arrays, we can now better simulate the cards in our game in a way that will be more versatile and require less lines of code! So, let's go ahead and edit some of our code to incorporate arrays, then write some fresh new code to create dynamic game logic!

## Exercise

#### Requirements

Replace all of your card variables with an array of cards. Once that is complete, organize all your code into functions. Then, create two more functions; one should check if two cards are in play, and the other should check if two cards are a match.

##### Here are the steps for completing the assignment:

1) Declare a variable, `cards`, and set it equal to an array of four string elements: `'queen'`, `'queen'`, `'king'`, `'king'`.


2) Declare a variable, `cardsInPlay`, whose value is an empty array.


3) You will now need to set up each card within the `createBoard()` function. To accomplish this, loop through your `cards` array and give each element an attribute that equals the card value (e.g., `'queen'`). See the example below.

```js
// instead of looping through a fixed number
// loop through the length of the cards
for (var i = 0; i < cards.length; i++) {

  ...

  // this will set the card's 'data-card' to be the element of the array
  // data — attributes are meant to store data about an element that is not
  // tied to a style,
  // i.e., 'king'.
  cardElement.setAttribute('data-card', cards[i]);

  ...

}
```

4) Add a `click` event listener to each card element that runs a function, `isTwoCards`. See below.

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
  // 'this' hasn't been covered in this pre-work, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }

}
```

>  **NOTE** `this` refers to whatever called the function. For example, we add the `eventListener` of `'click'` to a **card** and then call `isTwoCards`. In our example above, `this` is referring to _this card_. If this is confusing, don't worry! We'll cover `this` extensively in WDI.

7) We have the ability to "flip" a card. This will require us to grab images first. Look through pixabay.com, and find and download images of a [king](https://pixabay.com/en/photos/?image_type=&cat=&min_width=&min_height=&q=playing+cards+king+&order=popular) and [queen](https://pixabay.com/en/photos/?image_type=&cat=&min_width=&min_height=&q=playing+cards+queen+&order=popular) that are to your liking. Once you've downloaded these images, add them to your project's folder. It's best to place them in the _root_ directory of that folder.

> **INFO** You may need to add a CSS selector that targets your `img` elements and gives them a height/width if the images you use are very large.

8) In your `cardElement`'s `'click'` event listener, set the `cardElement`'s inner HTML to an image of either a king or a queen. You will need to get the `data-card` attribute to decide which image to display. You can then use that `data-card` value to decide on the image using an `if` statement.

>  **NOTE** We can create an `img` tag as a string. For example, `<img src="my_king.png" alt="King of Spades" />` is an image that would render a king of spades. We can set `cardElement`'s `innerHTML` value to a string. So, we could set `cardElement.innerHTML = '<img src="my_king.png" alt="King of Spades" />';`.

9) When `isMatch()` has run, you should remove _all_ inner HTML of every card to reset the game board.

10) Once completed, you should have a working game that displays cards when clicked and tells you if you have a match or not! Congratulations! You have come a long way!

#### Deliverable

When you're finished, don't forget to **add**, **commit**, and **push** your code to your GitHub repository!

Now it's time to submit you code. Submit your link to your GitHub repository via [this form](https://ga-immersives.typeform.com/to/UHC5Yp).

*Don't worry if you had trouble finishing up the memory game. Go ahead and submit what you have, and you'll be able to review it with your instructor soon enough!*

#### Taking It Further

Our game could use a few finishing touches. Take some time to think about how you might reset the game board to play again. What if you wanted to keep track of your score?

---
How was your Fundamentals experience? Take a [quick survey](feedback.md) to give us your feedback!
