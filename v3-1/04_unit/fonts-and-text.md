**WDI Fundamentals Unit 4**

---

# Fonts and Text

As you learn to style your website, you'll want to get more creative with font families, as well as font size, style, and more. You'll also want to start aligning the text to suit your needs. Let's explore how to that!

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/mpderhu818?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>


#### More on CSS Text Treatment

**font-family**

To adjust the font of your selected text element, use the font-family property. For the value, enter the name of the font to which you'd like to alter your text. To be safe, try putting a comma after your selected font and enter a generic family as a fallback. If the web browser doesn't support the font you selected, it will choose the fallback. For example:

```css
h1 {
     font-family: Arial, sans-serif;
}
```

If your selected font is more than one word, capitalize both words and put them in quotation marks:

```css
h1 {
     font-family: "Courier New", monospace;
}
```

**font-size**

To increase or decrease the spacial dimensions of your chosen text, use the font-size property. As a beginner, you'll want to enter pixel values for your font-size values, like so:

```css
h3 {
     font-size: 24px;
}
```

As you become more advanced, try using percentages or ems instead of pixels. These can be pretty tricky, so you may want to hold off on using these for now.


**font-weight**

To adjust the thickness of your selected text, use the font-weight property.

As a beginner, you can enter values like "normal" to make your text thin and "bold" to make your text thick. As these values are not very specific, different browsers may interpret their display with slightly different outputs.

```css
h1 {
     font-weight: normal;
}

h1 {
     font-weight: bold;
}
```

Once you get more practice, try using the numbers 100, 200, 300, 400, 500, 600, 700, 800, and 900 as values to gain more granular control. With this system, 400 is roughly equivalent to "normal" and 700 roughly equals "bold."

```css
h1 {
     font-weight: 400;
}

h1 {
     font-weight: 700;
}
```

**font-style**

To make normal text italic, use the property font-style and the value "italic." To reverse this effect, use the value "normal."

```css
a {
     font-style: italic;
}

a {
     font-style: normal;
}
```

**text-align**

To adjust the positioning of a text element, use the CSS property text-align and one of the following values: left, right, center, or justify.

```css
body {
     text-align: center;
}
```

**text-decoration**

To add an underline to normal text, use the CSS property text-decoration and the value "underline."

```css
h1 {
     text-decoration: underline;
}
```

To remove underlines, use the value "none." This declaration is often applied to anchor tags.

```css
a {
     text-decoration: none;
}
```

Less commonly used values include "overline," which adds a line above text, and "line-through," which strikes a line through your text.

**text-transform**

To adjust capitalization in a selected text element, use the text-transform property. Values for this property include "uppercase" to capitalize every letter, "lowercase" to uncapitalize every letter, and "capitalize" to make the first letter of every word in the selected text uppercase.

```css
h1 {
     text-transform: uppercase;
}
```

#### External Fonts

Did you know you can also link to external fonts in your HTML?  Google Fonts is a popular, free service for adding fonts to our pages. Let's try it!

First you'll need to add a `link` tag in the `head` of your HTML document. This link will look something like this:

```html
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" type="text/css">
```

1. The `href` attribute tells the browser where the font is.
2. Here we want to add the Open Sans font, in two weights: 400 for body text, and 800 for headings. 
3. The `rel` and `type` attributes tell the HTML that the link goes to a CSS stylesheet. 

Copy the link and paste it in the url bar of your browser to take a peek!

After adding the font in our HTML, we can now apply the font in our CSS:

```css
p {
	font-family: "Open Sans", sans-serif;
	font-weight: 400;
}

h1 {
	font-family: "Open Sans", sans-serif;
	font-weight: 900;
}
```

Visit the [Google Fonts](https://fonts.google.com/) website to choose fonts for your webpages and generate a `link` tag for the fonts that you can include in your HTML file.

---

[On to the next lesson.](classes-and-ids.md)
