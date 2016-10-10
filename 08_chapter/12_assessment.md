**WDI Fundamentals Unit 8**

---

# Getting Our Cards in Order

Now that we have covered variables and booleans, we can write code that simulates the cards in our game as well as compare them for a match.

Go back into the [project repo](https://github.com/ga-students/wdi-fundamentals-memorygame), wherever you've decided to put it, and open up the file `main.js` (inside the `starter-code` directory). This is where you'll be writing all of your code for all assignments.

But here's the catch! You have your html and css files from the previous units that you'll want to use moving forward and link your JS file too. Remember when you linked your CSS file to your HTML file? Yes, that's right! It's as simple as that! Look at the following syntax to link your JS file to your HTML file so that they work together!


`<script src="some-javascript-file.js"></script>`

Unlike your CSS _link_, you should add your script right before the end of your `body` tag. This ensures that all of the content of your page has been loaded in case JavaScript needs to use any of it.



## Exercise

#### Requirements

In this section, you'll be working to create the cards that will make up your memory game. Each card will have a value of "queen" or "king" and there should be a total of four cards. Giving the cards a value means we can use comparison operators to check for equality. You'll also push your code up to your repository! Let's get started!


##### Below are the steps to complete the assignment:

1) Navigate to the main.js file in Sublime.

2) Create four variables that simulate the cards in your game.

- they should be `String` types
- two should have a value of `"queen"` and the other two should be `"king"`
- they will represent your cards (i.e. "queen" card)
- name your variables `cardOne`, `cardTwo`, `cardThree`, and `cardFour`.

Here's an example of one card:

```js
var cardOne = "queen";
```

2) Make sure you've linked your main.js file to your index.html file.

3) Now that you have the four cards, you'll want to compare the variables to check for equality.

 >**_Reminder_**: Since you're working within the JavaScript file, `main.js`, which is connected to your `index.html` file, you can open the `index.html` in the browser and run this code directly in the browser console to see the results of your executed JS.

4) Go ahead and open your index.html file and then open the file in the browser. After the webpage loads, in Chrome, you can go to View > Developer > Developer Tools and click on the Console panel.

![](/assets/chapter5/developer.png)

5) To compare the two queen variables to check for equality, in the console type in the following and run your javascript:

```js
cardOne == cardTwo
```

6) Now try to compare a king variable with a queen variable. For example, if cardOne is a queen and cardFour is a king, what does this evaluate to?

```js
cardOne == cardFour
```

#### Deliverable:

Once you've finished (and have tested your code), commit the changes you've made to the project's repository. Make sure you've commented your code!

#### Pushing code up to the repository.

In order to backup your code and track your work, you'll want to commit the changes you've made to the project's repository. You'll have to open up the terminal and `cd` into the correct folder that holds the cloned repository for this assignment. Once there, you'll have to complete these three steps:

1) Stage your code

`git add -A`

2) Create a version of your staged code

`git commit -m 'created game logic'`

3) Push your code to the GitHub repository

`git push origin master`

#### Still Stuck?

> **NOTE** Remember, when you're programming, you need to figure out the solution before you ever start writing code. Below, you'll find a helpful general procedure you can follow:

1. **Understand the problem.** In particular, try to determine (a) what you will be given, and (b) what you hope to get out. If you can't explain the problem in those terms, you won't be able to move further.

2. **Come up with test cases (and eventually, tests).** Once you've figured out how your code is supposed to behave generally, pick out a couple of specific cases that you can use to confirm whether or not your code is working. For this assignment, this would include comparing the values of cards.

3. **Solve the problem in English.** Or any human language, really. The point is, it's a good idea to pause and avoid *touching* your keyboard until you can start to explain, clearly and precisely, both what it is you're trying to do and how you're trying to do it. You can try sketching out the concept or outlining your procedure on paper, if it helps.

4. **Write code, even if it's not the prettiest.** At this stage, don't worry if your code is elegant, readable, or robust. Just make it work to satisfy all of your test cases.

5. **'Refactor' your code.** Now that your code is functional, take some time to make your code clean/efficient/robust. Just make sure that whatever changes you make don't break your code - you can keep an eye on this by testing your code and making sure that it still gives you the correct results.
