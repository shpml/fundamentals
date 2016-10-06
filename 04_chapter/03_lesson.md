**WDI Fundamentals Unit 4**
---

# The Box Model

Now that we've really understood how to differentiate between inline and block elements, it's time to take a look at the CSS Box Model. Every html element on a webpage in a box. Therefore, every element has the **content** within it, **padding** or the area outside of the content, the **border** or the line between padding and the content and lastly, the **margin** the area outside the border that separates the element from other elements.

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/4o0byeriss?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>


#### More on the Box Model

In the video above, we mainly discussed how to set shorthand properties for values for padding that are the same. However, often times you'll want to set properties that have different values. Here's how your syntax would look like for different padding values for each side of an HTML element.

```html
div {
	background: #c0dec5;
	padding: 2em 3em 0 3em;
}
```

This means that the top padding will be 2em, the right padding is 3em, the bottom padding 0 and the left padding 3em. Check out the diagram below to see how this works!

![](../assets/elkwebdesign/trouble.png).

Other times you'll want to have padding or margin that are same value for your left and right margins and another value that's the same for your top and bottom value. For example, to set your *top and bottom* padding to 0 and your *left and right* padding to 20% of an em, see below:

```html
div {
	padding: 0 .2em;
}
```

#### Checkpoint
* How would set a solid border of red that's 4px for an `p` element?
* How would you center a wrapper for your website?

#### Further Reading
* Learn more about CSS shorthand on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)

---


[Ready to try coding it out?](04_exercise.md)
