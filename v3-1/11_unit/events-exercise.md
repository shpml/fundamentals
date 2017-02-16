**WDI Fundamentals Unit 11**

---

##![Your Turn](../assets/exercise.png) Your Turn

### Events Exercise

---

#### Instructions

0. Write the code to perform the actions listed below in the **"JavaScript"** panel in the JS Bin editor. 
0. If you don't see the JS Bin below, please refresh the page.
0. Make sure that the "Auto-run JS" checkbox is checked in the "Output" panel.

<a class="jsbin-embed" href="http://jsbin.com/xozufo/embed?html,js,output">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.41.0"></script>

#### Let's get started!

In this challenge, we'll utilize the `document` object and events to create a todo list. Users should be able to enter new todo items in an input and see them displayed on the page.

Before you get started, take a look at the starter code that has been provided in the "HTML" Panel in JS Bin. You'll need to reference the HTML for the steps below.

0. First create a function called `addItem`. For now it should be empty.

0. Add a `click` event handler to the button. When the button is clicked, run the `addItem` function.

0. Alright, now within the `addItem` function we need to find out what the user entered into the input field. We'll be using a new property - the `value` property - to find out what the user entered into the input. The syntax for using this property looks like this:

	```js
	document.getElementsByTagName('findTheRightElement')[0].value;
	```

	- Get the user's todo item from the `input` element and store it in a variable `newItemText`.

	> Hint: Here's how we can select the input field:
	>
	>```js
	> document.getElementsByTagName('input')[0]
	>```

0. Now we want to add the new list item to the `ul` with the id `todo-list`. Remember, in order to add a new element to the page, there are a few steps we will have to take:

	- Use the `createElement()` method to create a list item element and store it in the variable `newItem`.
	- Add content to this new list item using the `innerHTML` property.
	- Use the `appendChild()` method to append this element to the unordered list.

0. Test things out! Enter a task, click the button in the "Output" panel, and make sure that your task is getting added to the todo list. 


> *Stuck? Check out the [solutions](../exercise-solutions.md#manipulating-the-dom) to see what you can do.*


---
[Ready to test yourself?](dom-quiz.md).
