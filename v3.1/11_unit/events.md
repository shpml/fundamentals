**WDI Fundamentals Unit 11**

---

# Events
In order to create interactive and responsive sites, we'll often want to update the DOM based on our user's actions.

For example, when a user _clicks_ on our site's menu icon, a sidebar menu should slide out from the side of the page. Or, if a user _types_ an incorrect format into a form field, that field should become outlined in red.

These actions are called **events**.


![](assets/events/menu.gif)


Take a look at this short video providing an overview of the usefulness of events in JavaScript.

<iframe src="//fast.wistia.net/embed/iframe/mr8fqbknuq?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>


#### What is Asynchronicity?

JavaScript is different than most other programming languages because it is designed specifically to work in the event-driven environment of a browser window.

JS is not just executed line by line and then forgotten. When a browser loads HTML and CSS, it then uses its interpreter to run your JavaScript.

Javascript typically will run top-to-bottom. We as developers, however, have no idea when the code related to the button click will actually be executed. _It's totally dependent on the user_.

Therefore, we need to write code that will execute **asynchronously** &mdash; or in other words, outside of the typical top-to-bottom document flow &mdash; and not hold up the rest of our application.

Once your JS has fully loaded, it lives in the background of your browser window, waiting and **listening** for any event triggers you've programmed.

As its name implies, in *event-driven programming*, the flow of a program is driven by events.

This means:

*   The program continually "waits" or listens for events to occur.

*   There are many kinds of events, such as clicking, tabbing into a form field, pressing a computer key down or letting a computer key up, scrolling, resizing the browser window, etc. We'll take a look at some of these events later in this lesson.

*   The event acts as a "trigger," which calls, or runs, a function.


## Setting Up an Event Handler
So, how do we set up, or write, event handlers?

We mentioned previously that we can set up **event handlers** in our scripts that will listen, or wait, for an event to occur and then trigger a function.

### Syntax
The syntax for setting up an event handler looks like this:

```js
element.addEventListener('nameOfEvent', functionToRun);
```

0. `element` - refers to the DOM node to which we want to tie the event. For example, if we want to trigger an event when the user clicks on a button, the element would be that button element.  
0. `.addEventListener()` - is the method we will use to tie an event listener to an element.
0. `'nameOfEvent'` - is the event for which we want to listen. For example, maybe we want to wait until the user triggers a 'click' event.
0. `'functionToRun'` - is the name of the function we want to run when the event occurs. When we pass a function as an argument to another function, like we are here, this is referred to as a **callback function**.
	- _Note that there are no parentheses after the function name._  
		- `functionToRun` not `functionToRun()`.


### Example

Let's take a look at an example of an event handler:

```js
// Step 1
var alertUser = function () {
  alert('Button has been clicked!');
};

// Step 2
var button = document.querySelector('button');

// Step 3
button.addEventListener('click', alertUser);
```
Let's break it down:

1. Set up a function that will be triggered when the event occurs (`alertUser`).
2. Find the element we want to tie the event to and save it to a variable (the button).
3. Finally, set up an event handler using `addEventListener()`.

In the example above, when the user clicks on the button, the alertUser function will run.

## Types of Events

There are many events that can trigger a function. Here are a few:

|  Event | Description  |
|---|---|
| `'click'`  | When the button (usually a mouse button) is pressed and released on a single element.  |
| `'keydown'`  | When the user first presses a key on the keyboard  |
|  `'keyup'` | When the user releases a key on the keyboard  |
| `'focus'`  | When an element receives focus  |
| `'blur'`  |  When an element loses focus |
|  `'submit'` | When the user submits a form  |
|  `'load'` | When the page has finished loading  |
|  `'resize'` |  When the browser window has been resized |
|  `'scroll'` |  When the user scrolls up or down on a page |
| `'mouseenter`' | When the user's mouse enters an element |
| `'mouseleave'` | When the user's mouse leaves an element |

