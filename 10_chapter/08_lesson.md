**WDI Fundamentals Unit 10**

---

#Accessing the DOM

#### A Closer Look at the DOM

We mentioned before that, when a browser retrieves the HTML for a web page, it makes a model of that page in memory. This model is called the DOM.

![](/assets/chapter5/dom.png)

The DOM is a *language-independent* model of the page. It is not a part of HTML or JavaScript but instead follows a separate set of rules.

The difference between HTML and the DOM can often be a little hard to grasp for those just starting out in programming. An HTML page is simply a text document written in a language the browser understands. It uses opening and closing tags to provide structure and give meaning to the content of the page.

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>To-Do List</title>
	<link rel="stylesheet" href="style.css">
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

The browser retrieves this document and creates a model of the page in memory. Most modern browsers come with tools that developers can use to look at the DOM's structure.

In Chrome, you can go to `View` > `Developer` > `Developer Tools` and click on the "Elements" panel to view the DOM tree.

![](/assets/chapter5/developer.png)

![](/assets/chapter5/thingstodo.png)

You might notice that, at this point, the DOM closely resembles our original HTML document. However, this is a *living* model of the page, made up of node objects that can be manipulated with JavaScript.

Maybe we want to use JavaScript to add a fourth list item to the page — "Feed the Cat." Then, perhaps we want to change the background color of the first list item to yellow using JavaScript. Lastly, we may want to change the text content of the third list item to "Return library books — DONE!"

Now the DOM looks pretty different from our original HTML file.

![](/assets/chapter5/thingstodo2.png)

JavaScript comes with some "built-in" functions that allow us to access and update these nodes. We can call on these functions using dot notation. These functions are no different than the functions we just covered, but they are more commonly known as **methods**.

Let's take a look at some of the methods available to us!

##Accessing Elements

First things first — before we can work with an element, we first need to find, or *select*, the DOM node that represents it.

In order to find an element, we need to search through the document. The syntax for searching for an element looks something like this:

```js
document.getElementById('main')
```

* `document` refers to the document object. Any time we want to find an element, or elements, we'll need to access them through the document object. This allows us to search the entire page.

* `.` ties the method on the right-hand side (`getElementById`) with the object on the left-hand side (`document`).

* `getElementById()` is the method we want to use to find an element. We'll take a look at the other methods available to us shortly. This method in particular lets us locate an element by the value of its `id` attribute.

* `'main'`: Just like with the functions we've learned about earlier in this unit, we can pass in parameters for these methods to use. In this case, we want to find an element with an `id` of `main`.

> **NOTE** Using proper syntax here is important! These methods are case sensitive. `getElementByID` (with a capital D) will not work and instead throw an error.


###Selecting an Individual Element

There are a couple of methods we can use to find an individual element.


####`getElementById()`

The fastest route to finding any single element is `getElementById()`. Because `id`s are unique and two elements cannot have the same value for an `id` attribute on any given HTML page, this query allows us to quickly find an individual element.

HTML:

```html
<div id="sidebar">
	<h1>Related Articles</h1>
	<ul>
		<li>Article One</li>
		<li class="special">Article Two</li>
		<li>Article Three</li>
	</ul>
</div>
```


JavaScript:

```js
var sidebar = document.getElementById('sidebar');
```
This will find the element with an `id` of `sidebar` and save it to a variable.

> **NOTE** If we'd like to work with that element multiple times, a variable should be used to store, or **cache**, the results of our query. When we store an element in a variable, what we are doing behind the scenes is storing a reference to the location of that element in the DOM tree. We can then use any methods we would normally use on an element on that variable.

---

####`querySelector()`

This method allows us to use our CSS selector syntax to find an element. If there are multiple elements on the page matching the selector, it will return the *first* of the matching elements. It is important to note that this a recent addition to the DOM and is not supported by older browsers.

```js
document.querySelector('.special')
```

This will return the first element on the page with a class of `special`. You can use any of your CSS style selectors as a parameter.

Other examples:

```js
document.querySelector('#sidebar') // This will find the element that has an id of sidebar.
document.querySelector('ul > li') // This will find the first li that is a direct child of the ul.
```


###Selecting Multiple Elements

Sometimes we'll want to find and work with many elements at once. There are several methods we can use that will return a NodeList, or list of node objects, we can manipulate.

For each example below, you can use this HTML snippet as a reference:

```html
<div id="sidebar">
	<h1>Days of the Week</h1>
	<ul>
		<li>Monday</li>
		<li class="special">Tuesday</li>
		<li class="special">Wednesday</li>
		<li>Thursday</li>
		<li>Friday</li>
		<li>Saturday</li>
		<li>Sunday</li>
	</ul>
</div>
```

___

####`document.getElementsByClassName()`

This method will select all elements with a given class attribute.

```js
document.getElementsByClassName('special')
```
This method will return any elements with the class `special`. In the example above, it will return a NodeList containing the second and third list items, as they both have the class `special`.

---


####`document.getElementsByTagName()`

This method will locate all elements that match a given tag name.

