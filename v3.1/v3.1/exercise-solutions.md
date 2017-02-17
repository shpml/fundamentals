# UNIT EXERCISES: SOLUTIONS

The following solutions are for the unit exercises.

| UNIT  | LESSON  | TOPIC  |
|:-:|---|---|
| 2  |  6 | [Navigating the Command Line](#navigating-the-command-line) |
| 2  |  7 | [Controlling Files with Command Line](#controlling-files-with-command-line) |
| 3  |  1 | [HTML Elements](#html-elements) |
| 3  |  2 | [HTML Links](#hyperlinks) |
| 4  |  1 | [Adding Color](#adding-color) |
| 4  |  6 | [Working with Images](#working-with-images) |
| 5  |  3 | [The Box Model](#the-box-model) |
| 5  |  4 | [Header, Footer, Nav](#semantic-elements) |
| 6  |  3 | [Horizontal Navigation](#horizontal-nav) |
| 6  |  4 | [Column Layout](#column-layout) |
| 7  |  1 | [Pseudocode](#pseudocode) |
| 7  |  2 | [Data Types](#data-types) |
| 7  |  3 | [Expressions and Evaluations](#expressions-evaluations) |
| 8  |  1 | [Logical Operators and Booleans](#logical-operators-booleans) |
| 8  |  2 | [Conditionals](#conditionals) |
| 8  |  3 | [Switch and Ternary](#switch-ternary) |
| 8  |  4 | [Arrays](#arrays) |
| 8  |  5 | [Loops](#loops) |
| 9  |  1 | [Defining and Calling Functions](#defining-calling-functions) |  
| 9  |  2 | [Parameters and Return Statements](#parameters-return-statements) |  
| 9  |  3 | [Scope](#scope) |
| 10 | 1 | [Creating Objects](#creating-objects) |
| 10 | 2 | [Methods](#methods) |
| 10 | 3 | [JSON](#json) |
| 11 | 1 | [Accessing the DOM](#accessing-the-dom) |
| 11 | 2 | [Manipulating the DOM](#manipulating-the-dom) |
| 11 | 3 | [Events](#events) |



## Unit 2
<a name="navigating-the-command-line"></a>
### 2.6 - Navigating the Command Line
1) `$ cd Downloads`
2) `$ cd World`
3) `$ ls`
4) `$ ls -a Europe`

<a name="controlling-files-with-command-line"></a>
### 2.7 – Controlling Files with Command Line

Part 1:

1) Command + Space. Inside search bar, type "Terminal."
2) `$ cd Downloads`
3) `$ mv World ..` will move to parent directory, in this case the desktop.
4) `$ ../` to move back to the parent directory, then  `$ ls`.

Part 2:

1) `$ cd World`
2) `$ mkdir Antarctica`
3) `$ ls`
4) `$ cd World (only if pwd is not World)`
5) `$ cd South America`
   `$ ls`
6) `$ mv Argentina ../North_America`
   `$ mv Chile ../North_America`
   `$ mv Brazil  ../North_America`
7) `$../ (back to World directory)`
   `$ rm -r South_America`
8) `$ mkdir Americas`
   `mv North_America Americas`

<br>
***

## Unit 3
<a name="html-elements"></a>
### 3.1 – HTML Elements

```html
<h1>My first website!</h1>
<h2>by a talented student</h2>
<p>Built at GA.</p>
```
<a name="hyperlinks"></a>
### 3.2 – Hyperlinks

```html
<h1>Hi, I'm awesome.</h1>
<p><a href="#">Follow me</a> on Twitter.</p>
<p>Send me an <a href="mailto:me@email.com?subject=hello, awesome!">email</a>.</p>
```

## Unit 4
<a name="adding-color"></a>
### 4.1 Adding Color

1. Change the value of the `#name` `div` from `white` to `red`.

	```css
	#name {
		background: red;
	}
	```

2. Turn the `#hex` `div` red by leaving the first two characters at their maximums of `ff`, and changing the last four characters to their minimums of `0`.

	```css
	#hex {
		background: #ff0000;
	}
	```

3. Turn the `#rgb` `div` red by leaving the red value at its maximum of `255`, and changing both the green and blue values to their minimums of `0`.

	```css
	#rgb {
		background: rgb(255,0,0);
	}
	```

4. What color do you think you'd get if you set all the RGB values to their minimum of `0`? Can you set all three boxes to that color?

	```css
	#name {
		background: black;
	}
	
	#hex {
		background: #000000;
	}
	
	#rgb {
		background: rgb(0,0,0);
	}
	```

5. Bonus: Now, let's work with the alpha value in the RGB model.

	```css
	#rgb {
		background: rgba(0,0,0,.5);
	}
	```
	
	```css
	#rgb {
		background: rgba(0,0,0,.8);
	}
	```
	
	```css
	#rgb {
		background: rgba(0,0,0,.2);
	}
	```

<a name="working-with-images"></a>
### 4.5 Working with Images

1. Take a look at the starter code below. Yep, it's your HTML boilerplate!
2. Write in an `img` tag between the body tags.

	```html
	<img src="">
	```

3. Add `src="http://i.imgur.com/z9gGd0t.jpg"` to your image tag. (Grumpy Cat has strong opinions about visual design!)

	```html
	<img src="http://i.imgur.com/z9gGd0t.jpg">
	```
4. Add `alt="grumpy cat hates bad design"` to your image tag.

	```html
	<img src="http://i.imgur.com/z9gGd0t.jpg" alt="Grumpy Cat hates bad design">
	```
5. Add `title="grumpy cat"` to your image tag.

	```html
	<img src="http://i.imgur.com/z9gGd0t.jpg" alt="Grumpy Cat hates bad design" title="grumpy cat">
	```


***

## Unit 5

<a name="the-box-model"></a>
### 5.3 – The Box Model

0. Set the `background-color` of `body` to `#333` and the `background-color` of `div` to `#c0dec5`.

	```css
	body {
		background-color: #333;
	}
	
	div {
		background-color: #c0dec5;
	}
	```

0. Add a `margin` of `64px` on *all four sides* of the `div`s content (outside the pale blue box).

	```css
	div {
		background: #c0dec5;
		margin: 64px;
	}
	```

0. Set the `div`s top `padding` to `32px`, a left and right `padding` of `48px`, and no `padding` on the bottom.

	```css
	div {
		background: #c0dec5;
		margin: 64px;
		padding: 32px 48px 0;
	}
	```

0. Create a rule for `span` and set these three property-value pairs: a `font-variant` of `small-caps`, a `font-family` of `Tahoma, sans-serif`, and a `letter-spacing` of `.25em`.

	```css
	span {
		font-variant: small-caps;
		font-family: Tahoma, sans-serif;
		letter-spacing: .25em;
	}
	```

0. Set the `span`s `padding` to `0 3px`. Set its `background-color` to `rgb(100,150,150)`.

	```css
	span {
		font-variant: small-caps;
		font-family: Tahoma, sans-serif;
		letter-spacing: .25em;
		padding: 0 3px;
		background-color: rgb(100,150,150);
	}
	```

0. On second thought, that color is a little dark. Let's practice with RGB and alpha and make it 50% translucent. Change the `span`s `background-color` from `rgb` to `rgba` and add a `.5` alpha.

	```css
	span {
		font-variant: small-caps;
		font-family: Tahoma, sans-serif;
		letter-spacing: .25em;
		padding: 0 3px;
		background-color: rgba(100,150,150,.5);
	}
	```

0. In your HTML, the second `p` tag has a class attribute named `source`. Let's right-align that paragraph! Add the new style to your CSS.

	```css
	.source {
		text-align: right;
	}
	```


<a name="semantic-elements"></a>
### 5.4 – Header, Footer, Nav
#### Section 1: Content and Page Structure

1)

```html
<body>
	<header>
	    <h1>ELK Web Design</h1>
	    <nav>
	    	<a href="">Work</a>
	    	<a href="">About</a>
	    	<a href="">Contact</a>
	    </nav>
	    <img src="http://i.imgur.com/pdsjjxD.jpg">
	</header>
</body>
```


2)

```html
<body>
	<header>
	    <h1>ELK Web Design</h1>
	    <nav>
	    	<a href="">Work</a>
	    	<a href="">About</a>
	    	<a href="">Contact</a>
	    </nav>
	    <img src="http://i.imgur.com/pdsjjxD.jpg">
	</header>

	<section>
	    <h2>Who we are</h2>
	    <p>ELK provides clean and innovative sites for small businesses, artists, and professionals.</p>
	</section>

	<section>
	    <h2>How we do it</h2>
	    <ul>
	        <li>HTML</li>
	        <li>CSS</li>
	        <li>Responsive</li>
	        <li>Visual Design</li>
	    </ul>
	</section>
</body>
```

3)

```html
<body>
	<header>
	    <h1>ELK Web Design</h1>
	    <nav>
	    	<a href="">Work</a>
	    	<a href="">About</a>
	    	<a href="">Contact</a>
	    </nav>
	    <img src="http://i.imgur.com/pdsjjxD.jpg">
	</header>

	<section>
	    <h2>Who we are</h2>
	    <p>ELK provides clean and innovative sites for small businesses, artists, and professionals.</p>
	</section>

	<section>
	    <h2>How we do it</h2>
	    <ul>
	        <li>HTML</li>
	        <li>CSS</li>
	        <li>Responsive</li>
	        <li>Visual Design</li>
	    </ul>
	</section>

	<footer>&copy; 2015 ELK</footer>
</body>
```

#### Section 2: Styling Content

0. Apply the following styles to the `body`: Set its `font-size` to `18px` and the `font-family` to `Arial`.

	```css
	body {
		font-size: 18px;
		font-family: 'Arial', sans-serif;
	}
	```

0. Write a rule for `h1`, and set its `font-size` to `36px`.

	```css
	h1 {
		font-size: 36px;
	}
	```

0. Create a rule for `h2`, and set its `font-size` to `27px`.

	```css
	h2 {
		font-size: 27px;
	}
	```
	
0. Use only one `padding` declaration to give `h2` a top and bottom `padding` of `14px`.

	```css
	h2 {
		font-size: 27px;
		padding: 14px 0;
	}
	```
	
0. Create a rule for both `h1, h2` and set its `text-transform` property to `uppercase`.

	```css
	h1, h2 {
		text-transform: uppercase;
	}
	```
	
0. Let's keep styling both headings. We'll use CSS shorthand to "underline" each one with a `border-bottom`. Give `h1, h2` a `border-bottom` property that's `4px` thick, `solid`, and `black`.

	```css
	h1, h2 {
		text-transform: uppercase;
		border-bottom: 4px solid black;
	}
	```
	
0. Set `h1, h2`'s `display` to `inline-block`.

	```css
	h1, h2 {
		text-transform: uppercase;
		border-bottom: 4px solid black;
		display: inline-block;
	}
	```
	
0. Create a style for images, and set its `display` to `block`.

	```css
	img {
		display: block;
	}
	```
	
0. Center all images on the page horizontally by setting `img`s `margin` to `0 auto`.

	```css
	img {
		display: block;
		margin: 0 auto;
	}
	```
	
0. Create a `ul` style, and set its `list-style` to `none`. Set its `margin` to `0` and its `padding` to `0`.

	```css
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	```
	
0. Create a `footer` style in your CSS, and center align its text.

	```css
	footer{
		text-align: center;
	}
	```
	
0. Set the `footer` `padding` to `18px 0`.

	```css
	footer{
		text-align: center;
		padding: 18px 0;
	}
	```
	



***


## Unit 6

<a name="horizontal-nav"></a>

### 6.3 – Horizontal Navigation

#### Part 1: Web Fonts

1)

```html
<head>
	<meta charset="utf-8">
	<title>ELK Web Design</title>
	<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" type="text/css">
</head>
```

2)

```css
body {
	font-size: 18px;
	font-family: 'Open Sans', sans-serif;
}
```

3)

```html
h1, h2 {
	text-transform: uppercase;
	border-bottom: 4px solid black;
	display: inline-block;
	font-weight: 800;
}
```

#### Part 2: Navigation

1)

```html
<body>
	<header>
		<h1>ELK Web Design</h1>
		<nav>
		</nav>
		<img src="http://i.imgur.com/pdsjjxD.jpg">
	</header>
```


2)

```html
<body>
	<header>
		<h1>ELK Web Design</h1>
		<nav>
			work
			about
			contact
		</nav>
		<img src="http://i.imgur.com/pdsjjxD.jpg">
	</header>
```

3)

```html
<body>
	<header>
		<h1>ELK Web Design</h1>
		<nav>
			<a href="#">work</a>
			<a href="#">about</a>
			<a href="#">contact</a>
		</nav>
		<img src="http://i.imgur.com/pdsjjxD.jpg">
	</header>
```

4)

```css
nav {
}

nav a {
}
```
5)
```css
nav a {
	text-decoration: none;
	color: black;
}
```

