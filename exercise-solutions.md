# UNIT EXERCISES: SOLUTIONS

The following solutions are for the Unit exercises.


## Unit 2

### 2.1.1

```html
<h1>My first website!</h1>
<h2>by a talented student</h2>
<p>Built with Circuits at GA.</p>
```

### 2.2.1

```html
<h1>Hi, I'm awesome.</h1>
<a href="http://twitter.com/GA">Follow me</a> on twitter.
<p> Send me an <a href="mailto:me@email.com?subject=hello, awesome!">email</a>.
```

## Unit 3

#### 3.2.1

```html
1.  
#name {
	background: red;
}

2 .
#hex {
	background: #ff0000;
}

3 .

#rgb {
	background: rgba(255,0,0,1);
}

4 .

#name {
	background: black;
}

#hex {
	background: #000000;
}

#rgb {
	background: rgba(0,0,0,1);
}

Bonus

#rgb {
	background: rgba(0,0,0,.5);
}

#rgb {
	background: rgba(0,0,0,.8);
}

#rgb {
	background: rgba(0,0,0,.2);
}

Change this to:

We'll now work with the alpha value to the RGB model. When the #rgb style is: background: rgba(0,0,0,1), the default opacity is 100%, so this won't change anything on screen. But now you have a means to set the opacity.

Now try changing the alpha to .5 (50% opacity). What about .8 or .2?

```

#### 3.2.1

```
1 .
<img src="">

2 .

<img src="http://i.imgur.com/z9gGd0t.jpg">

3 .
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="grumpy cat hates bad design">

4 .
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="grumpy cat hates bad design" title="grumpy cat">
```



## Unit 4

4.2.1

```
1 . body {
	background: #333;
}

div {
	background: #c0dec5;
}

2 .

div {
	background: #c0dec5;
	margin: 4em;
}

3 .

div {
	background: #c0dec5;
	margin: 4em;
	padding: 2em 3em 0 3em;
}

4 .

span {
	font-variant: small-caps;
	font-family: tahoma, sans-serif;
	letter-spacing: .25em;
}

5 .

span {
	font-variant: small-caps;
	font-family: tahoma, sans-serif;
	letter-spacing: .25em;
	padding: 0 .2em;
	background: rgb(100,150,150);
}

6 .

span {
	font-variant: small-caps;
	font-family: tahoma, sans-serif;
	letter-spacing: .25em;
	padding: 0 .2em;
	background: rgba(100,150,150,.5);
}

7 .

.right {
	text-align: right;
}
```

### 4.4.1

```
1 .

<head>
	<title>ELK Web Design</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
	<header>
		<h1>ELK Web Design</h1>
		<img src="http://i.imgur.com/pdsjjxD.jpg">
	</header>
</body>

2 .

<!DOCTYPE HTML>

<html>

<head>
	<title>ELK Web Design</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>
	<header>
		<h1>ELK Web Design</h1>
		<img src="http://i.imgur.com/pdsjjxD.jpg">
	</header>

	<div id="about">
		<h2>Who we are</h2>
		<p>ELK provides clean and innovative sites for small businesses, artists, and professionals.</p>
	</div>

	<div id="services">
		<h2>How we do it</h2>
		<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>Responsive</li>
			<li>Visual Design</li>
		</ul>
	</div>

	<footer>&copy; 2015 ELK</footer>
</body>

</html>


3 .

body {
	font-size: 18px;
}

h1,h2 {
	text-transform: uppercase;
  border-bottom: 4px solid black;
	display: inline-block;
}

h1 {
	font-size: 2em;
}

h2 {
	font-size: 1.5em;
	padding: .8em 0;
}

img {
	display: block;
	margin: 0 auto;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

footer {
  text-align: center;
  padding: 1em 0;
}
```


## Unit 5

### 5.3.1

