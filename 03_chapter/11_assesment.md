**WDI Fundamentals Unit 3**

---

# Principles of HTML & CSS

We now know how CSS plays a crucial role in the creative aspect of web development. In the following assignment, you'll use your freshly acquired skills to create the cards of your memory game and define the theme to the game.

As you move through the next several units, you'll be building parts of a browser memory game. Eventually, once all of the pieces are complete, your game will be turned in as your final assignment for WDI Fundamentals.

## Exercise

#### Requirements

* Create cards with in your memory game.
* Add color to your memory cards.
* Add an external CSS stylesheet.


##### Below are the steps to complete the assignment.

1) Open up your previous index.html file in Sublime where you created your memory game page.

2) Underneath your instructions and within your body tag, create five divs like so:

```html
<body>
  <div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</body>
```

You'll use these divs to create a "board" and the individual "cards" that will be displayed on the webpage.

3) Because the cards will look similar (if they looked different, then you'd be able to cheat in the memory game!), you'll create CSS that shares similar style that is shared across multiple elements. Therefore, you'll want to utilize the the more general selector, class.

All card elements will share certain characteristics such as: width, border-radius, etc., we can go ahead and define these CSS properties to the class, `card`.

  * Assign a class called "board" to the first div.  

  * Let's go ahead assign a class attributes called "card" to the four other divs within your "board" div.

  * Then, switch over to the some CSS. Create a new file and save it as "style.css"

  *Reference your board class and give it a height of 80%, a width of 50%. Make sure you display it as an inline-block.

  * Reference your card class in your style.css and make the height of your cards 200px, the width 150px and a black border of 1px.

  * Make your cards yellow.

  * Bonus: Make your cards have card-like rounded borders by adding a border radius of 10px.

4) Remember, if you still have CSS in our index.html when you changed the font color in the previous unit exercise. Go ahead move over this CSS from `<style>` into the `style.css`.

5) Now, go back to your index.html and connect your css file using `<link>` to reference it.

6) Switch up the named color values to RGB and Hex values. If you can't figure out the exact RGB or Hex value to match the color, don't sweat it, just use something close. The key is just to practice implementing a more technical value.

  * Add the rgb(2, 132, 130) to your level one heading.

  * Add color: #ffd700 to your level two heading.

>**HINT** A good way to find your color value would be with a Google search, `<color name> hex code` or `<color name> rgb color`.

---

#### Deliverable

![](../assets/elkwebdesign/memorygameunit3.png)

Great! Your website is starting to look more and more like an actual memory game!

---
How is your Fundamentals Experience going? Take a [quick survey](../feedback.md) to give us your feedback!