6)

```css
nav a {
	text-decoration: none;
  	color: black;
	margin: 13px 30px;
	display: inline-block;
}
```
7)

```css
nav {
	font-size: 24px;
 	float: right;
}
```

<a name="column-layout"></a>
### 6.4 – Column Layout

1)

```css
div {
	font-size: 20px;
	width: 50%;
}
```

2)

```css
div {
	font-size: 20px;
	width: 50%;
	display: inline-block;
}
```

3)

```css
.about {
}

.services {
}
```

4)

```css
.about {
	float: left;
}
```

5)

```css
.services {
	float: right;
}
```

6)
```css
footer {
  text-align: center;
  padding: 18px 0;
  clear: both;
}
```

7)

```css
div {
	font-size: 20px;
	width: 46%;
	padding: 2%;
	display: inline-block;
}
```

8)

```css
li {
	float: left;
	width: 50%;
	height: 96px;
}
```
9)

```css
li {
	float: left;
	width: 50%;
	height: 96px;
	outline: 3px solid #222222;
}
```
10)

```css
li {
	float: left;
	width: 50%;
	height: 96px;
	outline: 3px solid #222222;
	text-align: center;
	line-height: 96px;
}

```
11)

```css
img {
	display: block;
	margin: 0 auto;
	width: 480px;
}
```

