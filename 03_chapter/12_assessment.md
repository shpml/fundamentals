# Unit 3 Homework

Now that we have covered variables and booleans, we can write code that simulates the cards in our game as well as compare them for a match.

Go back into the [project repo](https://github.com/ga-students/wdi-fundamentals-memorygame), wherever you've decided to put it, and open up the file `main.js` (inside the `starter-code` directory). This is where you'll be writing all of your code for all homework assignments.

## Exercise

#### Requirements

In this section, you'll be working to create the cards that will make up your memory game. Each card will have a value of "queen" or "king" and there should be a total of only four cards. Giving the cards a value means we can use comparison operators to check for equality. Let's get started!

> **NOTE** Remember, when you're programming, you need to figure out the solution before you ever start writing code. Below is a good general procedure you can follow.

1. **Understand the problem.** In particular, try to determine (a) what you will be given, and (b) what you hope to get out. If you can't explain the problem in those kinds of terms, you won't be able to move further.

2. **Come up with test cases (and eventually, tests).** Once you've figured out how your code is supposed to behave generally, pick out a couple of specific cases that you can use to confirm whether or not your code is working. For this assignment, this would include comparing the values of cards.

3. **Solve the problem in English.** Or any human language, really. The point is, it's a good idea to pause and avoid *touching* your keyboard until you can start to explain, clearly and precisely, both what it is you're trying to do and how you're trying to do it. You can try sketching out the concept or outlining your procedure on paper, if it helps.

4. **Write code, even if it's not the prettiest.** Don't worry at this stage if your code is elegant, readable, or robust. Just make it work enough to satisfy all of your test cases.

5. **'Refactor' your code.** Now that everything works, take some time to make your code clean/efficient/robust/whatever in addition to functional. Just make sure that whatever changes you make don't break your code - you can keep an eye on this by testing your code and making sure that it still gives you the correct results.

#### Below are the steps to complete the assignment.

1) Create four variables that simulate the cards in your game

- they should be `String` types
- two should have a value of `"queen"` and the other two should be `"king"`
- they will be representation of your cards (i.e. "queen" card)
- name your variables `cardOne`, `cardTwo`, etc.

```js
var cardOne = "queen";

var cardTwo = "queen";

var cardThree = "king";

var cardFour = "king";
```

2) Compare two queen variables

```js
cardOne == cardTwo // true
```

3) Compare a king variable with a queen variable

```js
cardOne == cardFour // false
```

Once you've finished (and have tested your code), commit the changes you've made to the project's repository.

**_just a reminder:_**

Since you're working within the JavaScript file, `main.js`, which is connected to your index.html file, you can open the `index.html` in the browser and look into the console to see the results of your executed JS.

#### Pushing code up to the repository.

In order to backup your code and track your work, you'll want to commit the changes you've made to the project's repository. This requires three steps:

1) Stage your code

`git add -A`

2) Record your staged code

`git commit -m 'created game logic'`

3) Push your code to the GitHub repository

`git push origin master`