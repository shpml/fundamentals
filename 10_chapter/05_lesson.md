**WDI Fundamentals Unit 10**

---

#Functional JavaScript

Functions can also be used as procedures – miniature, self-contained programs that are executed one line at a time whenever the function is called.

When you have a set of tasks that need to be repeated, it can often be helpful to turn that set into a function and call it each time the procedure should run.

For instance, let's consider a French toast recipe. Every time a soaked slice of bread is ready to be cooked, we need to:


> Transfer the slices to a frying pan, and cook on a medium-low heat until brown on the bottom.
>

Rather than spell this out explicitly each time, we could write a function (say `cookSoggyBread()`) to handle these instructions for us and simply call it any time bread slices need to be cooked.

## Problem Solving with Functions

Let's look at a practical example. Say that we're working on a [Tic-Tac-Toe game](http://en.wikipedia.org/wiki/Tic-tac-toe).

We're not going to build the actual game, just write out the logic that would determine its winner.

In Tic-Tac-Toe, there are nine possible values (one for every cell on the board):

```
| a | b | c |
| d | e | f |
| g | h | i |
```

Each of these values will start as `null`, until a user assigns them a new value, either 'o' or 'x'.

To play around with this invisible Tic-Tac-Toe board, we've provided some code:

```javascript
var cellValue = function(key) {
  switch(key) {
    case 'a': return null;
    case 'b': return null;
    case 'c': return null;
    case 'd': return null;
    case 'e': return null;
    case 'f': return null;
    case 'g': return null;
    case 'h': return null;
    case 'i': return null;
    default : return null;
  }
}
```

To assign a value (`x`, `o`) to any cell on the board, edit the return value for the corresponding case. For example, if you want the board to read:

```
| null | null |   x  |
| null |   o  | null |
| null |   o  |   x  |
```

You would edit the switch statement like so:

```javascript
var cellValue = function(key) {
  switch(key) {
    case 'a': return null;
    case 'b': return null;
    case 'c': return 'x';
    case 'd': return null;
    case 'e': return 'o';
    case 'f': return null;
    case 'g': return null;
    case 'h': return 'o';
    case 'i': return 'x';
    default : return null;
  }
}
```

###Who is the Winner?

Now, let's write a function that determines the winner based on the values of a, b, c, d, e, f, g, h, and i.

We'll call it `getWinner`, and it will give us back either 'x' (if X has won), 'o' (if O has won), or `null` (if neither side has won).

```javascript
var getWinner = function() {
}
```

So, where do we go from here?

One way to determine the winner might be to check whether X has won and then to check whether O has won. And what if two functions existed that would determine this for us?

We could call them `winnerIsX` and `winnerIsO`. `winnerIsX` could give us back `true` if X has won and `false` if it hasn't. If such functions existed, we could rewrite `getWinner` like this:

```javascript
  var getWinner = function() {
    if (winnerIsX()) {
      return 'x';
    }
    if (winnerIsO()) {
      return 'o';
    }
    return null;
  }
```

OK! Now we're getting somewhere. Instead of solving one big problem, we're solving two smaller problems. So, how do we determine whether X or O won?

###Determining if `x` has won

Let's first focus on `winnerIsX`.

In Tic-Tac-Toe, there are three possible ways X can win:
1. All cells in a row contain an `x`.
2. All cells in a column contain an `x`.
3. All cells in a diagonal contain an `x`.

Wouldn't it be great if we had functions to determine these, too? We could call them `winsRowX`, `winsColumnX`, and `winsDiagonalX`.

In this case, X would win if there were a row victory OR a column victory OR a diagonal victory, so, to determine `winnerIsX`, we could write the following:

```javascript
var winnerIsX = function() {
  return winsRowX() || winsColumnX() || winsDiagonalX();
}
```

You can't execute anything yet, but stick with us – we only have a few more tiny problems to solve!

####Winning by Rows

Let's look at `winsRowX` – what does it actually mean to win a row?

According to our cell key from earlier, there are three cells in a row; the first row contains `a`,`b`, and `c`; the second row contains `d`,`e`, and `f`; the third row contains `g`,`h`, and `i`.

If any of these three sets are all equal to `x`, then X has won via a row.

Let's dive just one level deeper, with a function to test if any one of the three rows are equal to `x` (Let's call it `allThreeX`).

