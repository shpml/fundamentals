**WDI Fundamentals Unit 11**

---

##![Your Turn](../assets/exercise.png) Your Turn

### Accessing the DOM Exercise

---

#### Instructions

0. Take a look at the starter code that has been provided for you in JS Bin.
0. Write the code to perform the actions listed below in the **"JavaScript"** panel in the JS Bin editor. 
0. If you don't see the JS Bin below, please refresh the page.
0. Make sure "Auto-Run JS" is selected in the "Output" panel. After writing your JavaScript, you should see the output in the "Output" panel updated automatically.

<a class="jsbin-embed" href="http://jsbin.com/wasidij/embed?html,js,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.41.0"></script>

#### Let's get started!

We'll be using the `textContent` property for these exercises so that we can see the results and make sure that we have made the correct selections in our JavaScript.

The `textContent` property allows us to update the text for an element. Here's what the syntax looks like:

```js
yourJavaScriptSelectorHere.textContent = "New text content goes here";
```

For example:

```js
document.getElementById('main').textContent = "Updated!";
```

1. Use the `querySelectorAll()` method to select all elements with the `current` class and then, using array syntax (our trusty square brackets), update the selection to only select the _second_ element with the `current` class. After you've made your selection, add the following code onto the end of the selection: `.textContent = "The Violent Bear It Away";`
	- You should see the second list item updated to `"The Violent Bear It Away"` in the "Output" panel. If you do not see this, make sure the "Auto-Run JS" option is selected.

2. Use the `getElementById()` method to find the element with the ID `next`. After you've made your selection, add the following code onto the end of the selection: `.textContent = "Me Talk Pretty One Day";`

3. Find the first `li` using the `querySelector()` method. After you've made your selection, add the following code onto the end of the selection: `.textContent = "Brothers Karamazov";`

4. Use the `getElementsByTagName()` method to select all `li` elements. Then, use array syntax to select the fourth `li`. After you've made your selection, add the following code onto the end of the selection: `.textContent = "JavaScript is Fun!";`


> *Stuck? Check out the [solutions](../exercise-solutions.md#accessing-the-dom) to see what you can do.*

---
[Ready to move on? Here's the next lesson.](manipulating-the-dom.md)
