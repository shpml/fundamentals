**WDI Fundamentals Unit 10**

---

# Methods


## What are Methods?
Once you know how to create an object with properties, you can try using methods.

If a function is part of an object, it becomes a **method**.

Methods are used to represent how people interact with an object in the real world. In other words, **methods** are the actions that can be performed on objects.

We can use methods to:

1.  Retrieve the values of an object's properties to find out something about that object.
3.  Update the values of an object's properties.

Consider our bicycle example. The following actions are common ways that humans interact with motorcycles:

| METHOD  |
|:-:    |


| `start()` |
| `stop()`  |
| `brake()`  |
| `accelerate()` |
| `getMakeAndColor()` |

We can use methods to retrieve the values of an object's properties (such as the motorcycle's model) or change its properties (such as when we start, stop, brake, or accelerate our bike).

## Creating an Object with Methods

Let's take a look at how we can create an object with methods.

Here's how we would write the bicycle object with one of the methods detailed above:

```js
var myBicycle = {
  // Properties
  color: "brown",
  model: "DL165",
  make: "Raleigh Competition",
  year: 1976,
  
  // Method
  accelerate: function () {
  	console.log("Zoom zoom!");
  }
};
```


Let's look at the syntax breakdown:

*   To add a method, we just set the value of a property equal to a function. In the example above, `accelerate` is the property name, which has a function (which logs "Zoom zoom!") as a value.
*   Inside the function, we place any code we want to run when the method is _called_. We'll cover how to call a method in just a moment.


## Accessing Methods
Next, let's talk about accessing methods. We will use **dot notation** to access methods for our objects.

If we wanted to access — or **call**, our `accelerate` method for our `myBicycle` object — we could do so using the following syntax:

```js

var myBicycle = {
  // Properties
  color: "brown",
  model: "DL165",
  make: "Raleigh Competition",
  year: 1976,
  
  // Method
  accelerate: function () {
  	console.log("Zoom zoom!");
  }
};

// Here we are "calling" the accelerate method.
myBicycle.accelerate(); 
// => "Zoom zoom!"
```

* Here, we use the object name `myBicycle`, followed by a period, followed by the method name, followed by parenthesis.
* Think about it this way, what is `myBicycle`? An object! What is `myBicycle.accelerate`? A function! How do you invoke a function? You add `()`s to the end of the function name! So in order to invoke a method, you write `myBicycle.accelerate()`;


### Test Yourself

Let's practice!

Refresh the page if you don't see the JS Bin Editor below.

<a class="jsbin-embed" href="http://jsbin.com/sepewef/embed?js,console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.41.0"></script> 

1. In the "JavaScript" panel, add a method `makeNoise` to the `pet` object.
2. Inside the method, add the following code: `console.log("Woof!")`.
3. Now call the `makeNoise` method using the following code: `pet.makeNoise();`
	
> Check your answer in JS Bin by hitting the "Run" button in the "Console" panel.  You should see `"Woof!"` displayed in the console.

<br>

> Answer: 
> 
> ```js
>var pet = {
>  name: "Rover",
>  species: "dog",
>  favoriteToy: "tennis ball",
>  age: 5,
>  makeNoise: function () {
>  	console.log("Woof!");
>  }
>};
>
>pet.makeNoise();
>
>```

## `this`

Let's dive a little deeper into methods by taking a look at the `this` keyword. 

Take a look at the code inside the `getMakeAndColor` method below:

```js
var myBicycle = {
  // Properties
  color: "brown",
  model: "DL165",
  make: "Raleigh Competition",
  year: 1976,
  
  // Methods
  getMakeAndColor: function () {
  	console.log("My bicycle is a " + this.color + " " + this.make);
  },
  accelerate: function () {
  	console.log("Zoom zoom!");
  }
};
```

See the `this` keyword?

In the context of our objects, `this` is used in place of the object name to refer to the object.

`this` in JavaScript is very similar to "this" in the English language. If we want to order a cake at a bakery, we might go to the counter, point at a specific cake and say, "I want _this_ cake."

Here, we are using "this" to refer to a specific object. We might point at the cake and say _this_ cake has chocolate frosting. Or, _this_ cake has sprinkles on top.

In JavaScript, when we use `this` we are also referring to one specific object. In a method, `this` refers to the object containing the function.

For example, in the method above, `this` refers to the `myBicycle` object that contains the function/method `getMakeAndColor`.

Because `this` refers to the `myBicycle` object, using it would be the same as writing out:

```js
console.log("My bicycle is a " + myBicycle.color + " " + myBicycle.make);
```

### Test Yourself

- What does `this` refer to in the following scenario and why?
- What will be logged to the console?


```js
var record = {
  artist: "The Spinners",
  lyrics: "Whenever you call me, I'll be there",
  playSong: function () {
    console.log(this.lyrics);
  }
};
```

> Answer: `this` refers to the `record` object.
> 
> The console will log: `"Whenever you call me, I'll be there"`.


Think you've got it? [Here's another exercise for you](methods-exercise.md) - give it a shot.
