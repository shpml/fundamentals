**WDI Fundamentals Unit 10**

---

# Organizing Code and Creating Dynamic HTML

Your code is slowly but surely starting to get more robust. To better organize the code you've already written, as well as prepare for the code you will write, now, we will take the time to structure the program using functions. Further, using what you've learned about iterating with loops, you will also dynamically create your cards into HTML.

JavaScript comes with several "built-in" functions that we can call on using dot notation. These functions are no different than the functions we just covered, but they are more commonly known as _methods_.

For example, let's look at `document.createElement('div')` which creates an HTML `div` element (a `div` will come to visually represent a card in the browser).

- `document` is a readily available JS object, with built-in properties and methods associated with it.
- `createElement` is a method it comes with
  - This method performs the functionality of creating a new HTML element.
  - Just like with the functions we've learned about, we can pass in arguments for these methods to use.

In this case, we passed `createElement` an argument of `'div'` so a `div` element is created. If you'd like, you can go ahead and run that line of code, `document.createElement('div')`, in your browser's console to see it in action.

Besides `createElement`, the `document` object comes with other methods that help with the creation and manipulation of HTML and CSS. For example, there is an attribute (or property) you may modify to add a class to an element -  [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className). If you need to modify the content _inside_ of the HTML tags, you may modify the attribute named [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML). If you modified the `innerHTML` of an `<li>` element to `= 'remember maple syrup at the grocery story`, your list item would then contain that content: `<li>remember maple syrup at the grocery story</li>`. On top of those methods and attributes that allow you to construct an element, there's also the method [`appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) that aids in attaching your element as a child of another element on your web page.

To complete this assignment, you will need to utilize these methods.

>**Note:** In order to append your card elements, you're going to need something to append to. We're going to change the HTML content of one of our tags so that we may use JavaScript to _select_ that tag. In order to find an element to you want to append to, use JavaScript's `document` object to run either 'getElementById' or 'querySelector'.

## Exercise

#### Requirements

###### Modify your HTML files

Before you start, go ahead and comment out the `if` statement from the last assignment. We'll work with it to finalize our memory game during the next unit.

1 ) Open your `index.html` and look for your `<div>` with a class of `board`. We need to give this div an **id** so that we may _get_ it using JavaScript.  

2 ) Give your div an `id` of `game-board`.

3 ) We're going to generate cards using JavaScript instead of using our existing `div` elements with the class `card` in html. Comment out any `div` with the `card` class.

4 ) Save your changes!

###### Create the HTML for the cards using JavaScript:

5 ) Get an element with the id of `game-board` and set it to a variable.

6 ) Assuming your memory card game consists of four cards, create a `for loop` that makes an HTML element for each card. Each HTML element should be a `div` as well as have the class `card` (this will help when you add CSS).

7 ) Append each newly created card to the `div` that has the id `game-board`.

###### Create functions to organize your code

8 ) Create a function called `createCards` in your JavaScript file. This function will contain the code you just wrote to generate your cards. 

9 ) Be sure to execute/fire your `createCards` function so it runs!

10) Once you've done that, your cards will be created! Be sure to check your page in a web browser to verify that everything works as intended!

#### Deliverable

Once you're happy with your work, save your code and make a commit to your project's repository.

#### Below are a few hints to help you

Setting an HTML tag's attributes:

```html
<article id="trogdor" class="burninating"></article>
```

Find the an ID and set it equal to a variable:

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