12)

```html
<div class="hero">
	<img src="http://i.imgur.com/pdsjjxD.jpg">
</div>
```

13)
```css
.hero {
    width: 100%;
    display: block;
    margin: 0;
}
```

14)

```html
<section>
	<div class="about">
		<h2>Who we are</h2>
		<p>ELK provides clean and innovative sites for small businesses, artists, and professionals.</p>
	</div>
	<div class="services">
		<h2>How we do it</h2>
			<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>Responsive</li>
			<li>Visual Design</li>
		</ul>
	</div>
</section>
```

15)

```css
section {
	background: #222222;
	color: white;
	overflow: auto;
}
```

16)

```css
h2 {
	font-size: 24px;
	padding: 13px 0;
	color: #fffebb;
	border-bottom-color: #fffebb;
}
```

17)

```css
li {
	float: left;
	width: 50%;
	height: 96px;
	outline: 3px solid #222222;
	text-align: center;
	line-height: 96px;
	color: black;
	background: white;
}
```

<br>	

***
	
## Unit 7

<a name="pseudocode"></a>
### 7.1 - Pseudocode

```js
// Get the patron's age

// If age is greater than or equal to 65
	// Display message "Ticket price: $6.00"

// Otherwise if age is less than or equal to 25
	// Display message "Ticket price: $8.00"

// Otherwise
	// Display message "Ticket price: $10.00"
```

