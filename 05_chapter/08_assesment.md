**WDI Fundamentals Unit 5**

---

# Navigation & Page Layout

Having learned about layout, we are now even better equipped to structure the HTML of our memory game.

## Exercise

#### Requirements

Currently, the cards in your game are all formatted vertically (and very awkwardly), and its styling is seriously lacking.
* Start by changing the orientation of the cards so that they are structured in a conventional, two-by-two grid layout.
* Next, create a nav bar for the game with links to the "Instructions" and "Game" sections, as if they were on two separate pages.
* Style the navbar in a way that lets users know when they are hovering over a clickable item.
* Finally, be sure to add some color to your footer. It's always good to keep user experience (UX) in mind!

**Bonus:**

* Use the navbar items to [scroll down](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) to their respected positions on the page.

##### Below are the steps for completing this assignment:

1) Open up your index.html and style.css page. By this point, they should be linked together!

2) First, set your board as an inline block element, and define the width and height of your board. Go ahead and set both width and height to 50% in your CSS file.

3) Add a float of left and a margin of 8% to the divs that have a class of "card."

4) Now, go ahead and create a nav bar with two links, "Instructions" and "Game." Add in your anchor and nav elements at the very beginning of your body tags.

**NOTE**: You'll want to use hashtags to create empty links for now!

5) Add a horizontal rule after your closing paragraph tag.

6) Style your navbar by adding a background color of #808080 in your CSS file. The navbar should now look gray!

7) Color and position your navbar items. Follow the steps below:

* Set the two links in the navbar with a background color of #ffbf00.
* Make color of the link text white.
* Set a padding of the links to 35px.
* Make sure to display the links as a block and float them left.

Your two links should have an orange background with white text!

8) Now, add a hover state by setting the background color to #ee5f3c. When you hover over the links, they should turn red. 

9) After you floated your nav items, you should have noticed how your header became wrapped around the side of it. Can you remember the CSS solution to this problem? Yep, it's the infamous `clearfix` class.

* Go ahead, and add a class of "clearfix" to your nav bar.
* In your CSS file, set your clearfix class to the following:

```css
...
      .clearfix:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
        height: 0;
        font-size: 0;
      }
...
```

10) Finally, add a background-color of #808080 to your footer.


#### Deliverable

Congratulations! Your board game is now structured and styled, utilizing all your new knowledge of HTML and CSS! As you move through the rest of Fundamentals, you'll be writing the functionality of a browser memory game. We'll do this using JavaScript. Eventually, you've completed all of its pieces, you'll turn your game in as your final assignment for WDI Fundamentals.

![](../assets/elkwebdesign/memorygame6.png)

> Remember where you save your work! You'll add onto it as you work through Fundamentals!

---

[Take a quick feedback survey to help us improve Fundamentals](feedback.md).

Then, we'll take a look in our developer toolbox!
