**WDI Fundamentals Unit 10**

---

#####By the end of this unit, you'll be able to:
* Define a function with one or more parameters.
* Execute a function within a program or in the console.
* Given a function and a set of arguments, predict the output of that function.
* Use selectors and methods to access and update HTML using the DOM.

---

# Functions

We've had the opportunity to learn the basics of JavaScript, including data types and control flow. Now it's time to learn functional programming.

But first, a little math.

**Function** is a term that comes out of mathematics. You may remember seeing it in a high school algebra class. The basic idea of a function is simple - it's a relationship between a set of inputs and a set of outputs.

Consider the relationship between a variable `x` and the function `f`. The function `f` takes the input `x` and spits out a single output (`f(x)`).

<br>
<center><img src="../assets/chapter5/function.png"></center>
<br>

What if we were shown the output (`f(x)`) for each of the following values of `x`?

| x  | f(x) |
|:-: |:-:   |
| -1 | -2   |
| 0  | 0    |
| 1  | 2    |
| 2  | 4    |
| 3  | 6    |

We could figure out that the relationship between `x` and `f(x)` is that the output is equal to double the input. In algebra, this relationship is written as `f(x) = 2 * x`. Familiar, right?

Functions play a similar role in programming. JS Functions, like mathematical functions, perform transformations. They take input values and return an output value.

# The Document Object Model

In previous units, we've relied on `console.log` and `alert` to give feedback to users. Later in this unit we'll look at how we can provide more meaningful feedback and make our sites more "user friendly" by allowing users to interact with our site and see its contents update in real time.

Let's take a look at the following HTML page:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>To-Do List</title>
</head>
<body>
	<h1>Things To Do</h1>
	<ul>
		<li>Call Mom</li>
		<li>Take out the trash</li>
		<li>Return library books</li>
	</ul>
</body>
</html>
```

The browser pulls in this HTML document, parses it, and creates an object model of the page in memory. This model is called the **Document Object Model (DOM)**.

The DOM specifies that the browser should use a **DOM Tree** to structure this model:

![](/assets/chapter5/dom.png)

Each element in the HTML document is represented by a **DOM node**. You can think of a node as a *live object* that you can access and change using JavaScript. When the model is updated, those changes are reflected on screen.

We can get and set attributes for these nodes. Perhaps we want to add a class or update styling to change the background color for an element. We can also access and change the content – maybe we want to change the text in the third `li` to read "Return library books - DONE!" We can even add new nodes to or remove nodes from the page.

Once we get some functions under our belt we'll take a look at how we can use some of JavaScript's "built-in" functions to interact with the DOM and add more complex interactions to our sites.

Ready to dig in? [Let's take a look at functions.](02_lesson.md)
