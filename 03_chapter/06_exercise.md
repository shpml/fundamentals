**WDI Fundamentals Unit 3**

---

##![Your Turn](../assets/exercise.png) Your Turn

Let's practice matching colors across the three web color models: named colors, hex codes, and RGB colors!

### Instructions
If you don't see the JS Bin below, please refresh the page.

#### HTML: Starter Code

Let's look at the starter code below first. The DOCTYPE, html, head, link, and body elements are familiar to you from the previous unit. Divs and ids are new HTML concepts for you. The value of the id attribute is the name of that div. For now, just remember that div element is just a tool to group content into boxes that you can control and style with CSS. The attribute id lets you name an HTML element to style it differently than other elements of that type.

<a class="jsbin-embed" href="http://jsbin.com/goyaqo/2/embed?html&height=600px">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.11"></script>

#### CSS: Starter Code
Let's look at the starter CSS. This div style sets the size, position, style, and whitespace on all three boxes.

<a class="jsbin-embed" href="http://jsbin.com/goyaqo/2/embed?css">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.11"></script>

>**Note** **Named Colors** - Like black and white. There's a pretty limited number of these.

1 . Change the value of the `#name div` from white to red. Remember to click on the **Output** button to see what your code now renders!

2 . Turn the `#hex div` red by leaving the first two characters at their maximums of ff, and changing the last four characters to their minimums of zero.

3 . Turn the `#rgb div` red by leaving the red value at its maximum of 255, and changing both the green and blue values to their minimums of 0.

4 . What color do you think you'd get if you set all the RGB values to their minimum of zero? Can you set all three boxes to that color?
  * Go ahead and set all the numbers in the rgb color model to zero.
  * Set all six characters in the hex div to zero.
  * Then, use a named color to make all three boxes the same color!

**Bonus**:

We'll now work with the alpha value to the RGB model. When the `#rgb` style is:

```css
#rgb {
  background: rgba(0,0,0,1)
}
```

The default opacity is 100%, so this won't change anything on screen. But now you have a means to set the opacity.

Now try changing the alpha value(the last value in `rgba`) to .5 (50% opacity). What about .8 or .2?


*Bravo to you on utterly mastering color models for the web. Take this knowledge forward and make the internet a more colorful space!*