<a name="data-types"></a>
### 7.2 - Data Types and Variables
1. Create a variable `petName`. Assign (give) it the value `"Rover"`.

	```js
	var petName = "Rover";
	```
	
2. Create a variable `age`. Assign it the value `8`.

	```js
	var age = 8;
	```
	
3. Create a variable `favoriteToy`. Assign it the value `"ball"`.

	```js
	var favoriteToy = "ball";
	```

4. Hit the "run" button in the "Console" panel and then check the values of the three variables you created by typing each variable name into the "Console" tab and hitting enter/return.
	
	```js
	petName;
	age;
	favoriteToy;
	```
	
5. Update `petName`. The new value should be `"Arthur"`.

	```js
	petName = "Arthur";
	```

6. Update `age`. The new age should be `5`.

	```js
	age = 5;
	```
7. Update `favoriteToy`. The new favorite toy should be `"yarn"`.

	```js
	favoriteToy = "yarn";
	```
	
8. Hit the "Run" button in the "Console" panel and then check the values of the three variables you created by typing each variable name into the "Console" tab and hitting enter/return.

	```js
	petName;
	age;
	favoriteToy;
	```
	
9. In the "Console" panel, use the `typeof` command to find the type of data stored in each variable.

	```js
	typeof petName;
	typeof age;
	typeof favoriteToy;
	```   

<a name="expressions-evaluations"></a>
### 7.3 - Expressions and Evaluations
1. In the "JavaScript" panel, declare (create) a variable `myNumber`. Assign it the value `30`. 
	
	```js
	var myNumber = 30;
	myNumber; // Check the value of myNumber in the "Console" panel
	```

2. Reassign (update) the `myNumber` variable to `20`.

	```js
	myNumber = 20;
	myNumber; // Check the value of myNumber in the "Console" panel
	```
	
3. Use the `+=` operator to add `5` to the current value of `myNumber`.

	```js
	var myNumber += 5;
	myNumber; // Check the value of myNumber in the "Console" panel
	```

4. Now create a second variable `greeting` and assign (give) it the value `"Hello "`.

	```js
	var greeting = "Hello ";
	greeting; // Check the value of greeting in the "Console" panel

	```
	
5. Create a third variable `name` and assign it the value `"Margaret"`.

	```js
	var name = "Margaret";
	name; // Check the value of name in the "Console" panel

	```

6. Create a fourth variable `sayHello`. The final value of the variable should be `"Hello Margaret"`. Use the variables `greeting` and `name` along with the `+` to create this value (string concatenation). 

	```js
	var sayHello = greeting + name;
	sayHello; // Check the value of sayHello in the "Console" panel

	```

## Unit 8

<a name="logical-operators-booleans"></a>
### 8.1 - Logical Operators and Booleans

