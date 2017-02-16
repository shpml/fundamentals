**WDI Fundamentals Unit 6**

---

# Navigation & Page Layout

Now that we've learned some more about navigation and page layout, let's add a few last pieces to the Memory Game to wrap up the structure and styling.

## Exercise

#### Requirements

* Add a footer to the page and style the footer.
* Style the nav bar in a way that lets users know when they are hovering over a clickable item.

**Bonus:**

* Use the nav bar items to [scroll down](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) to their respected positions on the page.

##### Below are the steps for completing this assignment:

1) Open up the `index.html` and `style.css` pages in the `memory_game` folder in Sublime Text.

2) Now let's add a `footer`.

In the `index.html` file, after the `main` element, add a `footer` element.

Add a paragraph inside the footer and give it the class `copyright`. Place the following content in the paragraph:

```html
Copyright 2017
```

Add a second paragraph inside the footer and give it the class `message`. Place the following content in the paragraph:

```html
Created with &hearts; by <span class="name">GA</span>
```

3) Now let's add some styles to the footer! Apply the following styles to the `footer` in your `style.css` file:

- Make the text uppercase.
- Add `20px` padding on the right and left sides.
- Give it a background color of `#0D2C40`.
- The text color should be `white`.
- The font size should be `14px`.
- Give it a letter spacing of `.08em`.
- The font weight should be `500`.

> Check your work after each step! To do so, open the `index.html` file in Sublime Text, right click, and then select "Open in Browser".
  
4) Alright, now let's add some styles to the two paragraphs in the footer. We can target each paragraph in our CSS file using the class names we added in our HTML &mdash; `.copyright` and `.message`.

- Each paragraph should be displayed using the "Raleway" font family.
- Float `.copyright` to the left.
- Float `.message` to the right.
  
5) If you reload the page in your browser, you'll probably notice that our `footer` background is all off now that we're floating the content inside! Let's fix this using the clearfix method.

Add the following code to your `style.css` file:

```css
.clearfix:after {
  visibility: hidden;
  display: block;
  content: " ";
  clear: both;
  height: 0;
  font-size: 0;
}
```

Then give the `footer` the class `clearfix` in your `index.html` file.

5) Let's add some flair to the word `GA` in the footer. In your html, you'll notice that it's wrapped with a span that has the class `name`. 

Select `.name` in your `style.css` file and give it a color of `#F15B31` and a font weight of `700`.

6) Finally, let's add a hover effect to the anchors in the `nav`.

In your `style.css` file, give all anchors the following style: `border-bottom: 2px solid transparent;`

Then add another, separate rule to style all anchors when the user hovers over them. When the user hovers over them, change the border color to `white`.

```
a:hover {
  /* Your styles here */
}
```


#### Deliverable

Congratulations! Your board game is now structured and styled, utilizing all your new knowledge of HTML and CSS! As you move through the rest of Fundamentals, you'll be working on making the memory game functional. We'll do so using JavaScript. Eventually, once you've completed all of its pieces, you'll turn your game in as your final assignment for WDI Fundamentals.

![](assets/navigation-and-page-layout-assignment/memory-game.png)

> Remember where you save your work! You'll add onto it as you work through Fundamentals!

---


[Let's move on to the next unit!](../07_unit/js-intro.md)