```

#### Part 1

1 .
<head>
	<title>ELK Web Design</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" type="text/css">
</head>


2 .

body {
	font-size: 18px;
	font-family: 'Open Sans', sans-serif;
}

3 .

h1,h2 {
	text-transform: uppercase;
  border-bottom: 4px solid black;
	display: inline-block;
	font-weight: 800;
}

#### Part 2

1 .

<body>
	<header>
		<h1>ELK Web Design</h1>
		<nav>
		</nav>
		<img src="http://i.imgur.com/pdsjjxD.jpg">
	</header>



2 .

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

3 .

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

4 .

nav {
}

nav a {
}

5 .
nav a {
	text-decoration: none;
  color: black;
}

7 .

nav a {
	text-decoration: none;
  color: black;
	margin: 1.8em;
	display: inline-block;
}

8 .

nav {
	font-size: 1.8em;
 	float: right;
}
```


### 5.4.1

```
1 .

div {
	font-size: 1.2em;
	width: 50%;
}


2 .

div {
	font-size: 1.2em;
	width: 50%;
	display: inline-block;
}

3 .

#about {
}

#services {
}


4 .
#about {
	float: left;
}


5 .
#services {
	float: right;
}

6 .

footer {
  text-align: center;
  padding: 1em 0;
  clear: both;
}

7 .

div {
	font-size: 1.2em;
	width: 46%;
	padding: 2%;
	display: inline-block;
}

#about {
	float: left;
}

8 .
li {
  float: left;
  width: 50%;
  height: 6em;
}

9 .
li {
  float: left;
  width: 50%;
  height: 6em;
  outline: 3px solid #222222;
}

10 .

li {
  float: left;
  width: 50%;
  height: 6em;
  outline: 3px solid #222222;
  text-align: center;
	line-height: 6em;
}

nav {

11 .

img {
	display: block;
	margin: 0 auto;
	width: 480px;
}

12 .

<header>
		<h1>ELK Web Design</h1>
		<nav>
			<a href="#">work</a>
			<a href="#">about</a>
			<a href="#">contact</a>
		</nav>
		<div id="hero">
			<img src="http://i.imgur.com/pdsjjxD.jpg">
		</div>
	</header>

13 .

<section>
	<div id="about">
		<h2>Who we are</h2>
		<p>ELK provides clean and innovative sites for small businesses, artists, and professionals.</p>
	</div>

	<div id="services">
		<h2>How we do it</h2>
		<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>Responsive</li>
		<li>Visual Design</li>
	</ul>
</div>
</section>

<footer>&copy; 2015 ELK</footer>
</body>

</html>

14 .

section {
  background: #222222;
  color: white;
  overflow: auto;
}

15 .

h2 {
	font-size: 1.5em;
	padding: .8em 0;
	color: #fffebb;
	border-bottom-color: #fffebb;
}

16 .

li {
  float: left;
  width: 50%;
  height: 6em;
  outline: 3px solid #222222;
  text-align: center;
	line-height: 6em;
	color: black;
	background: white;
}
```

## Unit 6

### 6.2.1
1. `$ cd Downloads`
2. `$ cd World`
3. `$ ls`
4. `$ ls -a Europe`

### 6.2.1

Part 1:

1. Command + Space. Inside search bar type "Terminal"
2. `$ cd Downloads`
2. `$ mv World ..` (will move to parent directory, in this case the Desktop)
3. `$ ../` (move back to the parent directory) and then  `$ ls`

Part 2:

2. `$ cd World`
3. `$ mkdir Antarctica`
4. `$ ls`
5. `$ cd World (only if pwd if not World)`
6. `$ cd South America`
   `$ ls`
7. `$ mv Argentina ../North_America`
   `$ mv Chile ../North_America`
   `$ mv Brazil  ../North_America`
8. `$../ (back to World Directory)`
   `$ rm -r South_America`
9. `$ mkdir Americas`
   `mv North_America Americas`

## Unit 7

## Unit 8

### 8.1.1

```bash
get age

if age >= 65
	display message "Ticket price: $6.00"

otherwise if age < 25
	display message "Ticket price: $8.00"

otherwise
	display message "Ticket price: $10.00"
```

### 8.2.1
   1. Any expression that equals 30 is valid; e.g. `(1 + 9)*3`
   2. 'Hello World' is valid; e.g. `"Hello" + " " + "World"`
   3. `true` is valid; e.g. `(false && true) || true`