### Example

If we want to do something when the user _tabs or clicks away_ from an input field, we can use the `blur` event.

Here, we have a simple HTML snippet of an email form.


```html
<form>
	<input id="email" type="email" placeholder="Email Address">
</form>

```

The form contains an input field where the user can enter an email address.


Now let's take a look at the event handler in our JS:

```js
// First in our JS, let's find the email input field.
var emailInputField = document.getElementById('email');


// Next let's set up that function we want to run when the blur event occurs:

var tabAway = function () {
	alert("Field is no longer in focus");

};

// Finally, let's add our event handler that will trigger the function when the user hits tab or clicks out of the email field (the 'blur' event).
emailInputField.addEventListener('blur', tabAway);

```

Here are the results when the user tabs or clicks away from the field:

![](assets/events/blur.gif)

You can imagine that this event might be useful if we want to check to make sure the field is not empty when the user tabs out of the field. We could then add a message noting that the field is required if the user has not entered any input into the field.

## `this`

As we saw in a previous unit, the keyword `this` refers to the object that "owns" the function that the executed code runs within.

It's important to remember that when we have a method that is inside an object, `this` refers to the object that contains that method.

For example, in the function below, `this` refers to the object that contains the `playSong` method, `record`.

```js
var record = {
  artist: "The Spinners",
  lyrics: "Whenever you call me, I'll be there",
  playSong: function () {
    console.log(this.lyrics);
  }
};
```

However, when a callback function is executed within the context of an event handler, it is the **element (the DOM node)** that owns the context.

So in this case, `this` will refer to the element that we selected when we set up our event handler.


Let's look at an example where we'll change the background color of a circle from blue to red, just by clicking on it:

**HTML:**

```html
<div class="circle"></div>

```

**JS:**

```js
document.querySelector('.circle').addEventListener('click', turnRed)

var turnRed = function () {
	this.style.backgroundColor = "red";
};

```



Here when we click on the circle and trigger the turnRed function, `this` will refer to the element with the class `circle` within the `turnRed` function.

Here's what that looks like in action:

![](http://circuits-assets.generalassemb.ly/prod/asset/4629/Slide-8.gif)



Alright, but why use the keyword `this`:

`this.style.backgroundColor = "red";`

Instead of just writing:

`document.querySelector('.circle').style.backgroundColor = "red";`

Well, let's imagine that there are several circles on our page:

And we only want the `.circle` that we just clicked to have the updated red background color. That is where the `this` keyword really becomes useful.

Let's take a look:

```js
//Select all elements with the class .circle on the page
var circles = document.querySelectorAll('.circle');

//loop through each .circle element and add an event handler.
for (var i = 0; i < circles.length; i++) {
	circles[i].addEventListener('click', turnRed);
}

var turnRed = function () {
	this.style.backgroundColor = "red";
};
```

Here we are adding an event handler to each element with the class `.circle`.

When an element with the `.circle` class gets clicked, the `turnRed` function will be called; within that `turnRed` function, `this` will only refer to the `.circle` that triggered the `turnRed` function and not to any of the other circles.

Let's see this in action:

![](http://circuits-assets.generalassemb.ly/prod/asset/4630/Slide-11.gif)

See how we are only adding the style attribute to the circle we are currently clicking on (i.e., the one that triggered the callback function)? Pretty cool, huh?


## Conclusion
As we wrap things up, watch this short video where a developer talks about the role events played in a recent project she worked on:

<iframe src="//fast.wistia.net/embed/iframe/p89saznrue?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>

In this lesson, we learned how we can react to our users' actions when they visit our site.

We saw how we can harness JavaScript's event handling to wait until the user takes an action — like clicking on a button or scrolling down the page — and then run a block of code, or a function, when this event occurs.

We also saw how we can use the keyword this to access the individual element that caused an event to happen.


---

[Let's practice adding event handlers!](events-exercise.md)