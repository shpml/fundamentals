**WDI Fundamentals Unit 11**

---

# Collections: Arrays
## What is an Array?


An array is an ordered list of items, also known as **elements**, separated by commas and situated between square brackets `[]`. Arrays can contain different types of elements (like <code>["red", 42, "gorilla", false]</code>), but we generally use arrays to deal with elements of the same type.

###Finding Elements in an Array

The order of elements in an array matters. Let's find out why using the following example:

```javascript
var myFriends = ['ellen', 'mary', 'doug', 'pat'];
```

If we wanted to find the element `'mary'`, we would need to remember that it is the second element in the array.

In the array, the position of `'mary'` is identified by its index value (or just index).

As you can see, there are four strings (elements) contained within this array:
- The first element (index of 0) in the array is `'ellen'`.
- The second element (index of 1) is `'mary'`.
- The third element (index of 2) is `'doug'`.
- The final element (index of 3) is `'pat'`.

> **Note that the index for the first position in an array is always 0**. So, even though `'mary'` is the second element in the array, we would need to call it out using an index of 1.




Now that we know this index value, to find `'mary'`, we would simply write:

`myFriends[1]`

We could save what we found in a variable like so:

```js
var bestFriend = myFriends[1];
```

Changing an element in an array is just as easy; simply write an assignment operation as if you were assigning a value to a variable.

```js
myFriends[3] = 'steve';
```

Just like with a variable, this expression will evaluate to the value on the right.

### Test Yourself

Assuming that each of the following expressions is evaluated in order, what value will be printed out as a result of the `console.log` statement?

```javascript
var myNumbers = [4, 65, 0, 29];
myNumbers[0];
myNumbers[1] = 10;
myNumbers[2] = 5;
myNumbers[1] * 2;
console.log(myNumbers);
```
Confirm your answer by entering the code above in a new JS Bin session.

## Adding Complexity: Nested Arrays

In addition to storing numbers, strings, or Booleans as elements, arrays can also store *other arrays*.

Here's an example of what this can look like:

```javascript
var arrayOfArrays = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
```

You might also see it written like it is below; it's a bit more readable this way.

```javascript
var arrayOfArrays = [['a', 'b', 'c'],
                     ['d', 'e', 'f'],
                     ['g', 'h', 'i']];
```

Each element of `arrayOfArrays` *is itself an array*. Calling `arrayOfArrays[1]` will give us back the second array, <code>['d', 'e', 'f']</code>.

Of course, what we're probably most interested in are the inner elements (in this case, strings). We could probably do the following:

```javascript
var x = arrayOfArrays[1]; // Evaluates to ['d', 'e', 'f']
x[0]; // Evaluates to 'd'
  ```

But, the variable `x` there is unnecessary — it's just standing in for <code>['d', 'e', 'f']</code>. We can access that element directly from `arrayOfArrays` using the following syntax:

```javascript
arrayOfArrays[1][0]; // Evaluates to 'd'
```

If you imagine an array of arrays as a grid of values (like in the example above), you can think of that first index value as indicating your row and the second as indicating your column. Essentially, they are a set of coordinates.

### Test Yourself

Assuming that each of the following expressions is evaluated in order, what value will be printed out as a result of the `console.log` statement?

```javascript
var arrayOfArrays = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
arrayOfArrays[0][0];
arrayOfArrays[1][2];
arrayOfArrays[2][2] = 'z';
arrayOfArrays[2][1] = arrayOfArrays[1][0];
console.log(arrayOfArrays);
```

Confirm your answer by entering the code above in a new JS Bin session.

## Additional Array Features

In addition to containing multiple elements, arrays also have a number of built-in properties and functions that give them many useful abilities. Here are a couple:

###Finding and Accessing Elements in an Array

####.length

All arrays have a property called `length`, which tells us how many elements are currently present in the array. To access this value, simply tack on `.length` to the end of an array (or, alternatively, a variable containing that array). Here are some examples of `.length` in action:

```javascript
['a', 'b', 'c'].length;  // Evaluates to 3

var x = [10, 20, 30, 40];
x.length; // Evaluates to 4
```

One especially helpful benefit of knowing an array's length is that it allows us to easily find its last (or second-to-last, or third-to-last) element.

> **NOTE** Because the first element in an array has an index of 0, for an array of any length, the index of the last element will be equal to the length minus one.

```javascript
var team = ['ted', 'lem', 'phil', 'linda', 'veronica'];
team[team.length - 1];   // Evaluates to 'veronica'.
team[team.length - 2];   // Evaluates to 'linda'.
```

####.indexOf()
This function evaluates to the index of the first element in the array that matches the value in parentheses. If no match is found, the function evaluates to -1.

```javascript
var animals = ['bear', 'beetle', 'boa'];
animals.indexOf('boa');  // Evaluates to 2
animals.indexOf('bear'); // Evaluates to 0
animals.indexOf('bee');  // Evaluates to -1
```

###Adding and Removing Elements in an Array

####.push() and .pop()
`push` and `pop` are two related functions that allow you to either add an element to (`push`) or remove the last element from (`pop`) the end of an array. In particular, `push` a convenient way to build up an array over time - you're simply adding another item to the list.

```javascript
var ghosts = ['blinky', 'inky', 'pinky'];
ghosts.push('clyde');  // Evaluates to 'clyde'; `ghosts` is now ['blinky', 'inky', 'pinky', 'clyde'].
ghosts.pop();          // Evaluates to 'clyde'; `ghosts` is now ['blinky', 'inky', 'pinky'] again.
```

### Test Yourself

What will the following lines do?

```javascript
['a', 'b', 'c'].indexOf('b');
[true, false, false, true].length;
var x = ['paul', 'john', 'george']; x.push('ringo');
var y = ['soda', 'tart', 'weasel']; y.pop();
```

Confirm your answer by entering the code above in the JS Bin console.

> **NOTE** If you're interested in exploring more array functions, you can take a look at (and bookmark) [this page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) from the Mozilla Developer Network's JavaScript documentation. Try playing around with some of them on your own in JS Bin!

---

[Now, let's practice creating and editing arrays.](04_exercise.md)