### 8.3.1
    1. `x + 10`
    2. `3*x + 5`
    3. `"Hello, " + x + "."` (or, in ES2015, we can use template strings: ``Hello, ${x}.``)
    4. `"Goodbye, " + x + "."` (or, in ES2015, we can use template strings: ``Goodbye, ${x}.``)

### 8.4.1
    1. `x || 100`
    2. `x && 50`
    3. `!x`


## Unit 9

### 8.1.1
```javascript
if (x%3 === 0 && x%5 === 0) {
  result = "fizzbuzz";
} else if (x%3 === 0) {
  result = "fizz";
} else if (x%5 === 0) {
  result = "buzz";
} else {
  result = x
}
```

### 8.2.1

```javascript
for (var i = 1; i <= max; i += 1) {
  if (x%3 === 0 && x%5 === 0) {
    result = "fizzbuzz";
  } else if (x%3 === 0) {
    result = "fizz";
  } else if (x%5 === 0) {
    result = "buzz";
  } else {
    result = x
  }
  console.log(result);
}
```

## Unit 8

### Unit 8 Assessment

- Starter Code: http://jsbin.com/limuge/edit?html,css,js,output
- Solution: https://jsbin.com/cajacu/edit?html,js,output

### Unit 9 Assessment

- https://jsbin.com/lelubo/edit?html,css,js,output

## Unit 10

### 10.1.1

```javascript
var sayHello = function(name){
  return "Hello, " + name + ".";
};
var areBothEven = function(a, b){
  return a%2 === 0 && b%2 === 0;
};
var hotOrNot = function(temp){
  return (temp > 75)? "hot" : "not hot";
  //// using an `if` statement is also acceptable
};
var threeIfNull = function(num){
  return num || 3;
  //// using an `if` statement is also acceptable
};
var greatest = function(a, b, c){
  greatest = a;
  if (greatest < b) {
    greatest = b;
  }
  if (greatest < c) {
    greatest = c;
  }
  return greatest;
  // using ternary operations as a solution
  // is more advanced and therefore not expected
  // e.g. return (a > b)? a : ((b > c)? b : c);
};
```

### 10.2.1

```javascript
var fizzBuzz = function(num){
  for (var i = 1; i <= num; i += 1) {
    if (x%3 === 0 && x%5 === 0) {
      result = "fizzbuzz";
    } else if (x%3 === 0) {
      result = "fizz";
    } else if (x%5 === 0) {
      result = "buzz";
    } else {
      result = x
    }
    console.log(result);
  } // yes, this is literally the same code from Ch4
};
```

### Unit 10 Assessment

- https://jsbin.com/cafikod/edit?html,js,output

## Unit 11

### 11.1.1

```javascript
var contacts = ["Matt Smith", "Sam Davis", "Ashley Jones"];
var addContact = function (name) {
  contacts.push(name);
  return contacts;
}
var findContact = function (index) {
  return contacts[index];
}
var updateLastContact = function (newName) {
  contacts[contacts.length - 1] = newName;
  return contacts;
}
findContact(3);
addContact("Suzie");
updateLastContact("Sue Miller");
```

### 11.2.1

```javascript
var cups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ounces = [];
var convertToOunces = function () {
	for (var i = 0; i < cups.length; i++) {
		ounces.push(cups[i] * 8);
	}
	console.log(ounces);
 };
convertToOunces();
var scores = [83, 40, 55, 72, 59, 88, 99];
var passOrFail = function () {
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] >= 60) {
			scores[i] = 'pass';
		} else {
			scores[i] = 'fail'
		}
	}
	return scores;
};
passOrFail();
```

### 11.3.1

```javascript
var cups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ounces = [];
var convertToOunces = function () {
  for (var i = 0; i < cups.length; i++) {
  	ounces.push(cups[i] * 8);
  }
  console.log(ounces);
};
convertToOunces();
var scores = [83, 40, 55, 72, 59, 88, 99];
var passOrFail = function () {
 for (var i = 0; i < scores.length; i++) {
		if (scores[i] >= 60) {
			scores[i] = 'pass';
		} else {
			scores[i] = 'fail'
		}
	}
	return scores;
};
passOrFail();
```

### Unit 11 Assessment

- https://jsbin.com/liqeyem/edit?html,css,js,output