1. Create a variable `flavor` and assign it the value to `"chocolate"`.
	
	```js
	var flavor = "chocolate";
	```
	
2. Create a variable `numberScoops` and assign it the value `3`.

	```js
	var numberScoops = 3;
	```

3. Create a variable `outsideTemperature` and assign it the value `75`.

	```js
	var outsideTemperature = 75;
	```

4. Create a variable `price` and assign it the value `3.5`.

	```js
	var price = 3.50;
	```
5. Create a variable `buyIceCream` and set it equal to an expression that incorporates the following:
	- `price` is _less than or equal to_ 2.5 **OR**
	- `outsideTemperature ` is _greater than or equal to_ 70 **AND**
	- `flavor` is _equal to_ `"chocolate"` **AND**
	- `numberScoops` is _greater than_ `1`

	```js
	var buyIceCream = price <= 2.5 || outsideTemperature >= 70 && flavor === "chocolate" && numberScoops > 1;
	```
5. Type `buyIceCream;` into the console and hit the return/enter key to see whether or not you should buy that delicious chocolate ice cream cone under the given conditions.

	```js
	buyIceCream;
	```
	
<a name="conditionals"></a>
### 8.2 - Conditionals

1. If `x` is evenly divisible by both 3 and 5 (for example, 0 or 15), set `result` to `"fizzbuzz"`.
	
	```js
	if (x % 3 === 0 && x % 5 === 0) {
	  result = "fizzbuzz";
	}
	```

2. Otherwise if `x` is evenly divisible by 3 (for example, 3, 6, or 9), set `result` to `"fizz"`.

	```js
	if (x % 3 === 0 && x % 5 === 0) {
	  result = "fizzbuzz";
	} else if (x % 3 === 0) {
	  result = "fizz";
	} 
	```
3. Otherwise if `x` is evenly divisible by 5 (for example, 5 or 10), set `result` to `"buzz"`.

	```js
	if (x % 3 === 0 && x % 5 === 0) {
	  result = "fizzbuzz";
	} else if (x % 3 === 0) {
	  result = "fizz";
	} else if (x % 5 === 0) {
	  result = "buzz";
	}
	```
4. If `x` is not evenly divisible by either 3 or 5 (for example, 7), set `result` to `x`.

	```js
	if (x % 3 === 0 && x % 5 === 0) {
	  result = "fizzbuzz";
	} else if (x % 3 === 0) {
	  result = "fizz";
	} else if (x % 5 === 0) {
	  result = "buzz";
	} else {
	  result = x;
	}
	```
5. To test your code, set a value for `x` in the editor and click "Run." Then type the variable name `result` into the right pane (the console) and hit enter/return. Did you get the `result` you expected? Try out several different values for `x`, just to be sure. 

	```js
	var x = 5; // Test using different values for x.
		
	if (x % 3 === 0 && x % 5 === 0) {
	  result = "fizzbuzz";
	} else if (x % 3 === 0) {
	  result = "fizz";
	} else if (x % 5 === 0) {
	  result = "buzz";
	} else {
	  result = x;
	}
	```
	
<a name="switch-ternary"></a>
### 8.3 - Switch And Ternary Operators

#### Part 1 - Switch Statements
0. Declare a variable `favoriteMovie` and assign it the value `"star wars"`.

	```js
	var favoriteMovie = "star wars";
	```
0. Declare a variable `moviePhrase`. It should have no initial value.
	
	```js
	var moviePhrase;
	```
	
0. Write out a switch statement for the conditions that are written in pseudo code.

	```js
	var favoriteMovie = "star wars"; // Try assigning different values to favoriteMovie to make sure everything is working.
	var moviePhrase;

	switch (favoriteMovie) {
	case "jaws":
	  moviePhrase = "You're gonna need a bigger boat.";
	  break;
	case "the shining":
	  moviePhrase = "All work and no play makes Jack a dull boy.";
	  break;
	case "star wars":
	  moviePhrase = "Do. Or do not. There is no try.";
	  break;
	case "forrest gump":
	  moviePhrase = "Life was like a box of chocolates.";
	  break;
	case "back to the future":
	  moviePhrase = "Where we're going, we don't need roads.";
	  break;
	default:
	  moviePhrase = "Great movie choice!";
	}
	
	```

#### Part 2 - Ternary Operators
0. Declare a variable `hasEmptySquares` and assign it the value `false`.

	```js
	var hasEmptySquares = false;
	```

0. Declare a variable `answersAreCorrect` and assign it the value `true`.

	```js
	var answersAreCorrect = true;

	```
	
0. Declare a variable `message`. It should have no initial value.

	```js
	var message;
	```

