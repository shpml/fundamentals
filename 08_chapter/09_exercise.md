**WDI Fundamentals Unit 8**

---

##![Your Turn](../assets/exercise.png) Your Turn

You should see the following code in the editor window:

```javascript
var x;
/* Your Expression */
```

If you don't see the JS Bin below, please refresh the page.

<a class="jsbin-embed" href="http://jsbin.com/qacobi/embed?js,console&600">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.12"></script>

1. Write an expression that assigns `x` to the variable `value`, so long as `x` is not `undefined` or `null`;
if `x` is `undefined` or `null`, the expression should set `value` to 100.
`x` is equal to `undefined` when no value has been assigned to it (e.g. `var x;`), but you could also assign it the value of null (`var x = null;`), and both of these values would be "falsey".
After you click the "Run" button, you can test this in the Console tab by typing `value` and then `enter` or `return`. Test your expression for several different values of `x`, including `null` - does it behave like you expect?

2. Next, replace that expression with one that assigns `null` to `value` if `x` is `null` or `undefined`, but otherwise assigns 50 (irrespective of `x`'s actual value).

3. Finally, write an expression that assigns `true` to `value` if `x` is an empty string (`''`) but otherwise assigns `false`.

Were you able to get all of your expressions to work? If so, nice job!

> *Stuck? Check out the [solutions](../exercise-solutions.md) to see what you can do.*

---

Ready for another quiz? [Here we go!](11_quiz.md)
