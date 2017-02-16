**WDI Fundamentals Unit 4**

---

##![Your Turn](../assets/exercise.png) Your Turn

Let's practice matching colors across the three web color models: named colors, hex codes, and RGB colors.

### Instructions
If you don't see the JS Bin below, please refresh the page.

#### HTML: Starter Code

Let's begin by reviewing the starter code below. The `DOCTYPE`, `HTML`, `head`, `link`, and `body` elements should be familiar to you from the previous unit. `div`s and IDs are new HTML concepts for you. The value of each ID attribute provides us with a way to add a "label" to that `div` so we can target it with CSS. 

For now, just remember that "div element" is just a tool to group content into boxes that you can control and style with CSS. The attribute ID lets you attach a "label" to an HTML element to style it differently than other elements of that type.

<a class="jsbin-embed" href="http://jsbin.com/zizovos/embed?html">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.40.3"></script>

#### CSS: Starter Code
Let's look at the starter CSS. This div style sets the size, position, style, and whitespace on all three boxes.

<a class="jsbin-embed" href="http://jsbin.com/zizovos/embed?css">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.40.3"></script>



0. Change the value of the `#name` `div` from `white` to `red`. Remember to click on the **Output** button to see what your code now renders!

0. Turn the `#hex` `div` red by leaving the first two characters at their maximums of `ff`, and changing the last four characters to their minimums of `0`.

0. Turn the `#rgb` `div` red by leaving the red value at its maximum of `255`, and changing both the green and blue values to their minimums of `0`.

0. What color do you think you'd get if you set all the RGB values to their minimum of `0`? Can you set all three boxes to that color?
  * Go ahead and set all the numbers in the RGB color model to `0.`
  * Set all six characters in the `#hex` `div` to `0`.
  * Then, use a named color to make all three boxes the same color.

**Bonus**:

Now, let's work with the alpha value in the RGB model by updating the color for the `#rgb` `div` to the following:

```css
#rgb {
  background: rgba(0,0,0,1);
}
```

The default opacity is already 100%, so you won't see any change on screen yet. But now you have a means to set the opacity.

Now try changing the alpha value (the last value in `rgba`) to `.5` (50% opacity). Then, try `.8` or `.2` to see the difference between each value.

*Bravo to you for mastering color models for the web. Take this knowledge forward and make the Internet a more colorful space!*

> Stuck? Check out the [solutions](../exercise-solutions.md#adding-color) for assistance.


---

[On to the next lesson.](fonts-and-text.md)
