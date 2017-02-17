**WDI Fundamentals Unit 4**

---

#### Typeform Admin Link: 

https://admin.typeform.com/form/2905679/fields/#/


#### Typeform Embed: 

<!-- Change the width and height values to suit you best -->
<div class="typeform-widget" data-url="https://ga-immersives.typeform.com/to/ECUlMg" data-text="Unit 4: Intro to CSS" style="width:100%;height:500px;"></div>
<script>(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'widget.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}})()</script>

---

*Question 1*

Which of the following CSS rules would capitalize every letter in your h1?

Hint: Though we didn't explicitly cover this syntax, peak through Mozilla's MDN documentation on CSS to help you with this question (https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

* h1 { text-transform: uppercase; }
- h1 { text-transform: capital; }
- h1 { font-style: uppercase; }
- h1 { text-transform: all-caps; }

_Response_

To capitalize all the letters in your selected element, you need to use the property "text-transform" and the value "uppercase."

---

*Question 2*

What's the difference between font-weight and font-size?

- Font-size sets the height of the font in pixels; font-weight sets the value of the font's width.
- Font-size sets the height and width of the font; font-weight sets the thickness or thinness of the font's appearance.
- Font-size sets the relative or absolute dimensions of the text in terms of how much area it takes up on the screen (i.e. 12px); font-weight sets the thickness or thinness of the font's appearance (i.e. bold or 800).
- Font-weight sets the relative or absolute dimensions of the text in terms of how much area it takes up on the screen (i.e. 12px); font-size sets the thickness or thinness of the font's appearance (i.e. bold or 800).

_Response_

Font-size is the property for defining the absolute (pixels) or relative (to other text) size of the font, while font-weight sets how thick or thin the font appears.

---

*Question 3*

Let's say you want to change the appearance of the text on your site. You want the result to be centered, colored blue, and written in Times New Roman. Which CSS properties and values should you use?

Hint: Use http://www.color-hex.com/

- text-style: center; color: #0000FF; font-style: "Times New Roman"; 
- text-align: center; color: #00FF00; font-family: Times New Roman;
- text-align: center; color: #0000FF; font-family: "Times New Roman";
- text-align: center; color: #0000FF; font-family: Times New Roman;


_Response_

Center the text with `text-align: center;` 
Color the text blue with `color: #0000FF;` 
Define the font with font-family: "Times New Roman";

---

*Question 4*

What is the best translation of the CSS rule below?

Hint: Use http://www.color-hex.com/

* Turn all of the paragraph text blue and make the background behind that text black.
- Turn all of the paragraph text blue on a black page background.
- Turn all of the paragraph text blue on a white background.
- Turn all of the paragraph text red and make the background behind that text white.


_Response_

Remember– CSS rules will apply to all instances of the selected element, but only within the specified object type. Thus, in this example, the black background color will only affect the area behind the blue text contained in paragraph elements, not the whole page.

---

*Question 5*

Never separate how your site looks from what your site says. Separating HTML and CSS gives you less flexibility, less versatility, and less scalability.

- True
* False


_Response_

Separating CSS from HTML allows for improved content accessibility, increased flexibility, sharing formatting across multiple pages, and decreased repetition.

---

*Question 6*

According to best practices, class selectors are used to style _________, and ID selectors are used to style _________. 

However, you should avoid using _________ selectors.

- groups of elements | an element that only appears once | class
- elements that share the same tag | an element that only appears once | ID
- an element that only appears once | groups of elements | class
* groups of elements | an element that only appears once | ID

_Response_

Classes are used to style multiple elements, while IDs are used to style unique elements. For scalability and efficiency purposes, it is not best practice to use IDs to style elements with CSS.

---

*Question 7*

Is the code below an example of a class or an ID?

- Both
- Neither
- ID
* Class

_Response_

Classes are formatted beginning with a period and IDs are formatted beginning with a hashtag (#).

---

*Question 8*

Class selectors are used to style an entire HTML document.

- True
* False

_Response_

Classes are used to style specific elements within an HTML document, rather than CSS rules that apply to an entire element, page, or site.

---

*Question 9*

Which of the following options best describes the CSS rule in this image?

Hint: Use http://www.color-hex.com/

- All the HTML content with the ID attribute "goodstuff" will be styled with bold, green, and size 14 font.
* All the HTML content with the class attribute "goodstuff" will be styled with bold, green, and size 14 font.
- All the HTML content with the class attribute "goodstuff" will be styled with thin, green, and size 14 font.
- All the HTML elements on the page will be styled with bold, green, and size 14 font.

_Response_

Any and all elements on the page with the class "goodstuff" will be styled with bold, green, and size 14 font.

---

*Question 10*

What type of address is being used in the src attribute?

- Absolute
- Proximal
* Relative
- Source

_Response_

This src attribute shows a relative address to best-quiz-ever.jpg stored in a folder called "images".
