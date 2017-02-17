**WDI Fundamentals Unit 9**

---

##![Your Turn](../assets/exercise.png) Your Turn

### Scope Exercise

In this challenge, we'll be taking a look at a few cases where we have errors in our code due to variable scope. Are you ready?

---

#### Instructions

0. Write the code to perform the actions listed below in the **"JavaScript"** panel in the JS Bin editor. 
0. If you don't see the JS Bin below, please refresh the page.
0. Click "Run" to run the code in the "Console" panel.
0. After clicking "Run", to check variable values, type the variable name in the **"Console"** panel on the right and hit enter/return.


#### Let's get started!

1\. We are getting a reference error when we try to log `"Hello Marie"` to the console. See if you can move the `console.log` statement to where it can access the variable `name`.

<a class="jsbin-embed" href="http://jsbin.com/qirocu/embed?js,console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.41.0"></script>


2\. Each time the `scorePoint` function runs, one point should be added to `total`. Here we are calling the `scorePoint` function three times, so the final `total` should be `3`. But each time the function is called, `total` is being reset. Which statement could you move outside the function so that `total` is set to `0` when the page first loads, but is incremented by one every time the `scorePoint` function is called?

<a class="jsbin-embed" href="http://jsbin.com/beduyeg/embed?js,console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.41.0"></script>


> *Stuck? Check out the [solutions](../exercise-solutions.md#defining-calling-functions) for assistance.*

---
[Feeling Confident? Test yourself.](functions-quiz.md)
