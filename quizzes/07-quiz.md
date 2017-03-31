**WDI Fundamentals Unit 7**

---

#### Typeform Admin Link: 

https://admin.typeform.com/form/2905696/fields/#/


#### Typeform Embed: 

<!-- Change the width and height values to suit you best -->
<div class="typeform-widget" data-url="https://ga-immersives.typeform.com/to/E7eiyK" data-text="Unit 7: Intro to JS" style="width:100%;height:500px;"></div>
<script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'widget.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()</script>


---

*Question 1*

What is pseudocode?

- A combination of JavaScript and plain English.
- A shorthand for writing JavaScript.
- A library we can download and add to our pages to make them faster.
* A technique that lets you write out your program in simple, step-by-step instructions using plain English rather than a programming language.

_Response_

Pseudocode is a technique that lets you write out your program in simple, step-by-step instructions using plain English rather than a programming language.

It allows you to break down a program into simple steps, like a computer would, without getting caught up or distracted by syntax.

---

*Question 2*

How do you create a variable called idNumber with a value 1234 in Javascript?

- 1234 = var idNumber;
- var IdNumber = 1234;
- var idNumber = "1234";
* var idNumber = 1234;


_Response_

The correct syntax is: var idNumber = 1234;

1.  When creating/declaring a variable for the first time, use the var keyword. 
2.  Variable names should be written in camelCase.
3.  Add a space before and after the equal sign.
4.  Statements need to end with a semicolon.
5. When the value is a number, we'll want to make sure that it is not surrounded by quotes.


---

*Question 3*

Which of the following is the correct syntax for reassigning (updating) the value of the variable winner?

var winner = "Susan";

* winner = "Bill";
- var winner = "Bill";
- "Bill" = winner;
- new winner = "Bill";



_Response_

To reassign a variable, we simply write the variable name followed by the assignment operator = followed by the new value (and ending with a semicolon):

winner = "Bill";

---

*Question 4*

What is the final value of x?

- 0
* 28 (Correct)
- 7
- 5,040

(insert image)

_Response_

JavaScript runs from top down, and the value of the variable is updated on each line: 

var x = 0;
x = x + 1;

Line 1: Assign an initial value of 0 to x.
Line 2: Evaluate the expression on the right of the equals sign (x + 1) and then update the value of x. The variable ﻿x﻿ will now hold the value ﻿1﻿.



---

*Question 5*

How would you declare a variable called fullName that contains both John's first and last name, with a space between them.

(Image stays the same)

- var fullName = firstName + lastName;
- var fullName = firstName " " lastName;
* var fullName = firstName + " " + lastName;
- var fullName = firstName + " " + lastName;

_Response_

To create a string that contains John's complete name, you would need to add the firstName variable and the lastName variable, with a space in between, otherwise, you'd create "JohnSmith".

var fullName = firstName + " " + lastName;


---

*Question 6*

What will the following expression evaluate to?

9 % 3

- 1
- 3
* 0
- 9

_Response_

9 % 3 evaluates to 0.

The modulus operator shows the remainder of a division problem.

For example, 9 divided by 4 equals 2 with a remainder of 1. The modulus operator takes two numbers as inputs and returns what's leftover from the division.


---

*Question 7*

What will the following expression evaluate to?

"8" + "6"

- "14"
- 14
- 86
* "86"

_Response_

The expression "8" + "6" will evaluate to the string "86".

Even though both "8" and "6" look like numbers to us humans, JS sees that they're in quotation marks and therefore treats them as strings.

Using the + operator to put the two strings together literally puts them next to each other, instead of evaluating their total.

---

*Question 8*
What will the final value of the myNumber variable be?

var myNumber = 8;
myNumber += 2;
myNumber -= 5;
myNumber - 5;

- 0
* 5
- 10
- 4

_Response_

The final value of myNumber will be 5.

- The += operator adds a value to an existing variable.
- The -= operator subtracts a value from an existing variable.
- On the last line (myNumber - 5;) we subtract 5 from myNumber but since there is no equals sign after -, we are not storing the updated value in myNumber.




---

*Question 9*

Which of the following is the correct syntax for a comment in JavaScript?

* // Here is a comment
- <-- Here is a comment
- / Here is a comment
- // Here is a comment //

_Response_

To add a comment, begin a line with two forward slashes //.

---

*Question 10*

How would we check, or access, the value of the following variable:

var favoriteMovie = "The Shining";

- console favoriteMovie;
* favoriteMovie;
- print favoriteMovie;
- log favoriteMovie;

_Response_

To access the value that a variable holds, we can simply use the variable name.