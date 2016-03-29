
##![Your Turn](../assets/exercise.png) Your Turn

In this exercise we'll take some time to play around with **divs**, **spans**, **margin**, and **padding** to create a lovely text layout .

Here's what the content will look like when you're finished styling it.Fancy!

![](../assets/elkwebdesign/layout.png)

We won't touch the HTML, but take a look at it before you hop over to the CSS tab. We gave you the p style. You're welcome!

<a class="jsbin-embed" href="http://jsbin.com/likihi/embed?html,css,output"> on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.11"></script>

1 . Set the body's background to #333 and the div's background to #c0dec5.

2 . Add a margin of 4em on *all four sides* of the div;s content (outside of the pale blue box).

Another syntax for setting margins and padding allows you to give the four different sides of an HTML element (our div in this case), different values.

```html
div {
	background: #c0dec5;
	padding: 2em 3em 0 3em;
}
```

![](../assets/elkwebdesign/padding.png)

3 . Set the div's padding to 2em 3em 0 3em. That's a top padding of 2em, a right padding of 3em, no padding on the bottom, and 3em on the left.

In the HTML each instance of the word "name" is wrapped in its own span. Span is a generic inline element that allows you to style parts of HTML elements. You can also use spans to hang classes and ids from.

```html
span {
	font-variant: small-caps;
	font-family: tahoma, sans-serif;
	letter-spacing: .25em;
}
```
4 .Give the span three property-value pairs: a font-variant of small-caps, a font-family of tahoma, sans-serif and .25em of letter-spacing.

Even though spans are inline, you can still give them padding, too.

![](../assets/elkwebdesign/trouble.png)

5 . Set the span's padding to 0 .2em. Set its background color to rgb(100,150,150).

6 . Actually, that color is a little dark. Let's practice with rgb and alpha, and make it 50% translucent. Change the span's background color from rgb(100,150,150) to rgba(100,150,150,.5).

7 . In your HTML, the second p tag has a class attribute named "right" Let's right-align that paragraph!Add a new style to your CSS. It looks like:

` .right { text-align: right; } `

Fabulous! You just rocked on a bunch of topics that can stump even professional web designers.


---
[On to the lesson.](05_exercise.md)
