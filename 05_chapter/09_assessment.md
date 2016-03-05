# Organizing Code and Creating Dynamic HTML

Your code is slowly but surely starting to get more robust. To better organize the code you've already written as well as prepare for the code you will write, we will now take the time to structure the program using functions. Further, using what you've learned about iterating with loops, you will also dynamically create your cards into HTML.

## A Note on JS's Role on a Web Page

With this GitBook, we have really dove head first into the technical fundamentals of JavaScript, but we haven't covered the _why_ in terms of the role JS plays in a web application. In a nutshell, this answer lies within user interactivity. There is no doubt that we can build a beautiful site with solely HTML and CSS, but what if we want our user to do more than just look at our page? What if we want our user to be able to engage, say by clicking on a button in order to retrieve additional data or even create dynamic HTML like in the case of this homework? Well, these sorts of tasks are handled by JavaScript. JavaScript adds a layer of dynamic interactivity to an otherwise plain old static website.

**note:**

JavaScript comes with built-in functions we can call upon JavaScript objects (remember associative arrays?) with dot notation. These functions are more commonly known as _methods_. For example, `document.createElement('div')` creates an HTML `div` element. `document` is the readily available JS object and `createElement` is the function/method it comes with which allows performs the functionality of creating a new element. In this case, we passed `createElement` and argument of `'div'` so a `div` element is created. If you'd like, you could go ahead and run that line of code in your browser's console to get a further understanding.

Besides `createElement`, the `document` object comes with various other methods that help with the creation and manipulation of HTML and CSS. For example, there is a method for adding a class to an element, [`className`](http://www.w3schools.com/jsref/prop_html_classname.asp), as well as one for adding innerHTML, [`innerHTML`](http://www.w3schools.com/jsref/prop_html_innerhtml.asp). On top of those methods which allow you to construct an element, there's also the method [`appendChild`](http://www.w3schools.com/jsref/met_node_appendchild.asp) which aids in actually attaching the element to an element in your web page.

In order to complete this assignment you will need to utilize these methods.

**hints:**

In order to append your card elements, you're going to need something to append to, in this case a `div` with the class `board`. In order to find an element to you want to append to, use JavaScript's `document` object to run the method [`getElementsByClassName`](http://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp).

## Exercise

#### Requirements

###### Create the HTML for the cards:

- Find an element with the class name `board` and set it to a variable
- Assuming your memory card game consists of four cards, create a `for loop` that makes an HTML element for each card
  - each HTML element should be a `div`
  - each element should have a class `card` (this will help when you add CSS)
- Append each newly created card to the `div` that has the class `board`

###### Create functions to organize your code:

- create a function called `createBoard` which creates the HTML for your cards and appends the resulting HTML to your `div` that has the class board
- execute/fire your `createBoard` function so it runs

#### Below are the steps to complete the assignment.

1) Find the board and set it to a variable

```js
var board = document.getElementsByClassName('board')[0];
```

2) Create a `for loop` that will iterate four times

```js
for (var i=0; i<5; i++) {

}
```

3) Create the required HTML for each card on each iteration and append to the board

```js
for (var i=0; i<5; i++) {

  // create a div element which will be used as a card
  var cardElement = document.createElement('div');

  // add a class to the card element which will help link styling
  cardElement.className = 'card';

  // append the card to the board
  board.appendChild(cardElement);

}
```

4) Create `createBoard` function

```js
function createBoard() {

}
```

5) Add your board creation logic to the function

```js
function createBoard() {

  var board = document.getElementsByClassName('board')[0];

  for (var i=0; i<5; i++) {

    // create a div element which will be used as a card
    var cardElement = document.createElement('div');

    // add a class to the card element which will help link styling
    cardElement.className = 'card';

    // append the card to the board
    board.appendChild(cardElement);

  }

}
```

6) Execute `createBoard`

```js
createBoard()
```

#### Deliverable

Altogether, your code should look something like this:

```js
function createBoard() {

  var board = document.getElementsByClassName('board')[0];

  for (var i=0; i<5; i++) {

    // create a div element which will be used as a card
    var cardElement = document.createElement('div');

    // add a class to the card element which will help link styling
    cardElement.className = 'card';

    // append the card to the board
    board.appendChild(cardElement);

  }

}

createBoard()
```