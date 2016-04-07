**WDI Fundamentals Unit 4**
---

# The Box Model

Now that we've really understood how to differentiate between inline and block elements, it's time to take a look at the CSS Box Model. Every html element on a webpage in a box. Therefore, every element has the **content** within it, **padding** or the area outside of the content, the **border** or the line between padding and the content and lastly, the **Margin** the area outside the border that separates the element from other elements.

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/4o0byeriss?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>


#### More on the Box Model

Another syntax for setting margins and padding allows you to give the four different sides of an HTML element (our div in this case), different values.

```html
div {
	background: #c0dec5;
	padding: 2em 3em 0 3em;
}
```

![](../assets/elkwebdesign/padding.png)


In the HTML each instance of the word "name" is wrapped in its own span. Span is a generic inline element that allows you to style parts of HTML elements. You can also use spans to hang classes and ids from.

```html
span {
	font-variant: small-caps;
	font-family: tahoma, sans-serif;
	letter-spacing: .25em;
}
```

Even though spans are inline, you can still give them padding, too.

![](../assets/elkwebdesign/trouble.png)

And here's a diagram to help you remember the box model.

![](../assets/elkwebdesign/boxmodel.png)

[Ready to try coding it out?](04_exercise.md)
