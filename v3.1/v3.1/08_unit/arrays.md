**WDI Fundamentals Unit 8**

---

# Arrays

So far we've learned about three types of data - strings, booleans, and conditionals.

In this lesson we'll take a look at how we can utilize arrays to start to create more complex data structures in JS.

What are arrays? Watch this video for an overview.

<iframe src="//fast.wistia.net/embed/iframe/upd8qxyabg?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>


As you learned in the intro video, variables cannot hold multiple values. 

However, with arrays we can store multiple values in an ordered list. The items in the list — known as **elements** — are separated by commas and situated between brackets `[ ]`.

#### Array Syntax

<img src="assets/arrays/array_syntax.png" width="350px">

Arrays are data structures, similar in concept to lists. For example:

``` js
var beverages = ["coffee", "tea", "hot chocolate", "milk"];
var leapYears = [2016, 2020, 2024, 2028];
```

They usually contain the same kind of data, and, in JavaScript, they can dynamically grow and shrink in size.

Arrays can also contain different types of data, such as:

``` js
var stuff = ["red", 42, "gorilla", false];
```

However, we generally use arrays to deal with elements of the same data type.


Arrays help us make the most out of our elements, allowing us to:

- Reorder elements.
- Identify the value of one element in the list by specifying its position.
- Go through the list item-by-item and manipulate each element.

#### Accessing Elements in an Array
Before we dive deeper into arrays, let's learn a little about **indexes**.

Items in an array are stored in _sequential_ order. Each element has an **index**, a number that tells us the position in the array where the element can be found.

Indexes allow you to access and update array values.

Take a look at this grocery list. Do you notice anything interesting about how these items are numbered?


<img src="assets/arrays/grocery_list.png" width="200">

You may have noted that the numbers start at 0 instead of 1.

JavaScript, like many programming languages, is _zero-based_, meaning that its numbering starts at 0 instead of 1.

So, when we start assigning index values to an array, the first position in the array will be `[0]`, the second will be `[1]`, and so on.

Take a look at the following example:

```javascript
var characters = ['Darth Vader', 'Princess Leia', 'Han Solo', 'Luke Skywalker'];
```

As you can see, there are four strings (elements) contained within this array:

- The first element (**index of 0**) in the array is `'Darth Vader'`.
- The second element (**index of 1**) is `'Princess Leia'`.
- The third element (**index of 2**) is `'Han Solo'`.
- The final element (**index of 3**) is `'Luke Skywalker'`.



>**Note** Note that the index for the first position in an array is always 0.

So, even though `'Princess Leia'` is the second element in the array, we would need to call it out using an index of `1`:

`characters[1]`

We could save what we found in a variable like so:

```js
var favoriteCharacter = characters[1];
```

And if we wanted to access `'Han Solo'`, the third element, we could access that element using the index `2`:

```js
var secondFavoriteCharacter = characters[2];

```

#### Updating Elements in an Array

Changing an element in an array is just as easy.

To access, or retrieve, a value from an array, we will use the array name, followed by the index number of the element we want to update, wrapped in square brackets.

We will then simply write an assignment operator as if we were assigning a value to a variable.

```js
characters[1] = 'Yoda';
```

In this example, we are replacing `'Princess Leia'`, or the element at index `1`, with `'Yoda'`. The updated array will look like this:

```js
['Darth Vader', 'Yoda', 'Han Solo', 'Luke Skywalker'];
```

### Test Yourself

Assuming that each of the following expressions is evaluated in order, what value will be printed out as a result of the `console.log` statement?

```javascript
var myNumbers = [4, 65, 0, 29];
myNumbers[0];
myNumbers[1] = 10;
myNumbers[2] = 5;
myNumbers[1] = 2 * 2;
console.log(myNumbers);
```
Confirm your answer by entering the code above in a new JS Bin session.

You may need to refresh the page if you cannot see the JS Bin Console.

<a class="jsbin-embed" href="https://jsbin.com/qiqufo/1/embed?console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.35.12"></script>

## Additional Array Features

In addition to containing multiple elements, arrays also have a number of built-in properties and functions that give them many useful abilities. Here are a couple:

#### `length` property

All arrays have a property called `length`, which tells us how many elements are currently present in the array. 

To access this value, simply tack on `.length` to the end of an array (or, alternatively, a variable containing that array). Here are some examples of `.length` in action:

```javascript
['John', 'Paul', 'Mary'].length;
// => 3

var numbers = [10, 20, 30, 40];
numbers.length;
// => 4
```

One helpful part of knowing the length of an array is that it allows us to easily find the last (or second-to-last, or third-to-last, etc.) element.

Because the first element in an array always has an index of 0, the index of the last element will be equal to the length of the array minus one.

```javascript
var favoriteAthletes = ['Michael Jordan', 'Mike Tyson', 'Babe Ruth', 'Muhammad Ali', 'Stephen Curry'];

favoriteAthletes[favoriteAthletes.length - 1];
// => 'Stephen Curry'.

favoriteAthletes[favoriteAthletes.length - 2];
// => 'Muhammad Ali'.
```

### Adding and Removing Elements in an Array

Because removing the last element and adding one more element are such common actions we have built in methods for them!

#### `push()` and `pop()`
`push()` and `pop()` are two related functions that allow you to either add an element to (`push()`) or remove the last element from (`pop()`) the end of an array. In particular, `push()` is a convenient way to build up an array over time &mdash; you're simply adding another item to the list.

```javascript
var ghosts = ['blinky', 'inky', 'pinky'];
ghosts.push('clyde');
ghosts;
// => ['blinky', 'inky', 'pinky', 'clyde']

ghosts.pop();
ghosts;
// => ['blinky', 'inky', 'pinky']
```


### Test Yourself

Complete the following steps in the JS Bin Console.

1.  Create an array of `iceCreamFlavors` with the following values: `'chocolate'`, `'vanilla'`, `'strawberry'`, and `'rocky road'`.
2. Find the length of the `iceCreamFlavors` array.
2.  Now replace `'chocolate'` with `'mint chip'`, using the correct index number (remember indexes start at 0 in JS).
3. Remove the last item, `'rocky road'`, from the array using the `pop()` method.
3. Add your favorite ice cream flavor to the array using the `push()` method.

You may need to refresh the page if you cannot see the JS Bin Console.

<a class="jsbin-embed" href="https://jsbin.com/qiqufo/1/embed?console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.35.12"></script>

Answer:

```js
var iceCreamFlavors = ['chocolate', 'vanilla', 'strawberry', 'rocky road'];

iceCreamFlavors.length;
// => 4

iceCreamFlavors[0] = 'mint chip';
iceCreamFlavors;
// => ['mint chip', 'vanilla', 'strawberry', 'rocky road'];


iceCreamFlavors.pop();
iceCreamFlavors;
// => ['mint chip', 'vanilla', 'strawberry']

iceCreamFlavors.push('cherry garcia');
iceCreamFlavors;
// => ['mint chip', 'vanilla', 'strawberry', 'cherry garcia']
```

> **NOTE** If you're interested in exploring more array methods, you can take a look at (and bookmark) [this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) from the Mozilla Developer Network's JavaScript documentation. Try playing around with some of them in the JS Bin Console above!

---

[Now, let's practice creating and editing arrays.](arrays-exercise.md)
