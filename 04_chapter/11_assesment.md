# Principles of HTML & CSS Homework

We now know how CSS plays a crucial role in the creative aspect of web development. In the following assignment, you'll use your freshly acquired skills to create the cards of your memory game and define the theme to the game.

## Exercise

#### Requirements

* Create cards with in your memory game.
* Add color to your memory cards.
* Add an external CSS stylesheet.


##### Below are the steps to complete the assignment.

1) Open up your previous index.html file in Sublime where you created your memory game page.
2) Underneath your instructions and within your body tag, create four divs like so:

```html
...
    <div></div>
    <div></div>
    <div></div>
    <div></div>

  </body>
...
```

3) For styles that are shared across multiple elements you'll want to utilize the the more general selector, class. Since we know all card elements will share certain characteristics such as: width, border-radius, etc., we can go ahead and define these CSS properties to the class, `card`.

  * Let's go ahead assign a class attributes called "card" to all of your divs.

  * Let's switch over to the some CSS. Create a new file and save it as "style.css"

  * Reference your card class in your style.css and make the height of your cards 200px, the width 150px and black border of 1px.

  * Make your cards yellow.

  *Bonus: add a border to your cards of 10px

4) Move your CSS from `<style>` into its own file, `style.css`.

8) Go back to your index.html and connect your css file using `<link>` to reference it.

9) Switch up the named color values to RGB and Hex values. If you can't figure out the exact RGB or Hex value to match the color, don't sweat it, just use something close. The key is just to practice implementing a more technical value.

  * Move your CSS from `<style>` to its own file, `style.css`. To connect these styles with your HTMl, use `<link>` to reference it.

  * Add the rgb(2, 132, 130) to your level one heading.

  * Add color: #ffd700 to your level two heading.
>**HINT** A good way to find your color value would be with a google search, `<color name> hex code` or `<color name> rgb color`.

---

#### Deliverable

![](../assets/elkwebdesign/memorygameunit3.png)

Great! Your website is starting to look more and more like an actual memory game!