```javascript
var winsRowX = function() {
  return allThreeX(cellValue('a'), cellValue('b'), cellValue('c')) ||
  		allThreeX(cellValue('d'), cellValue('e'), cellValue('f')) ||
  		allThreeX(cellValue('g'), cellValue('h'), cellValue('i'));
}
var allThreeX = function(cellOne, cellTwo, cellThree) {
}
```

####Winning by Columns and Diagonals


We can also use `allThreeX` to write functions for `winsColumnX` and `winsDiagonalX`. This would produce the following code:

```javascript
var getWinner = function() {
  if (isWinnerX()) {
    return 'x';
  }
  if (isWinnerO()) {
    return 'o';
  }
  return null;
}

var isWinnerX = function() {
  return winsRowX() || winsColumnX() || winsDiagonalX();
}

var winsRowX = function() {
  return allThreeX(cellValue('a'), cellValue('b'), cellValue('c')) ||
         allThreeX(cellValue('d'), cellValue('e'), cellValue('f')) ||
         allThreeX(cellValue('g'), cellValue('h'), cellValue('i'));
}

var winsColumnX = function() {
  return allThreeX(cellValue('a'), cellValue('d'), cellValue('g')) ||
         allThreeX(cellValue('b'), cellValue('e'), cellValue('h')) ||
         allThreeX(cellValue('c'), cellValue('f'), cellValue('i'));
}

var winsDiagonalX = function() {
  return allThreeX(cellValue('a'), cellValue('e'), cellValue('i')) ||
         allThreeX(cellValue('c'), cellValue('e'), cellValue('g'));
}

var allThreeX = function(cellOne, cellTwo, cellThree) {
}
```

Now that we've broken it into one much smaller problem, our `allThreeX` function is fairly easy to write!

```javascript
var allThreeX = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'x') && (cellTwo === 'x') && (cellThree === 'x');
}
```

Excellent! Now, `isWinnerX` should be able to tell us if X has won.

###Determining if `o` has won

Now, we can go ahead and start writing a function called `allThreeO` to do for O what we've done for X. But that seems pretty duplicative.

There's a principle we'll emphasize in this course; one that is so universally accepted that it has a name. This principle states that: If you find yourself writing almost the exact same code in two places, you should take a moment to figure out how you can reorganize. We often refer to this concept as writing "DRY" code. "DRY" stands for "Don't Repeat Yourself". In the case of our Tic-Tac-Toe game, we're considering writing two functions that are the exact same, except for that hard-coded value of 'x' vs 'o'. Wouldn't it be better if we could make the function `allThreeX` more general so that it worked for both players?

Let's see what we can do:

```javascript
var allThree = function(player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
}
```

###Removing the Duplicative Code

Now `allThree` can be used to test for `x` **or** for `o`. By getting rid of our hard-coded data, we are able to make this function pull double duty!

Let's do the same thing for all of the other functions we wrote:

```javascript
var getWinner = function() {
  if (winnerIs('x')) {
    return 'x';
  }
  if (winnerIs('o')) {
    return 'o';
  }
  return null;
}

var winnerIs = function(player) {
  return winsRow(player) || winsColumn(player) || winsDiagonal(player);
}

var winsRow = function(player) {
  return allThree(player, cellValue('a'), cellValue('b'), cellValue('c')) ||
         allThree(player, cellValue('d'), cellValue('e'), cellValue('f')) ||
         allThree(player, cellValue('g'), cellValue('h'), cellValue('i'));
}

var winsColumn = function(player) {
  return allThree(player, cellValue('a'), cellValue('d'), cellValue('g')) ||
         allThree(player, cellValue('b'), cellValue('e'), cellValue('h')) ||
         allThree(player, cellValue('c'), cellValue('f'), cellValue('i'));
}

var winsDiagonal = function(player) {
  return allThree(player, cellValue('a'), cellValue('e'), cellValue('i')) ||
         allThree(player, cellValue('c'), cellValue('e'), cellValue('g'));
}

var allThree = function(player, cellOne, cellTwo, cellThree) {
  return (cellOne === player) && (cellTwo === player) && (cellThree === player);
}
```

If you want, you can play around with this code in [this JS Bin session](https://jsbin.com/cekezaz/edit?js,console), which also contains some dummy code to mock up how `cells` might work. Try testing each of the different functions with different input values, and see what happens.

Have fun!


---

Nice job! [Here's an exercise to you practice writing functions.](07_exercise.md)
