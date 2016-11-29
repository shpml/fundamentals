**WDI Fundamentals Unit 10**

---

# Organizing Code and Creating Dynamic HTML

Your code is slowly but surely starting to become more robust. To better organize the code you've already written, as well as prepare for the code you will write, we'll now take the time to structure the program using functions. Plus, using what you've learned about iterating with loops, you'll also dynamically create your cards in your HTML.

JavaScript comes with several "built-in" functions we can call on using dot notation. These functions are no different than the functions we just covered, but they are more commonly known as _methods_.

For example, let's look at `document.createElement('div')`, which creates an HTML `div` element (a `div` will come to visually represent a card in the browser).

- `document` is a readily available JS object with built-in properties and methods associated with it.
- `document` comes with the method `createElement`.
  - This method performs the functionality of creating a new HTML element.
  - Just like with the functions we've learned about, we can pass in arguments for these methods to use.

In this case, we passed `createElement` an argument of `'div'`, so a `div` element is created. If you'd like, you can go ahead and run that line of code, `document.createElement('div')`, in your browser's console to see it in action.

Besides `createElement`, the `document` object comes with other methods that help with the creation and manipulation of HTML and CSS. For example, there is an attribute (or property) you can modify to add a class to an element —  [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className). If you need to modify the content _inside_ of the HTML tags, you may modify the attribute named [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML). If you modified the `innerHTML` of an `li` element to `= 'remember maple syrup at the grocery store'`, your list item would then contain `<li>remember maple syrup at the grocery store</li>`. On top of the methods and attributes that allow you to construct an element, there's also the method [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) that attaches your element as a child of another element on your web page.

To complete this assignment, you will need to utilize all of these methods.

>**Note:** In order to append your card elements, you're going to need something to append to. We're going to change the HTML content of one of our tags so that we may use JavaScript to _select_ that tag. In order to find an element that you want to append to, use JavaScript's document object to run either `getElementById` or `querySelector`.

## Exercise

#### Requirements

###### Modify your HTML Files

Before you start, go ahead and comment out the `if` statement from the last assignment. We'll work with it to finalize our memory game during the next unit.

1) Open your `index.html` and look for your `div` with a class of `board`. We need to give this `div` an `id` so that we may _get_ it using JavaScript.  

2) Give your `div` an `id` of `game-board`.

3) We're going to generate cards using JavaScript instead of using our existing `div` elements with the class `card` in HTML. Comment out any `div` with the `card` class.

4) Save your changes!

###### Create the HTML for the Cards Using JavaScript:

5) Get an element with the ID of `game-board` and set it to a variable.

6) Assuming your memory card game consists of four cards, create a `for loop` that creates an HTML element for each card. Each HTML element should be a `div`, as well as the class `card` (This will help when you add CSS).

7) Append each newly created card to the `div` with the ID `game-board`.

###### Create Functions to Organize Your Code

8) Create a function called `createCards` in your JavaScript file. This function will contain the code you just wrote to generate your cards. 

9) Be sure to execute/fire your `createCards` function so it runs!

10) Once you've done that, your cards will be created! Be sure to check your page in a web browser to verify that everything works as intended.

#### Deliverable

Once you're happy with your work, save your code and make a commit to your project's repository.

#### A Few Hints

Setting an HTML tag's attributes:

```html
<article id="trogdor" class="burninating"></article>
```

Finding an ID and setting it as equal to a variable:

```js
document.getElementById('trogdor');
```

Creating elements and modifying their attributes:

```js
// create a section element... <section></section>
var strongbadia = document.createElement('section');

// add a class... <section class='blue-skies'></section>
strongbadia.className = 'blue-skies';

// append the area to a world element (maybe a div somewhere?)
// <div>
//   <section class='blue-skies'></section>
// </div>
world.appendChild(strongbadia);
```


---
[Next up: Unit 11](../11_chapter/intro.md)