```js
document.getElementsByTagName('li')
```
Here, this query returns all `li` elements. The NodeList will contain all seven `li`.

___



####`document.querySelectorAll()`

Similar to our `querySelector()` method, this method lets us use our CSS selector syntax to select one or more elements.

```js
document.querySelectorAll('.special')
```
This will return any elements with the class `special`. In the example above, it will return a NodeList containing the second and third list items, as they both have the class `special`.

___

####Working with NodeLists

Any time there is even the *potential* for a method to return more than one element, such as with `getElementsByClassName()`, `getElementsByTagName()`, and `querySelectorAll`, a NodeList will be returned, *even if only one element is found that matches the query*.

These NodeLists are **collections** that are numbered, similar to the arrays we'll be looking at in Unit 11.

When we get this list, we can select a single item to work with using array syntax — a set of square brackets (`[]`).

For example, above we saw that `document.getElementsByTagName('li')` returned seven list items. The NodeList that was returned would look like this:

|  Index      |  Element  |
|:-------:    |:-------:|
| 0      | `<li>Monday</li>` |
| 1     | `<li class="special">Tuesday</li> `  |
| 2   | `<li class="special">Wednesday</li>`    |
| 3      | `<li>Thursday</li>`   |
| 4     | `<li>Friday</li>`   |
| 5   | `<li>Saturday</li>`  |
| 6      | `<li>Sunday</li>`  |

Note how each node has an index number associated with it. These indexes are *zero based*, meaning the first node has an index of 0, the second node has an index of 1, etc.


To locate the fourth item in that NodeList, `<li>Thursday</li>`, we could use the following syntax:

```js
document.getElementsByTagName('li')[3].className = 'special'
```
Directly after the `getElementsByTagName('li')`, we have the index number of the item we want to locate in square brackets, `[3]`.

This would find the fourth list item and change its class attribute to `special` (We'll take a look at the `className` method shortly).

We could also use a loop to iterate through the elements in the NodeList and do something with each.

For example:

```js

var listItems = document.getElementsByTagName('li');

for (var i = 0; i < listItems.length; i++) {
	listItems[i].className = 'day';
}

```
This would loop through the NodeList and change the class name for each item to `day`.

##Traversing the DOM

Once we've selected an individual element, we can then either work with that element or select another element based on their relationship. You'll often hear this referred to as **traversing the DOM**.

In an HTML document, elements can be nested inside of other elements.

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

Here, we have three `li` elements enclosed within opening and closing `ul` tags.

In programming, relationships between the document and its elements are often described in terms similar to those one would use to describe a family tree.

In our example, we could describe the relationship between the `ul>` element and the three `li` elements as that of a *parent* and *children*, as the `li` elements are enclosed within the `ul`.

We can use properties of an element to find and access related elements. Let's take a look at some examples below.

####`parentNode`

The `parentNode` property will locate the parent of an initial selection.

```js
document.getElementsByTagName('li')[0].parentNode
 //=> <ul class="some-class-name">...</ul>
```

This syntax will return the parent of the first `<li>` element, which, in this case, is the `<ul>` element, as the `<ul>` element wraps all the `<li>` elements.

Other properties available to us include:
* `previousSibling`, which will find the previous sibling of a selected element.
* `nextSibling`, which will find the next sibling of a selected element.
* `firstChild`, which will find the first child of a selected element.
* `lastChild`, which will find the last child of a selected element.


##Manipulating the DOM

This is where the fun starts! Now that we've done all that hard work finding our elements, we can actually do something with them! And the possibilities are endless.

In the following examples, we'll be using this HTML page as a reference:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>To-Do List</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<h1>Things To Do</h1>
	<ul>
		<li>Call Mom</li>
		<li>Take out the trash</li>
		<li id="important">Return library books</li>
	</ul>
</body>
</html>
```

When it is first loaded into the browser, it will look like this:

![](/assets/elkwebdesign/example_lesson_08.png)

### Accessing and Updating Content

There are many properties and methods that allow us to read from or update the contents of a DOM node. Let's take a look at a couple now, and then we'll expand on others in the next unit.

####**`innerHTML`**

We can use the `innerHTML` property to get and set content for an element.

For example, if we want to change the HTML content for the first `<li>`, we could execute the following:

```js
document.getElementsByTagName('li')[0].innerHTML = 'Email <a href="mom@gmail.com">Mom</a>.';
```
This would find the first `<li>` and change the HTML content to `Email <a href="mom@gmail.com">Mom</a>.`. The result will look like this:

![](/assets/elkwebdesign/innerHTML.png)

If we simply want to retrieve the HTML content to use later, we can save it in a variable like so:

```js
var firstListItem = document.getElementsByTagName('li')[0].innerHTML;
```

####**`textContent`**

This property allows us to get and set the *text* content for an element.
For example:
```js
document.getElementById('important').textContent = 'Done!'
```

This code would change the text content of the `<li>` with the id `important` to 'Done!'.

![](/assets/chapter5/thingstodo5.png)

---

[On to the next lesson!](10_lesson.md)
