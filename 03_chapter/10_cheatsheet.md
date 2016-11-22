**WDI Fundamentals Unit 3**

---

# CSS Cheat Sheet

#### Rule
The building block of a CSS style sheet. A rule consists of a selector and a declaration block (one or more declarations).

#### Declaration
A declaration is made up of a property and a value, separated by a colon and punctuated by a semi-colon.

#### Selector
The actual HTML object to which declaration(s) apply.

#### Property
The characteristic of the selector that will be changed.

#### Value
The amount or type of change to be applied to the corresponding property of the matched selector.

#### Marking Up
The process of assigning HTML tags to specific text content in order to indicate its relation to the rest of a page's text and/or dictate how it should be displayed.

#### Serif Font
One of two general categories of fonts (typefaces) that uses marks (called “serifs”) to embellish characters at the end of strokes. A common serif font is Times New Roman.

#### Sans Serif Font
One of two general categories of fonts that does not embellish characters at the end of strokes ("sans serif" means “without serif”). A common sans serif font is Helvetica.

#### Class
A class attribute is added to an HTML element in order to provide a “hook” to refer to that element in your CSS. CSS class selectors begin with a `.`. Classes can be used multiple times per page.

#### ID
An ID attribute is added to an HTML element in order to provide a “hook” to refer to that element in your CSS. CSS ID selectors begin with a `#`. Unlike classes, IDs can only be used one time per page.

#### Horizontal Rule
Add a horizontal line across your page using the `hr` tag.

#### Line Break
Break up a block of text using the `br` tag.

#### Image
Add images to your HTML using the `img` tag. Tell the browser the source of the image file using an `src` attribute.

#### Absolute File Path
A path to a website or file that includes a full web address (starting with “http://”) that the browser loads directly from its remote location. For example:

`<img src="http://imgur.com/awesomedog.jpg">`

#### Relative File Path
A path to a website or file that provides you with directions to the resource you are looking for as it relates to your local file structure. For example, if you wanted to retrieve an image called "newlogo.png" that resides in a directory called `images`, you would enter the following relative address:

`<img src="images/newlogo.png">`

#### Why Separate HTML from CSS?

Separating HTML from CSS offers you greater scalability and versatility. If you separate how your site looks from what your site says, its elements become more flexible. You can make a change in one place and expand it to your whole site, applying any number of different styles to the same content.

#### CSS Color Treatment

While color names work fine when you're just starting to code, there are a number of reasons to switch over to a more advanced system. First, because color names render differently in different browsers. Second, there are only 147 color names accepted as standard, meaning your options are pretty limited.

Instead, you'll want to use either RGB or hexadecimal (Hex) codes. Both of these are built on a system of entering values for the colors red, green, and blue.

By mixing different intensities of these three colors, you can create millions of different colors and shades. Intensity values range from 0 (no intensity) to 255 (full intensity) in the RGB system.

In Hex, they range from 0-9 and then continue from A-F, employing two characters each for red, green, and blue.
This becomes clearer with examples, so here are some common colors and their RGB and Hex equivalents.

The format for color names, RGB, and hexadecimal should look like so:


```css
p {
     color: red;
}

p {
     color: (255,0,0);
}

p {
     color: #FF0000;
}
```

#### CSS Text Treatment

**font-family**

To adjust the font of your selected text element, use the `font-family` property. For the value, enter the name of the font you’d like to apply to your text. To be safe, try putting a comma after your selected font and enter a generic family as a fallback. If the web browser doesn’t support the font you select, it will choose the fallback.

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

To increase or decrease the spacial dimensions of your chosen text, use the `font-size` property. As a beginner, you’ll want to enter pixel values for your `font-size` values.

```css
h3 {
     font-size: 24px;
}
```

As you become more confident, try using percentages or ems instead of pixels. These can be pretty tricky, so you may want to wait until we cover them in Unit 9.

**font-weight**

To adjust the thickness of your selected text, use the `font-weight` property.

As a beginner, you can enter values like “normal” to make your text thin and “bold” to make your text thick. Because these values are not very specific, different browsers may interpret their display with slightly different outputs.

```css
h1 {
     font-weight: normal;
}

h1 {
     font-weight: bold;
}
```

Once you get more practice, try using the numbers 100, 200, 300, 400, 500, 600, 700, 800, and 900 as values to gain more granular control. With this system, 400 is roughly equivalent to “normal” and 700 roughly equals “bold.”

```css
h1 {
     font-weight: 400;
}

h1 {
     font-weight: 700;
}
```

**font-style**

To make normal text italic, use the property `font-style` and the value "italic." To reverse this effect, use the value "normal."

```css
a {
     font-style: italic;
}

a {
     font-style: normal;
}
```

**text-align**

To adjust the positioning of a text element, use the CSS property `text-align` and one of the following values: left, right, center, or justify.

```css
body {
     text-align: center;
}
```

**text-decoration**

To add an underline to normal text, use the CSS property `text-decoration` and the value "underline."

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
Less commonly used values include "overline," which adds a line above the text, and "line-through," which strikes a line through the text.

**text-transform**

To adjust capitalization in a selected text element, use the `text-transform` property. 

Values for this property include "uppercase," which capitalizes every letter, "lowercase," which uncapitalizes every letter, and "capitalize," which makes the first letter of every word in the selected text uppercase.

```css
h1 {
     text-transform: uppercase;
}
```

#### Classes vs. IDs

Classes and IDs, also knowns selectors, are ways of targeting the style of specific HTML elements on your page.

What’s the difference between the two? In short, using classes allows you to select and style many elements at once, while using IDs only allows you to style a one element at a time. 

Using these classes and IDs provides greater flexibility in how you control the design of individual elements and groups of elements on a page.

#### HTML and Images

When you’d like to add images to your site, you should use the `img` tag along with the `src` attribute. `src` stands for “source” and works just like the `a` tag’s `href` attribute. It tells the `img` tag where to locate the image you want to include on your page.

#### Relative vs. Absolute Addressing

Relative addressing basically tells your browser, “Look in our project folder for the file specified." Or, if a folder is specified, "Look within that folder for the file specified.”

On the other hand, when we link to a source outside of our project folder, it is referred to as an absolute address.
