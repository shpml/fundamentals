# UNIT EXERCISES: SOLUTIONS

The following solutions are for the unit exercises.


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
<a href="http://twitter.com/GA">Follow me</a> on Twitter.
<p> Send me an <a href="mailto:me@email.com?subject=hello, awesome!">email</a>.
```

## Unit 3

### 3.2.1


1)  

```css
#name {
	background: red;
}
```

2)

```css
#hex {
	background: #ff0000;
}
```

3)

```css
#rgb {
	background: rgba(255,0,0,1);
}
```

4)

```css
#name {
	background: black;
}

#hex {
	background: #000000;
}

#rgb {
	background: rgba(0,0,0,1);
}
```

Bonus

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

### 3.2.1


1)
```html
<img src="">
```

2)

```html
<img src="http://i.imgur.com/z9gGd0t.jpg">
```

3)
```html
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="Grumpy Cat hates bad design">
```

4)
```html
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="Grumpy Cat hates bad design" title="grumpy cat">
```



## Unit 4

### 4.2.1

```css
1) body {
	background: #333;
}

div {
	background: #c0dec5;
}
```

2)

```css
div {
	background: #c0dec5;
	margin: 4em;
}
```

3)

```css
div {
	background: #c0dec5;
	margin: 4em;
	padding: 2em 3em 0 3em;
}
```

4)

```css
span {
	font-variant: small-caps;
	font-family: tahoma, sans-serif;
	letter-spacing: .25em;
}
```

5)

```css
span {
	font-variant: small-caps;
	font-family: tahoma, sans-serif;
	letter-spacing: .25em;
	padding: 0 .2em;
	background: rgb(100,150,150);
}
```

6)

```css
span {
	font-variant: small-caps;
	font-family: tahoma, sans-serif;
	letter-spacing: .25em;
	padding: 0 .2em;
	background: rgba(100,150,150,.5);
}
```
7)

```css
.right {
	text-align: right;
}
```

### 4.4.1


1)

```html
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
```

2)

```html
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
```

3)

```css
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

#### Part 1

1)

```html
<head>
	<title>ELK Web Design</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" type="text/css">
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
h1,h2 {
	text-transform: uppercase;
  border-bottom: 4px solid black;
	display: inline-block;
	font-weight: 800;
}
```

#### Part 2

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
	margin: 1.8em;
	display: inline-block;
}
```
7)

```css
nav {
	font-size: 1.8em;
 	float: right;
}
```


### 5.4.1

1)

```css
div {
	font-size: 1.2em;
	width: 50%;
}
```

2)

```css
div {
	font-size: 1.2em;
	width: 50%;
	display: inline-block;
}
```

3)

```css
#about {
}

#services {
}
```

4)

```css
#about {
	float: left;
}
```

5)

```css
#services {
	float: right;
}
```

6)
```css
footer {
  text-align: center;
  padding: 1em 0;
  clear: both;
}
```

7)

```css
div {
	font-size: 1.2em;
	width: 46%;
	padding: 2%;
	display: inline-block;
}

#about {
	float: left;
}
```

8)

```css
li {
  float: left;
  width: 50%;
  height: 6em;
}
```
9)

```css
li {
  float: left;
  width: 50%;
  height: 6em;
  outline: 3px solid #222222;
}
```
10)

```css
li {
  float: left;
  width: 50%;
  height: 6em;
  outline: 3px solid #222222;
  text-align: center;
	line-height: 6em;
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
```

13)
```html
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
```
14)

```css
section {
  background: #222222;
  color: white;
  overflow: auto;
}
```

15)

```css
h2 {
	font-size: 1.5em;
	padding: .8em 0;
	color: #fffebb;
	border-bottom-color: #fffebb;
}
```

16)

```css
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
1) `$ cd Downloads`
2) `$ cd World`
3) `$ ls`
4) `$ ls -a Europe`

### 6.2.1

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


## Unit 8

### 8.1.1

```bash
get age

if age >= 65
	display message "Ticket price: $6.00"

otherwise if age <= 25
	display message "Ticket price: $8.00"

otherwise
	display message "Ticket price: $10.00"
```

### 8.2.1
   1) Any expression that equals 30 is valid (e.g., `(1 + 9)*3`).
   2) 'Hello World' is valid (e.g., `"Hello" + " " + "World"`).
   3. `true` is valid (e.g., `(false && true) || true`).

### 8.3.1
   1) `x + 10`
   2) `3*x + 5`
   3) `"Hello, " + x + "."` (or, in ES2015, we can use template strings: `Hello, ${x}.`)
   4) `"Goodbye, " + x + "."` (or, in ES2015, we can use template strings: `Goodbye, ${x}.`)

### 8.4.1
   1) `x || 100`
   2) `x && 50`
   3) `!x`


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
for (var x = 1; i <= max; x += 1) {
  if (x%3 === 0 && x%5 === 0) {
    result = "fizzbuzz";
  } else if (i%3 === 0) {
    result = "fizz";
  } else if (i%5 === 0) {
    result = "buzz";
  } else {
    result = i
  }
  console.log(result);
}
```

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
  // using an `if` statement is also acceptable
};
var threeIfNull = function(num){
  if(num===null) return 3
  return num
};
var greatest = function(x, y, z){
  greatest = x;
  if (greatest < y) {
    greatest = y;
  }
  if (greatest < z) {
    greatest = z;
  }
  return greatest;
};
```

### 10.2.1

```javascript
var fizzBuzz = function(num){
  for (var i = 1; i <= num; i += 1) {
    if (i%3 === 0 && i%5 === 0) {
      result = "fizzbuzz";
    } else if (i%3 === 0) {
      result = "fizz";
    } else if (i%5 === 0) {
      result = "buzz";
    } else {
      result = i
    }
    console.log(result);
  }
};
```

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

### Unit Assignments

* [Unit 1-5](http://jsbin.com/limuge/edit?html,css,js,output)
* [Unit 8](https://jessicaGA.jsbin.com/cajacu/edit?html,css,js,output)
* [Unit 9](https://jsbin.com/lelubo/edit?html,css,js,output)
* [Unit 10](https://jsbin.com/cafikod/edit?html,js,output)
* [Unit 11](https://jsbin.com/liqeyem/edit?html,css,js,output)
