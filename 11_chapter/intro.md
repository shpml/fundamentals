**WDI Fundamentals Unit 11**

---

#####By the end of this unit, you'll be able to:
* Create collections — arrays and objects — and retrieve values from them.
* Operate on all the elements within a collection using loops and iterators.
* Explain the difference between arrays and objects.

---

Congratulations, you're nearly to the end of WDI Fundamentals!

In Unit 10, you learned to create your own functions that generate specific behaviors. For example, if you wanted to get the average of three variables, `x`, `y`, and `z`, you could write the following code:

```javascript
var avgOfThree = function(x, y, z) {
    return (x + y + z) / 3;
}
```

However, this is a *very* specific use case. What if you want to be able to find the average of 10 numbers? Try modifying [the code in JS Bin](https://jsbin.com/wajevud/edit?js,console) like so:

```javascript
var avgOfTen = function(a, b, c, d, e, f, g, h, i, j) {
    return (a + b + c + d + e + f + g + h + i + j) / 10;
}
```
OK, now try writing the function `avgOfOneHundred()`.

Or don't. It would be exhausting to write 100 identical variations of this function. The more variables we want to keep track of, the more code we have to write. Now, the length of our code is growing even though our program is not growing in complexity.

To keep our code DRY (as we learned in the [last unit](../05_chapter/05_lesson.md)), we should hand our function a *set* of values (of any size) and tell it to work with that.

We can accomplish this using a type of data called a **collection**.

Collections, as the name implies, are groups of (generally similar) values.

Here are some examples of real-world collections:
- A list of groceries to buy
- A stack of books to read
- A queue of people waiting to get into a movie

In this unit, we'll see how all of these examples (and more) can be turned into both ordered and unordered collections, and why knowing how to create collections is such an essential programming skill.


[Let's get started.](02_lesson.md)
