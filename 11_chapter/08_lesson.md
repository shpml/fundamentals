**WDI Fundamentals Unit 11**

---

# Collections: Objects

## Drawbacks of Ordinary Arrays

So far, all of the arrays we've seen have stored and managed their elements by their indices. This is a convenient way of managing things, but it also has some disadvantages. Consider the following:

Say we have a line of people waiting to buy the latest iPhone. We'll model these people using the array below.

```javascript
var friends = ['Rachel', 'Monica', 'Phoebe', 'Joey', 'Chandler', 'Ross'];
```

We can refer to each person by their position in line: Rachel is first (index: 0), followed by Monica (index: 1), Phoebe (index: 2), and so on. Great! This is an easy way to keep track of each person's location.

But, suppose that Monica decides she's waited long enough for an iPhone and leaves the line to get an Android phone instead. What happens when she leaves?

```javascript
friends.splice(1, 1); // ["Monica"]
friends; // ['Rachel', 'Phoebe', 'Joey', 'Chandler', 'Ross']
```

Well, Rachel stays in the same place. But suddenly, Phoebe isn't at index 2 - she's now at index *1*, while *Joey* is now the one at index 2! In fact, every person after Monica ends up taking one big step forward in line, throwing all of our references into, "disarray," as it were.

This system does a good job of keeping track of everyone's order, but its biggest drawback is that our method of referencing any element is tied to its position *rather than the element itself*. Fortunately, there are other ways of keeping track of elements - for example, labeling them.

Let's imagine that every person in this totally hypothetical office has a "lunch" they keep in the fridge.

|  Label    |  Value          |
|:-------:  |:-------:        |
| Matt    | tuna sandwich |
| Floyd   | salad         |
| Shannon | soup          |
| Josh    | pasta         |

If Floyd eats his lunch, does it affect anyone else's food? Nope! The *association* between each label (read: reference) and the food (read: value) it refers to is preserved.

|  Label      |  Value  |
|:-------:    |:-------:|
| Matt      | tuna sandwich |
| Floyd     | null            |
| Shannon   | soup          |
| Josh      | pasta         |

This is the basic principle underlying an **object** (also known in some programming languages as a *hash*). An object *associates* each value with a reference called a **key** (in this case, the person's name). It's important to note that, because each key-value pair is independent of any of the others, the array doesn't keep a consistent "order" to its elements.

As you start building applications, you'll find many situations where you'll want to associate keys to values.

## Objects in JavaScript

Much like a normal array is written using square brackets (`[...]`), an object is written using curly braces (`{...}`). Key-value pairs are separated by commas, just like individual values are in a normal array. Within each of these pairs, keys are separated from their values by colons (`:`).

Here's what the "lunch" table above might look like as an object:

```javascript
var lunches = { 'Josh' : 'pasta',
                'Floyd' : 'salad',
                'Matt' : 'tuna sandwich',
                'Shannon' : 'soup' };
```

Elements in objects are accessed and manipulated in the same way as elements in normal arrays - using square brackets (`[...]`). In this case, if we wanted to access the value stored under 'Matt', we could type:

  ```js
  lunches['Matt']
  ```

If we wanted to alter that value, we could perform an assignment, just like we might with a normal array.

  ```js
  lunches['Matt'] = 'turkey sandwich'
  ```

Adding new key-value pairs looks just like assignment - you simply set your new key as the reference, and assign your new value as the value.

  ```js
  lunches['Elena'] = 'meatloaf'
  ```

Keys are strings, and basically anything can be used as a value (including an array, or even another object). Here's an example of all of the above:

```javascript
var candidateData = {
  'name' : "John Doe",
  'age' : 32,
  'isFullTime' : true,
  'pastEmployers' : ['Microsoft','Google','Amazon'],
  'yearsExperience' : {
    'ruby' : 3,
    'java' : 6,
    'javascript' : 5
    }
  }
```
>**NOTE** Ordinary arrays and objects handle nesting in the exact same way. If we wanted to retrieve the number of years of JavaScript experience from the array above, we would write <code>candidateData['yearsExperience']['javascript']</code>.

### Test Yourself
Consider the following object:

```javascript
var pet = {
  'species' : 'iguana',
  'gender' : 'female',
  'age' : 12,
  'name' : 'Godzilla'
  }
```
What code could we write to perform the following tasks?
* Retrieve the value for 'name' from the object.
* Assign the value for 'age' to 13.
* Add a new key, 'favoriteFood', with the value 'crickets'.

>**NOTE** You'll learn more about objects throughout WDI and use them for far more complex use cases than tracking lunches.

---

[Let's move on to one last exercise - this time on objects.](10_exercise.md)