0. Write a ternary statement for the conditions that are written in pseudo code.

	```js
	var hasEmptySquares = false;
	var answersAreCorrect = true;
	var message;
	 
	message = hasEmptySquares === false && answersAreCorrect === true ? "Puzzle complete!" : "Not quite!";
	```

<a name="arrays"></a>
### 8.4 - Arrays

1. Create a `contacts` array. This array should contain the names `"Matt Smith"`, `"Sam Davis"`, and `"Ashley Jones"`.

	```js
	var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];
	```
	
2. Create a variable `dad` and assign it the value of the second element (item) in the array, `"Sam Davis"`. 

	```js
	var dad = contacts[1];
	```
	
3. Update the first element in the array. The new value should be `"Mark Williams"`.

	```js
	contacts[0] = "Mark Williams"; 
	```
	
4. Use the `pop()` method to remove the last element from the array (`"Ashley Jones"`).

	```js
	contacts.pop();
	```
5. Use the `push()` method to add `"Michelle Johnson"` to the end of the array.

	```js
	contacts.push("Michelle Johnson");
	```

6. Create a variable `numberOfContacts` and assign it the value of the length of the contact array.
	
	```js
	var numberOfContacts = contacts.length;
	```


<a name="loops"></a>
### 8.5 - Loops
In exercise for the conditionals lesson, FizzBuzz, we wrote code that took an input, `x`, and set a new `result` value according to a specific set of rules. 

This time, your challenge is to loop through every number from 1 to `max`, applying those exact same rules to each number and, before ending the loop, printing the result out in the console using the command `console.log(result);`.

```javascript
var result;
var max = 20; // Test out different values for max

for (var x = 1; x <= max; x += 1) {
	if (x % 3 === 0 && x % 5 === 0) {
	  result = "fizzbuzz";
	} else if (x % 3 === 0) {
	  result = "fizz";
	} else if (x % 5 === 0) {
	  result = "buzz";
	} else {
	  result = x;
	}
  console.log(result);
}
```

## Unit 9

<a name="defining-calling-functions"></a>
### 9.1 - Defining and Calling Functions
0. In the "JavaScript" panel in JS Bin, define a function `recitePoem`.
	- Inside the function, log `"Roses are red, violets are blue."` to the console. 
	- Call the `recitePoem` function in the "JavaScript" panel.

	```js
	var recitePoem = function () {
	  	console.log("Roses are red, violets are blue.");
	};
	
	recitePoem();
	```

0. In the "JavaScript" panel in JS Bin, define a function `playSong`.
	- Inside the function, log `"Cheer up sleepy Jean, Oh, what can it mean."` to the console. 
	- Call the `playSong` function.

	```js
	var playSong = function () {
	  	console.log("Cheer up sleepy Jean, Oh, what can it mean.");
	};
	
	playSong();
	```
	
0. In the "JavaScript" panel in JS Bin, define a function `twoByFour`.
	- Inside the function, log `2 * 4` to the console. 
	- Call the `twoByFour ` function.

	```js
	var twoByFour = function () {
	  	console.log(2 * 4);
	};
	
	twoByFour();
	```

<a name="parameters-return-statements"></a>
### 9.2 - Parameters and Return Statements

1. In the "JavaScript" panel in JS Bin, define a function `sayHello`.
	- It should accept one parameter, `name`.
	- Inside the function, _return_ a greeting in the following format: (i.e., "Hello, *name*").
	- After hitting the "Run" button in the "Console" panel, call the `sayHello` function in the "Console" panel, using `"Bill"` as the argument.
	- You should see `"Hello, Bill"` displayed in the console.

	```js
	var sayHello = function (name) {
		return "Hello, " + name;
	};
	
	sayHello("Bill");
	```

0. In the "JavaScript" panel in JS Bin, define a function `areBothEven`.
	- It should accept two parameters, `num1` and `num2`.
	- Inside the function, _return_ `true` if `num1` and `num2` are both even, but `false` if they are not.
	- After hitting the "Run" button in the "Console" panel, call the `areBothEven` function in the "Console" panel, using `2` and `4` as the arguments.
	- You should see `true` displayed in the console.

	```js
	var areBothEven = function (num1, num2) {
		if (num1 % 2 === 0 && num2 % 2 === 0) {
			return true;
		} else {
			return false;
		}
	};
	
	areBothEven(2, 4);
	```
	
0. In the "JavaScript" panel in JS Bin, define a function `hotOrNot `.
	- It should accept one parameter, `temp`.
	- Inside the function, _return_ `"Hot!"` if `temp` is greater than or equal to `70`, but `"Not hot."` if `temp` is less than `70`.
	- After hitting the "Run" button in the "Console" panel, call the `hotOrNot ` function in the "Console" panel, using `76` as the argument.
	- You should see `"Hot!"` displayed in the console.
	- Test out the function using different numbers for the argument when calling the function to make sure everything is working.

	```js
	var hotOrNot = function (temp) {
		if (temp > 70) {
			return "It's hot!";
		} else {
			return "It's not hot.";
		}
	};
	
	hotOrNot(76);
	```

