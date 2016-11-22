**WDI Fundamentals Unit 3**

---

##![Your Turn](../assets/exercise.png) Your Turn

Let's practice matching colors across the three web color models: named colors, Hex codes, and RGB colors.

### Instructions
If you don't see the JS Bin below, please refresh the page.

#### HTML: Starter Code

Let's begin with this starter code. The DOCTYPE, HTML, head, link, and body elements should be familiar to you from the previous unit. **Divs** and **IDs** are new HTML concepts for you. The value of the `id` attribute is the name of that `div`. For now, just remember that a `div` element is simply a tool to group content into boxes that you can control and style with CSS. The attribute ID lets you name an HTML element to style it differently than other elements of that type.

<a class="jsbin-embed" href="http://jsbin.com/goyaqo/2/embed?html&height=600px">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.11"></script>

#### CSS: Starter Code
Let's look at the starter CSS. This `div` style sets the size, position, style, and white space of all three boxes.

<a class="jsbin-embed" href="http://jsbin.com/goyaqo/2/embed?css">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.11"></script>

>**Note** **Named colors** refer to names like "black" and "white." Compared to Hex and RGB, there are a pretty limited number of named colors.

1) Change the value of the `#name div` from "white" to "red." Remember to click on the **Output** button to see what your code now renders!

2) Turn the `#hex div` red by leaving the first two characters at their maximums of FF and changing the last four characters to their minimums of 0.

3) Turn the `#rgb div` red by leaving its red value at its maximum of 255 and changing both the green and blue values to their minimums of 0.

4) What color do you think you'd get if you set all the RGB values to their minimum of 0? Can you set all three boxes to that color?
  * Go ahead and set all the numbers in the RGB color model to 0.
  * Set all six characters in the Hex div to 0.
  * Then, use a named color to make all three boxes the same color.

**Bonus**:

Now, let's work with the alpha value in the RGB model using the following `#rgb` style:

```css
#rgb {
  background: rgba(0,0,0,1)
}
```

The default opacity is already 100%, so you won't see any change on screen just yet. But now you have a means to set the opacity.

Now, try changing the alpha value (the last value in `rgba`) to .5 (50% opacity). Then, try .8 or .2 to see the differences between each.

*Bravo to you for mastering color models for the web! Take this knowledge forward and make the internet a more colorful space.*
