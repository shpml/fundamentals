**WDI Fundamentals Unit 6**

---

#### Typeform Admin Link: 

https://admin.typeform.com/form/2905688/fields/#/


#### Typeform Embed: 

<div class="typeform-widget" data-url="https://ga-immersives.typeform.com/to/bnMkt7" data-text="Unit 6: Navigation and Page Layout" style="width:100%;height:500px;"></div>
<script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'widget.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()</script>

---

*Question 1*

Which of the following demonstrates the correct way to link your main CSS and reset CSS files?

- <body> <link rel="stylesheet" type="text/css" href="reset.css"> <link rel="stylesheet" type="text/css" href="style.css"> </body> 
- <head> <link rel="stylesheet" type="text/css" href="style.css"> <link rel="stylesheet" type="text/css" href="reset.css"> </head>
- <head> <a href="reset.css"></a> <a href="style.css"></a> </head> 
* <head> <link rel="stylesheet" type="text/css" href="reset.css"> <link rel="stylesheet" type="text/css" href="style.css"> </head> 


_Response_

Make sure you link to your CSS reset file before your main CSS file– both within your head tags.

---

*Question 2*
How would you create a simple navigation bar with links to the following pages: 

- Home
- About
- Cool Stuff!
- Contact


- <div> <a href="index.html">Home</a> <a href="about.html">About</a> <a href="cool.html">Cool Stuff!</a> <a href="contact.html">Contact</a> </div> 
- <nav> Home | About | Cool Stuff! | Contact </nav> 
- <nav> <a href="index.html">Home</a> <a href="about.html">About</a> <a href="cool.html">Cool Stuff!</a> <a href="contact.html">Contact</a> </nav> 
- <nav> <a href="index.html"> Home | About | Cool Stuff! | Contact </a> </nav> 

_Response_

You can create simple navigation bars using the nav tag, with a series of anchor tags linking to the various pages.

---

*Question 3*

Which of the following is an example of a pseudo-class?

- a:hover { color: blue; }
- .hover a { color: blue; }
- a.hover { color: blue; }
- .hover { color: blue; }

_Response_

Pseudo-classes allow you to add special styling to selectors and can be identified by a colon between the selector and the pseudo-class name like "a:hover".

---

*Question 4*

Which of the following represent the most popular values assigned to the CSS "float" attribute?

- left, right, none
- left, right, both
- top, right, left, bottom
- top, right, left, bottom, all, none

_Response_

HTML elements are floated horizontally, allowing for boxes to be moved to the left or right– or "un-floated" with "none".

---

*Question 5*

What does the CSS property "clear" accomplish?

- The clear property controls the opacity of an element.
- The clear property tells the browser that you've floated elements, and that the next element should begin on its own new line.
- The clear property specifies which elements should be floated.
- The clear property removes floats from the element(s) before it.

_Response_

The clear property tells the browser that you've floated elements and that the next element should begin on its own new line.

---

*Question 6*

Which CSS declaration can be added to move the elements into horizontal alignment?

- text-align: center;
- float: right;
- float: none;
- float: left;

_Response_

The float: left; declaration directs elements to move horizontally and to the left, one at a time, in the order they appear in HTML.

---

*Question 7*

Which of the following allows us to add a gray (#aaaaaa) hover state to the nav links as illustrated below?
 
- a:hover { color: #aaaaaa; }
- a:hover { background-color: #aaaaaa; }
- a { text-hover: #aaaaaa; }
- .hover { background-color: #aaaaaa; }

_Response_

Adding the pseudo-class "a:hover" will give the links in the nav a gray background color.

---

*Question 8*

_____________ is when pages contain multiple block elements next to each other on the page.

- Fluid design
- Box model
* Column layout
- Inline design

_Response_

Column layout uses floats to position block elements next to one another on the page.

---

*Question 9*

Which CSS property and value would change the layout on the left to the layout on the right?

* float: left; 
- float: right;
- float: none;
- float: all;

_Response_

The float: left; declaration will position the three articles horizontally in the order they appear in HTML.

---

*Question 10*

Which semantic HTML5 element would you use to create a sidebar?

* <aside> 
- <sidebar>
- <main>
- <footer>

_Response_

You can use the <aside> tag to wrap content that's supplemental to the main content on the page.
