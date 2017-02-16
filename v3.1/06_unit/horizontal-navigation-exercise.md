**WDI Fundamentals Unit 6**

---

##![Your Turn](../assets/exercise.png) Your Turn

### Horizontal Navigation Exercise

In this exercise, we'll continue to style the ELK Web Design site by working with web fonts and creating a horizontal navigation bar.

Remember, this is our final design:

![](assets/horizontal-navigation-exercise/elk-final.png)


### Instructions
If you don't see the JS Bin below, please refresh the page.

#### Getting Started

You'll be using the editor below. First, take a look at the starter code:

<a class="jsbin-embed" href="http://jsbin.com/cojeke/embed?html,css,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.40.3"></script>

#### Part 1: Web Fonts

We'll be using external fonts for this challenge. Let's start out by linking these fonts in your HTML.

1) Add the following code to the head of your HTML file.

```html
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" type="text/css">
```

2) Now, you need to tell your CSS where to use the font. Change the `font-family` declaration in your `body` style rule to `'Open Sans', sans serif`. Remember to put "Open Sans" in quotes so the CSS reads them together. This is necessary for font families whose names have more than one word.

*Nice! You just built a font stack. Font stacks give CSS guidance on which font to use if the preferred font is unavailable. Now, if the Google servers ever go down, your site will display with a default sans serif font!*

3) We want all headings to be bold. So, add a `font-weight` property to `h1, h2` and set it to 800.


#### Part 2: Navigation

Now, let's add in some content and build out the navigation bar.

1) Start by adding a `nav` element inside the header, between the `h1` and the `img`.

2) Create three linked menu items inside the `nav`: "work," "about," and "contact."

3) Wrap placeholder links around them like so:

```HTML
<a href="#">work</a>
```

4) Now, let's put some rules in place to format our navigation. In your CSS, add two new empty selectors: `nav` and `nav a`.

5) Let's manually reset our links' default style of `blue` and `underline`. Set `nav a`'s `text-decoration` value to `none`, and set its `color` to `black`.

6) Now, we'll start moving things around on the screen. Give the `nav a` links a left and right `margin` of `30px` and a top and bottom `margin` of `13px`. Set their `display` to `inline-block` to move them next to each other.

7) Looking good! Let's increase the size of our links, then reposition the whole nav with a float! Set the `font-size` in `nav` to `24px` and float it right.

Here's what your design should start to look like:

![](assets/horizontal-navigation-exercise/elk-with-floated-nav.png)


> Stuck? Check out the [solutions](../exercise-solutions.md#horizontal-nav) for assistance.

---

[On to the next lesson!](column-layout.md)
