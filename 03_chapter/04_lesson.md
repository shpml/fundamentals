**WDI Fundamentals Unit 3**
---

#Working with Images

Your website can really come to life with a couple images! When you’d like to add images to your site, you should use the tag with the **src** attribute. `src` stands for “Source” and works just like the tag’s `href` attribute. It tells the image tag where to find the image you’d want to include on your page. Learn how to add images


<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/kn8gfpd9z9?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

### Breaking down the Image Tag

The *image tag* alone doesn't do much. It's like putting an empty `<a>` in your code. It needs some helpful attributes to do stuff. The most important thing is to tell the browser what image to show! That's what the *source attribute* does. The **src attribute** in an image tag works just like the href attribute in a link. It tells a browser where to look for a thing.

```html
<img src="">
```

The *image alternate attribute* describes the image. It gets read out loud to people with visual impairments. It's extra-important when there's text in an image.

```html
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="grumpy cat">
```


The *title attribute* tells search engines what this img is a picture of. It helps you appear in Google Image Search.

```html
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="grumpy cat" title="grumpy cat">
```


[On to the next lesson.](07_lesson.md)
