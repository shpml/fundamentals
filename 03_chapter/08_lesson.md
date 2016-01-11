**WDI Fundamentals Unit 3**

---

# Boolean Logic

At this point, we've covered most of what you should know about basic expressions. However, there are a few quirks and exceptions that we've (until now) glossed over, especially related to boolean logic. Let's take a closer look at some of them.

* We'll start with **undefined** and **null** values. These two values represent a lack of data.
* Next, we will dive into **truthy** and **falsey** - the result of Javascript's attempt to convert values at runtime.
* Finally: a challenge!

### Undefined
You've just opened a Javascript console. You want to define a new variable but aren't sure what the value is *just yet*.  

```javascript
var someData;
```
Without **assigning** a value to a variable, that variable becomes `undefined`. We can see this in real time:
```javascript
console.log(someData);
```
If we want to check to see if our variable is infact `undefined`, we may do so. Checking to see is a variable is `undefined` is important. It allows for you to verify that something exists before you use it (and thus keep from throwing errors).
```javascript
if (someData == undefined) {
  console.log('No definition found');
  someData = 'We are now assigning a value.';
}
```
We can also check for `undefined` using `typeof()`! This is because `undefined` is an Object that is immutable. If you'd like to learn more you should read [Mozilla's MDN entry for Undefined].
```javascript
// we need a new variable...
var anotherData;
if (typeof(anotherData) == 'undefined') {
  console.log('No definition found');
}
```


### Null
Null values are values that your decide have **no value**. *But why would I want to do this? Why not use Undefined?* Well, every new variable that has no value is `undefined`, right? What if we could use a value that also has **no value** but you can check against? Perhaps you need to work with a lot of variables and you want to *know* that even though it is empty, it still matters?

That's the purpose of **null**. It is designed to represent the *lack of a value*. Whenever variables are defined without any value, they are `undefined`. This can become tricky to troubleshoot over time and it is a catch-all for *everything without a value*. We can **specficy** our variables as `null` to represent there is no data.
```javascript
// we will define a variable with no value, or null
var playerScore = null;
```
We can then **evaluate** if our value is `null`:
```javascript
playerScore == null // 'The player has not scored anything.'
```
What if we are provided with a user's input to represent a player's actions on a timed game? In *Dance, Dance, Revolution* a player must perform an action at a precise interval. It streams a set of commands a player must *dance* to. These are timed to music. The actions stream across the screen and as they pass by the middle of the screen the player *must* perform an action (or they don't score a point). The game can evaluate the player's score in real time!
```javascript
var userInput = null;
userInput == null // no points.. this time
```

##### Evaluating Undefined and Null Values
What happens if we try to evaluate a variable that we haven't created or assigned value to? The answer is that JavaScript will usually let us do this, but it will evaluate that variable to one of the following special values to indicate that something's gone wrong.
* **`undefined`** is returned when a variable has been declared, but doesn't have any value assigned to it.
* **`null`** is actually a value that you can assign to a variable as a representation of "no value."


### 'falsey' / 'truthy'
We've seen in the first few lessons that some operators can behave differently depending on the kind of values that they are operating on. For example, in the expression `1 + 2 + 3 + 4`, the `+` operator is performing addition; however, in the expression <code>'Happy birthday, ' + 'Tom'</code>, the `+` operator is working with strings, so it performs a concatenation instead.

Another example of this is the logical operators NOT(`!`), OR (`||`), and AND (<code>&&</code>); although they're primarily used with boolean values, they can also accept inputs that are strings, numbers... pretty much anything. When this happens, the logical operators categorize their inputs as being either 'falsey' and 'truthy'. But what do these words mean?

To be **truthy**, a value is evaluated as true. The boolean value of `true` falls into this category. Any number that holds a value (greater than 0) will also be seen as true. If a string contains *any* contents, it will evaluate as true!

To be **falsey**, a value is evaluated as false. The boolean value of `false` is falsey. So is the number 0. Empty strings, `null`, and `undefined` all will evaluate to false as well.

In the real world, you'll sometimes need to evaluate values and you'll be given weird results. Perhaps if we want to check if we have a value from a user but we're not sure yet. That could evaluate as either truthy or falsey. What if we want to see if our user has added items to their shopping cart? That could also be truthy or falsy. While these may not come naturally at first they will feel like second nature before WDI is over. Here's a table to show you which kinds of values are considered truthy and falsey in JavaScript.

| 'Falsey'            |  'Truthy' |
|-                    |-          |
| `false`             | `true`    |
| 0                   | All numbers except 0, including 'Infinity' (what you get after dividing by 0) |
| Empty strings ('')  | All non-empty strings |
| Undefined, Null, and NaN ('Not A Number', a special type of numeric value) | Pretty much everything else |


In JavaScript, the boolean operators `!`, `||`, and <code>&&</code> follow the rules below to determine how to behave.
* NOT: If the input is "truthy", return `false`; if the input is "falsey", return `true`.
* OR: Return the first "truthy" value; if both values are "falsey", return the last "falsey" value.
* AND: Return the first "falsey" value; if both values are "truthy", return the last "truthy" value.

### Test Yourself
Can you predict how the following expressions will be evaluated? Check your answers in repl.it.
* `1 || true`
* `3 || null`
* <code>!('')</code>
* <code>false && undefined</code>
* <code>true && !0</code>
* `null || 3`

One of the most common use cases of this is when you're not sure if a variable has been assigned a value. Suppose that `x` represents some input that you've gotten from a user. If the user hasn't given any input, `x` might be `null`.

To compensate for this, we might write the expression `x = x || 10;`. If x has some 'truthy' value, the OR operator will evaluate to `x`, so it would be as if we wrote `x = x`. However, if x were `null`, the OR operator would evaluate to 10 (because `null` is 'falsey'). It's as if we've said "If x doesn't already have a value assigned, set it equal to 10". For that reason, this kind of operation is often called 'conditional assignment'.

---

[Here's another exercise for you](10_exercise.md) - give it a shot.
