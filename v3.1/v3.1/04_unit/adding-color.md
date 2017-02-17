**WDI Fundamentals Unit 4**

---

# Adding Color

In this lesson, we'll learn about working with various CSS color and text methods to add flare to our websites! Check out the video below before we dive into another code challenge.

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/2vazcm3j1l?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

#### Color Names

While color names work fine when you're just starting out, there are a number of reasons you'll want to switch over to a more advanced system.

>**Note** **Color Names** refer to names like `black` and `white`.

Why? First, because color names are rendered differently by different browsers. Secondly, there are only 147 color names accepted as standard, meaning your options are going to be pretty limited. 

#### RGB and Hex Codes

Instead, you'll want to use either RGB or hexadecimal codes.

Both of these are built on a system of entering values for the colors red, green, and blue.

By mixing different intensities of these three colors, you can create millions of different colors and shades. Intensity values range from 0 (no intensity) to 255 (full intensity) in the RGB system. 

In a decimal (10) system, the values each digit can have run from 0 up to 9. In a hexadecimal (16) system, we use the letters A through F to extend that range; A is 10, B is 11, C is 12, and so on. For example, the number sixty-three is written in decimal as `63` (6 x 10 + 3 x 1); in hexadecimal, it's written as `3F` (3 x 16 + F x 1, where F is 15).

Coming back to RGB, each pair of characters in an RGB hex code (e.g., `#46A529` -> `46`, `A5`, `29`) represents a color level between 0 (`00`) and 255 (`FF`) for red, green, or blue, respectively.

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

![](assets/adding-color/rgb.png)

---

[Play around with color in this exercise.](adding-color-exercise.md)
