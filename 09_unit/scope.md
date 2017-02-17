**WDI Fundamentals Unit 9**

---

# Scope

Now, we're going to take a look at one of the complexities that comes with using functions — **variable scope**.

We'll also dig deeper into how we can use our newfound knowledge of scope to make our scripts run faster and avoid variable naming conflicts.

## Global vs. Local Scope
Watch this short video for an overview of local vs. global variables and a helpful analogy to remember the difference between the two:

<iframe src="//fast.wistia.net/embed/iframe/bffc1s0pkf?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>

In JavaScript, where you declare a variable affects where that variable can be used within your code.

When we declare variables inside a function, those variables will only be accessible from within that function. This is known as **scope**.

You can think of the **scope** as the lifetime of the variable (where in the program the variable is born and where it dies or is discarded).

Let's look at the two different types of scope: **global** and **local**.

### Global Variables
Before you even write a line of JavaScript, you're in what is known as the **global scope**.

When a variable is declared **outside a function**, it is referred to as a **global variable**. A global variable has global scope, which means _all scripts and functions on a web page can access it_.

Let's take a look:

![](http://circuits-assets.generalassemb.ly/prod/asset/5015/Slide-7-Annotated.svg)

### Local Variables
Conversely, if a variable is declared inside a function, it is local to that function and therefore referred to as a **local variable**.

This also means it has **local scope**. When we have a variable with local scope, _it cannot be referenced outside of that function_, which means it cannot be called or used outside of the brackets in which it's contained.

```js
var sayHello = function () {
	var brother = "Bill";
	console.log("Hello " + brother);
};

sayHello();

```

Notice how the variable `brother` is now defined from _within the function_?  
This means it is now a local variable and can only be accessed from within that function.

### Test Yourself

Take a look at the code provided in the "JavaScript" panel in JS Bin.

Refresh the page if you don't see the JS Bin editor below.

<a class="jsbin-embed" href="http://jsbin.com/yecuja/embed?js,console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.40.3"></script>

Fix the code so that `"Hello Marie"` is logged to the console. After fixing the code in the "JavaScript" panel, hit the "Run" button in the "Console" panel to check your work.

[Here's another exercise for you](scope-exercise.md) - give it a shot.
