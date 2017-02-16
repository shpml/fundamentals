**WDI Fundamentals Unit 10**

---

# Creating Objects

We kicked off this unit with a look at how objects can be used to connect keys with values in JavaScript.

Each object can have its own **properties** and **methods**.

In this lesson we'll explore how we can create an object with properties. In the next lesson we'll learn how to add methods to our objects.

## Properties
**Properties** are characteristics associated with an object. In other words, properties tell us about an object.

Let's look at an example:

If you were to describe a bicycle, you might include its color, make, model and year.

Each property has a name and a value, and each name/value pair tells us something about that individual object.

| NAME  | VALUE  |
|:-:    |:-:     |
| `color` |  `"brown"` |
| `model`  |  `"DL165"` |
| `make`  |  `"Raleigh Competition"` |
| `year`  |  `1976` |
 


## Creating Objects
Now we'll learn how to create an object using **literal notation**.

Here's how we would write the bicycle object we detailed above using literal notation:

```js
var myBicycle = {
  color: "brown",
  model: "DL165",
  make: "Raleigh Competition",
  year: 1976
};
```

Let's look at the syntax breakdown:

*   Our object is contained within curly braces `{ }`
*   We are storing our object in a variable, called `myBicycle`
*   We separate each key from its value using a `:`
*   To add a property, we use a property name, such as `color`, `model`, or `make`, followed by a `:`, followed by the corresponding value: `"brown"`, `"DL165"`, or `"Raleigh Competition"`.


## Accessing Properties Using Dot Notation
Now, let's turn to accessing properties.

We can _get_ and _set_ object properties using **dot notation**.

When working with objects, we can access values using the object name, followed by a dot `.`, followed by the name of the property we want to access:

```js
myBicycle.make;  
// => "Raleigh Competition"

myBicycle.color; 
// => "brown"
```

## Updating Properties Using Dot Notation
We can also update values using dot notation.

To do so, we use the name of the object (in this case, `myBicycle`), followed by a dot `.` followed by the name of the property we want to update (in this case, `color` or `year`).

We then use the assignment operator (`=`), followed by the new value.

```js
myBicycle.color = "white";
myBicycle.year = 1977;
```

## Adding New Properties
The syntax we use to update a property can also add a new one. If the property we are trying to update doesn't yet exist, it will be added automatically.

```js
myBicycle.frameSize = 23.5;
```

We've now added a new property to specify a frame size for our bicycle!



### Test Yourself

Let's practice!

Refresh the page if you don't see the JS Bin Editor below.

<a class="jsbin-embed" href="http://jsbin.com/qozaziqodu/edit?js,console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.40.3"></script>

1\.  In the "JavaScript" panel, create an object called `pet` that has the following properties:

| NAME  | VALUE  |
|:-:    |:-:     |
| `name ` |  `"Rover"` |
| `species`  |  `"dog"` |
| `favoriteToy`  |  `"tennis ball"` |
| `age`  |  `5` |
	
> After each step, check your answer in JS Bin by hitting the "Run" button in the console panel, and then typing `pet` into the console panel and hitting the enter/return key.

2\. Now, how would you assign `6` as the value for `age`?

3\. How would you add a new property, `favoriteFood` using the value `"bacon"`?

4\. What code could we write to retrieve the value for `name` from the object and store this value in a variable `petName`?

_Check your answer by hitting the "Run" button in the console panel, and then typing `petName` into the console panel and hitting the enter/return key._

<br>
<br>

> Answers: 
> 
> 1)
> 
> ```js
> var pet = {
>  name: "Rover",
>  species: "dog",
>  favoriteToy: "tennis ball",
>  age: 5
>};
>```
>   
> 2) `pet.age = 6;`
> 
> 3) `pet.favoriteFood = "bacon";`
> 
> 4) `var petName = pet.name;`
> 


<br>



Think you've got it? [Here's another exercise for you](creating-objects-exercise.md) - give it a shot.
