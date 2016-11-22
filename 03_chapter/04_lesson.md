**WDI Fundamentals Unit 3**
---

#Working With Images

Adding images to your website can help it come to life. To add images to your site, use the `img` tag along with the **src** attribute. `src` stands for "source" and tells the `img` tag where to find the image to include on your page. 


<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/kn8gfpd9z9?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

### Breaking Down the Image Tag

The `img` tag alone doesn't do much. It's like putting an empty `<a>` tag in your code. You need to tell the browser which image to display using attributes. That's where the `src` attribute comes in. The `src` attribute for an `img` tag works just like the `href` attribute for a link: It tells a browser where to locate an image.

```html
<img src="">
```

The **image alternate attribute** is a text description of the image and is read aloud to users with visual impairments. This description is especially important to include when there's text in an image.

```html
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="grumpy cat">
```

The **title attribute** tells search engines what the image is depicting, which helps the page appear in Google Image Search.

```html
<img src="http://i.imgur.com/z9gGd0t.jpg" alt="grumpy cat" title="grumpy cat">
```


[On to the next lesson!](07_lesson.md)
