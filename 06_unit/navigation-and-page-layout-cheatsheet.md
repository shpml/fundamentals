**WDI Fundamentals Unit 6**

---

# Navigation and Page Layout Cheat Sheet

#### Navigation Bar
* A section on a web page with links to other pages or parts of the site. It can appear as a vertical, horizontal, or alternatively styled block.

#### Pseudo-class
* A keyword added to selectors that indicates a particular condition of the element in which you would apply CSS styling. For example, `:hover` will apply a style when a user hovers over the element specified by the selector.

#### Nav
* A semantic element used to define a set of navigation links (`<nav> </nav>`).


#### Clearfix
* A technique in CSS used to automatically clear after an element. It's generally used in column layouts where elements are floated. It involves giving the floated elements the class "clearfix," and creating a corresponding CSS rule for that class using the pseudo-class `:after`.

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
* There is no true standard for how unstyled HTML elements are rendered in various browsers. In other words, each browser assigns its own padding, margin, line-height, font-size, etc. to every element. To combat this, we reset the CSS, essentially wiping out all of its default styles and starting with a clean slate. Always link to `reset.css` in the head section of your HTML above to your main CSS file, like so:

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

By default, `block` elements in HTML stack on top of each other. Floats let us change this behavior, allowing elements to sit horizontally on the page.

This CSS property is called `float`, and its common values are `left`, `right`, and `none` (the default is `none`).

Clears are used when we want to "turn off" floating — essentially preventing elements from flowing around the floating element.

A common method involves using the CSS property `clear` with the value `both`. When this method is ineffective, the `clearfix` method — as seen above — should resolve any issues.

#### Column Layout

Column layout refers to the design of pages composed of multiple block sections with the same vertical height.

Columns are created by wrapping a block of content with a `div` element, applying a `float`, and modifying the `padding`, `margin`, and `border` dimensions to adjust their size.

---

[Practice these concepts with the assignment!](navigation-and-page-layout-assignment.md)
