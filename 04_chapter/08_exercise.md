##![Your Turn](../assets/exercise.png) Your Turn

Now it's time to work with images. Our goal in this exercise will be to to use the HTML image tags to put a picture on the web.


#### Instructions

1 . Take a look at the HTML boilerplate that you don't have to write in the starter code below.

<a class="jsbin-embed" href="http://jsbin.com/jemeyex/embed?html,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.11"></script>

2 . Write <img> between the body tags.

The image tag alone doesn't do much. It's like putting an empty <a> in your code. It needs some helpful attributes to do stuff. The most important thing is to tell the browser what image to show! That's what the source attribute does.

>The **src attribute** in an image tag works just like the href attribute in a link. It tells a browser where to look for a thing.

```html
<img src="">
```

3 . Add `src="http://i.imgur.com/z9gGd0t.jpg"` to your image tag.

Grumpy Cat has strong opinions about Visual Design!

> The **image alternate attribute** describes the image. It gets read out loud to people with visual impairments. It's extra-important when there's text in an image.

```html
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="grumpy cat hates bad design">
```

4 . Add alt="grumpy cat hates bad design" to your image tag.

>The **title attribute** tells search engines what this img is a picture of. It helps you appear in Google Image Search.

```html
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="grumpy cat hates bad design" title="grumpy cat">
```

5 . Add title="grumpy cat" to your image tag.


#### Important To Remember

* img elements are self-closing. They don't need a closing tag.
* Image URLs must end with an image extension: usually .jpg, .gif, or .png.
* Images require a src. Including title and alt is strongly recommended.

*Think about all of the awesome stuff you can build online using images! Are you excited yet?*
