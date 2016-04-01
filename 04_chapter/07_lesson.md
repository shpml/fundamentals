**WDI Fundamentals Unit 4**
---

#### Linking our Files

We've gotten really far with learning about HTML and CSS. But how does the CSS file communicate with HTML file? In order for the HTML file to pull in the proper CSS file, you're going to have link the two! Let's find out how.

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/6nenlcostv?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

>**Note**The image tag alone doesn't do much. It's like putting an empty `<a>` in your code. It needs some helpful attributes to do stuff. The most important thing is to tell the browser what image to show! That's what the source attribute does. The **src attribute** in an image tag works just like the href attribute in a link. It tells a browser where to look for a thing.

```html
<img src="">
```

>**Note**The **image alternate attribute** describes the image. It gets read out loud to people with visual impairments. It's extra-important when there's text in an image.

```html
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="grumpy cat">
```

>**Note** The **title attribute** tells search engines what this img is a picture of. It helps you appear in Google Image Search.

```html
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="grumpy cat" title="grumpy cat">
```



#### Checkpoint:

* What are some best practices for organizing my files and folders on my computer? Should I be saving my work elsewhere?
* What is the common name for primary css pages?
* Where in the HTML boilerplate would you put the link attribute?
* What do `rel`, `type` and `href` describe?
* Where does "text/css" go in the link attribute?

---

[On to the next lesson.](08_exercise.md)