<a name="scope"></a>
### 9.3 - Scope

1. We are getting a reference error when we try to log "Hello " and "name" to the console. See if you can move the `console.log` statement to where it can access the variable `name`.

	```js
	var sayHello = function () {
		var name = "Marie";
		console.log("Hello " + name);
	};
	
	sayHello();
	
	```

2. We are trying to keep track of the total amount of points that a player has scored, but each time the function is called, our score is being set to zero again. Which statement could you move outside the function so that the total is set to 0 when the page first loads, but every time the function is called the total is incremented by one?

	```js
	var total = 0;
	
	var scorePoint = function () { 
		total += 1;
		console.log(total);
	};
	
	scorePoint();
	scorePoint();
	scorePoint();
	```



## Unit 10


<a name="creating-objects"></a>
### 10.1 - Creating Objects
1. Create an array called `contacts`. The `contacts` array should contain three objects, one for each contact stored in our book.

	```js
	var contacts = [
		{
			firstName: "John",
			lastName: "Doe",
			phone: "(512) 355-0453",
			email: "johndoe@email.com"
		},
		{
			firstName: "Jane",
			lastName: "Doe",
			phone: "(312) 641-2203",
			email: "janedoe@email.com"
		},
		{
			firstName: "Suzie",
			lastName: "Smith",
			phone: "(415) 604-4219",
			email: "suziesmith@email.com"
		}
	];
	```

2. Now let's create a `listContacts` function to list our contacts. This function should loop through the `contacts` array and log the first and last name for each contact to the console, e.g. `"John Doe"`. Then call the `listContacts` function.

	```js
	var listContacts = function() {
	  for (var i = 0; i < contacts.length; i++) {
	    console.log(contacts[i].firstName + ' ' + contacts[i].lastName);
	  }
	};
	
	listContacts();
	```

<a name="methods"></a>
### 10.2 - Methods

1. In the "JavaScript" panel in JS Bin, create an object `poem`

	```js
	var poem = {
	  author: "Robert Frost",
	  datePublished: 1916,
	  name: "The Road Not Taken",
	  famousLine: "Two roads diverged in a yellow wood"
	};
	```

2. Now add a method `quotePoem` to the `poem` object.

	```js
	var poem = {
	  author: "Robert Frost",
	  datePublished: 1916,
	  name: "The Road Not Taken",
	  famousLine: "Two roads diverged in a yellow wood", 
	  quotePoem: function () {
	
	  }
	};
	```

3. Inside the method, add a `console.log()` statement, logging the `famousLine` property.
	
	```js
	var poem = {
	  author: "Robert Frost",
	  datePublished: 1916,
	  name: "The Road Not Taken",
	  famousLine: "Two roads diverged in a yellow wood", 
	  quotePoem: function () {
	    console.log(this.famousLine);
	  }
	};
	```
	
4. Now call the `quotePoem` method.

	```js
	var poem = {
	  author: "Robert Frost",
	  datePublished: 1916,
	  name: "The Road Not Taken",
	  famousLine: "Two roads diverged in a yellow wood", 
	  quotePoem: function () {
	    console.log(this.famousLine);
	  }
	};
	
	poem.quotePoem();
	```
	
<a name="json"></a>
### 10.2 - JSON

1\. The object passes validation.
2\. The following line is valid JavaScript, but the object is not written in valid JSON syntax. Use JSONLint to validate the above object; then, update the object to use the correct JSON syntax so it passes the validator.
	
```js
{
	"name": "Eddie Vedder", 
	"age": 49
}
```


3\. Take a look at the `grungeAlbums` object provided in the JS Bin editor. 

- In the "JavaScript" panel in JS Bin, use the `JSON.stringify()` method to turn the `grungeAlbums` JavaScript object into a JSON string, and store it in a variable `grungeAlbumsJSON`. 
- Then, use the `JSON.parse()` method to convert `grungeAlbumsJSON` back into a JavaScript object and store it in the variable `grungeAlbumsObject`. 
- Log each variable to the console to compare, and also compare to the original object. You'll need to hit the "Run" button in the "Console" panel to see the output from the `console.log()` statements.

```js
var grungeAlbumsJSON = JSON.stringify(grungeAlbums);
var grungeAlbumsObject = JSON.parse(grungeAlbumsJSON);

console.log(grungeAlbumsJSON);
console.log(grungeAlbumsObject);
```

