**WDI Fundamentals Unit 3**

---

# CSS Color

In this lesson, we'll learn about working with various CSS color and text methods to add flare to our websites! Check out the videos below before we dive into some code challenges!

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/2vazcm3j1l?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

#### More on CSS Colors

While color names are fine when you're just beginning, there's a number of reasons you'll want to switch over to something more advanced. First, color names are rendered differently by different browsers. Secondly, there are only 147 color names accepted as standard, meaning your options are going to be pretty limited. Instead, you'll want to use either RGB or hexadecimal codes. Both of these are built on a system of entering values for the colors red, green, and blue.

By mixing different intensities of these three colors, you can create millions of different colors and shades. Intensity values range from 0 (no intensity) to 255 (full intensity) in the RGB system.In hex, they range from 0-9, then continue from A-F, with two characters each for red, green, and blue. This is clearer with examples, so here are some common colors with their RGB and Hex equivalents.

The format for color names, RGB, and hexadecimal should look like the following, respectively:

```css
p {
     color: red;
}

p {
     color: rgb(255,0,0);
}

p {
     color: #FF0000;
}
```

#### Opacity and RGBA

RGBA color values are similar to RGB color values with an additional parameter - "alpha" - that specifies the opacity of the element or elements being styled.

The alpha parameter can take any number between 0.0 (totally transparent) and 1.0 (completely opaque).

See below:

![](../assets/elkwebdesign/rgb.png)

---

[On to the next lesson.](02_lessontemp.md)

---
How is your Fundamentals Experience going? Take a [quick survey](../feedback.md) to give us your feedback!
