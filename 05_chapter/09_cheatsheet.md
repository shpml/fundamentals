**WDI Fundamentals Unit 5**

---

# Navigation and Layout Cheat Sheet

#### Navigation Bar
* a section on a web page with links to other pages or parts of a site. It can appear as a vertical, horizontal, or alternatively-styled block.

#### Pseudo-class
* a keyword added to selectors that indicates a particular condition of the element in which to apply CSS to the selected element. For example, :hover will apply a style when the user hovers over the element specified by the selector.

#### Nav
* A semantic element used to define a set of navigation links.
`<nav></nav>`

#### Clearfix
* A technique in CSS to automatically clear after an element. It's generally used in column layouts where elements are floated. It involves giving the floated elements the class "clearfix" and creating a corresponding CSS rule for that class with the pseudo-class :after.

```CSS
.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
}
```

#### CSS Reset
* There is no true standard for how un-styled HTML elements get rendered in various browsers. In other words, each browser assigns its own padding, margin, line-height, font-size, etc. to every element. To combat this, we reset the CSS, essentially wiping out all of the default styles and starting with a clean slate. Always link to reset.css in the head section of your HTML, above the link to your main CSS file, as follows:

````HTML
<!DOCTYPE html>
<html>
<head>
    <title>CSS Reset Links</title>

    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">

</head>
<body>

</body>
</html>
````

#### Floats and Clears

By default, block elements in HTML stack on top of each other. Floats let us change this behavior, allowing elements to sit horizontally on the page.

The CSS property is called float and common values are left, right, and none (the default is none).

Clears are used when we want to “turn off” floating—essentially preventing elements from flowing around the floating element.

A common method is to use the CSS property clear with the value both. When this method is ineffective, the clearfix method—as seen above—should resolve any issues.

#### Column Layout

Column layout refers to the design of pages with multiple different block sections at the same vertical height on the page.

Columns are created by wrapping a block of content with a div element, applying a float, and modifying the padding, margin, and border dimensions to adjust their size.