4\. Now loop through each album in `grungeAlbumsObject`, and use a `console.log()` statement to print out the album name, artist, and units sold. 

```js
for (var i = 0; i < grungeAlbumsObject.albums.length; i++) {
  var currentAlbum = grungeAlbumsObject.albums[i];
  console.log('Album: ' + currentAlbum.name);
  console.log('Artist: ' + currentAlbum.artist);
  console.log('Units sold: ' + currentAlbum.unitsSold);
}
```


## Unit 11

<a name="accessing-the-dom"></a>
### 11.1 - Accessing the DOM
1. Use the `querySelectorAll()` method to select all elements with the `current` class and then, using array syntax (our trusty square brackets), update the selection to only select the _second_ element with the `current` class. After you've made your selection, add the folowing code onto the end of the selection: `.textContent = "The Violent Bear It Away";`

	```js
	document.querySelectorAll('.current')[1].textContent = "The Violent Bear It Away";
	```

2. Use the `getElementById()` method to find the element with the ID `next`. After you've made your selection, add the folowing code onto the end of the selection: `.textContent = "Me Talk Pretty One Day";`

	```js
	document.getElementById('next').textContent = "Me Talk Pretty One Day";
	```

3. Find the first `li` using the `querySelector()` method. After you've made your selection, add the folowing code onto the end of the selection: `.textContent = "Brothers Karamazov";`

	```js
	document.querySelector('li').textContent = "Brothers Karamazov";
	```

4. Use the `getElementsByTagName()` method to select all `li` elements. Then, use array syntax to select the fourth `li`. After you've made your selection, add the folowing code onto the end of the selection: `.textContent = "JavaScript is Fun!";`

	```js
	document. getElementsByTagName('li')[3].textContent = "JavaScript is Fun!";
	```

<a name="manipulating-the-dom"></a>
### 11.2 - Manipulating the DOM

0. Create a `for` loop. For the `for` loop, `i` should have an initial value of `1` and the loop should run three times. Each time the loop runs, create a `div` element using the `createElement()` method and store it in a variable `boxElement`.

	```js
	for (i = 1; i <= 3; i++) {
	    var boxElement = document.createElement('div');
	}
	```
	
0. Alright! Next let's add some styles for each `div`. In the CSS tab we've defined some styles for you to use. Each time the for loop runs, we want to add a class to the current `boxElement` using the `className` property. This will apply the styles in our CSS that are associated with that class.

	- The class name for the first box should be `box-1`.
	- The class name for the second box should be `box-2`.
	- The class name for the third box should be `box-3`.
	
	```js
	for (i = 1; i <= 3; i++) {
	    var boxElement = document.createElement('div');
	    boxElement.className = 'box-' + i;
	}
	```

0. Also within the `for` loop, use the `appendChild()` method to append each `boxElement` to the body.
	
	```js
	for (i = 1; i <= 3; i++) {
	    var boxElement = document.createElement('div');
	    boxElement.className = 'box-' + i;
	    document.getElementsByTagName('body')[0].appendChild(boxElement);
	}
	```


<a name="events"></a>
### 11.3 - Events

0. First create a function called `addItem`. For now it should be empty.

	```js
	var addItem = function () {
	
	};	
	```

0. Add a `click` event handler to the button. When the button is clicked, run the `addItem` function.

	```js
	var addItem = function () {

	};
	
	document.getElementsByTagName('button')[0].addEventListener('click', addItem);
	```

0. Alright, now within the `addItem` function we need to find out what the user entered into the `input` field. We'll be using a new property - the `value` property - to find out what the user entered into the `input`. 
	- Get the user's todo item from the `input` element and store it in a variable `newItemText`.

	```js
	var addItem = function () {
	  var input = document.getElementsByTagName('input')[0];
	  var newItemText = input.value;
	};
	
	document.getElementsByTagName('button')[0].addEventListener('click', addItem);
	```

0. Now we want to add the new list item to the `ul` with the id `todo-list`. Remember, in order to add a new element to the page, there are a few steps we will have to take:

	- Use the `createElement()` method to create a list item element and store it in the variable `newItem`.
	- Add content to this new list item using the `innerHTML` property.
	- Use the `appendChild()` method to append this element to the element with the id `todo-list`.

		```js
		var addItem = function () {
		  var input = document.getElementsByTagName('input')[0];
		  var newItemText = input.value;
		
		  var newItem = document.createElement('li');
		  newItem.innerHTML = newItemText;
		  document.getElementById('todo-list').appendChild(newItem);
		};
		
		document.getElementsByTagName('button')[0].addEventListener('click', addItem);
		```

