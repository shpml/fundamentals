**WDI Fundamentals Unit 11**

---

# Collections Cheat Sheet

## Collections: Arrays
### What is an Array?
  * An array is an ordered list of values. These values can be strings, Booleans,
  numbers — even other arrays.
  * The values within an array, known as **elements**, are accessed by their
  position within the array (via a value called an **index**).
  * An array can be defined by enclosing a list of values within square brackets
  like so: <code>var myArray = ['a','b','c','d']</code>.
  * To retrieve the value at some index (`i`) from an array, add `[`*i*`]` to the
  end of the array (e.g., `myArray[2]`).
  * To edit the value at some index (`i`), simply act as if you were assigning a
  variable (e.g., <code>myArray[1] = 'f'</code>).

### Adding Complexity: Nested Arrays
  * As mentioned above, arrays can contain other arrays as elements. The process of putting arrays inside other arrays (or just generally, putting items inside other items) is called **nesting**.
  * To retrieve a value from a nested array, use one set of square brackets for every level of nesting. The first set should hold the element's index in the outermost array, the second set should hold the index in the next-outermost, etc. Consider how you would work with following nested array:

  ```javascript
    var myNestedArray = [['a','b','c'],
                         ['d','e','f'],
                         ['g','h','i']];
  ```
  You could access the element `'f'` by writing `myNestedArray[1][2]`.
  * Editing a value in a nested array is exactly like editing a value in a non-nested array, the only difference is how you reference the value you want to change (e.g., <code>myNestedArray[0][3] = 'z';</code>).

### Additional Array Features
  * In addition to storing a set of values, arrays also have a number of in-built properties and functions they can use.
  * `.length` gives you the length of the array you call it on.
  * `.push()` adds a new element to the end of an array and returns that element.
  * `.pop()` removes the last element in an array and returns that element.
  * `.indexOf()` searches within your array for the first element that matches its parameter and returns the index of that match. If no match is found, it returns -1.

## Iterating Over Arrays
### Iterating with Loops
  * `for` loops are an easy way to iterate through an array. The following will execute an arbitrary function, `someFunction`, for every element in an array, `myArray`, working from left to right.

    ```javascript
      for (var i = 0; i < myArray.length; i += 1) {
        someFunction(myArray[i]);
      }
    ```
  * To change the way you iterate through the array, simply change the settings of your `for` loop.

## Collections: Objects
### Drawbacks of Ordinary Arrays
  * A typical array works by referencing elements solely based on their positions, e.g., "the first element, the second element ..." etc. But, if the elements are ever rearranged, all of the references to specific elements need to be updated.
  * An object generates an enduring relationship between a reference (called a **key**) and the value to which it refers. Each key-value pairing is totally independent of any others.
### Objects in JavaScript
  * An object can be defined by enclosing a list of key-value pairs in curly braces (`{...}`). Each key-value pair is written as `someKey : someValue`, and each pair is separated by commas.
  * To retrieve the value that's tied to a particular key, add `[`*key*`]` to the end of the object, e.g., <code>myObject['myKey']</code>.
  * To edit the value that's tied to a particular key, assign a value just like you would for an ordinary array, e.g., <code>myObject['myKey'] = 'aValue'</code>.
  * Adding a new key-value pair to an object is easy - it looks just like an assignment operation, e.g., <code>myObject['someNewKey'] = 'someNewValue'</code>.
  * Nesting for objects works *exactly* the same as it does for ordinary arrays.

---
[It's project time!](12_assessment.md)
