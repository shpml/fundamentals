**WDI Fundamentals Unit 5**

---

##![Your Turn](../assets/exercise.png) Your Turn

### Elk Web Design: Part 2

In this second part of the ELK Web Design challenge, we'll work with web fonts and create a horizontal navigation bar.

Remember, this is our final design:

![](/assets/elkwebdesign/elkwebdesign.png)


### Instructions
If you don't see the JS Bin below, please refresh the page.

#### Getting Started

You'll be using the editor below. First, take a look at the starter code:

<a class="jsbin-embed" href="http://jsbin.com/wukimet/embed?html,css,outputheight=600px">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.39.19"></script>

#### Part 1: Web Fonts

We'll be using external fonts for this challenge. Let's start out by linking these fonts in your HTML.

1) Add the following code to the head of your HTML file.

```HTML
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" type="text/css">
```

2) Now, you need to tell your CSS where to use the font. Change the `font-family` declaration in your body's style rule to "Open Sans, sans serif." Remember to put Open Sans in quotes so the CSS reads them together.

*Nice! You just built a font stack. Font stacks give CSS guidance on which font to use if the preferred font is unavailable. Now, if the Google servers ever go down, your site will display with a default sans serif font!*

3) We want all headings to be bold. So, add a `font-weight` property to `h1` and `h2`, and set it to 800.


#### Part 2: Navigation

Now, let's add in some content and build out the navigation bar.

1) Start by adding a `nav` element inside the header, between the `h1` and the `img`.

2) Create three linked menu items inside the `nav`: "work," "about," and "contact."

3) Wrap placeholder links around them like so:

```HTML
<a href="#">work</a>
```

4) Now, let's put some rules in place to format our navigation. In your CSS, add two new empty selectors: `nav` and `nav a`.

5) Rather than resetting all our CSS, let's manually reset its default link state. Set nav a's text-decoration value to none, and set its color to black.

*Add `text-decoration: none;` to the `nav a` CSS property to remove the default blue color and underlining from your links.*

6) Now, we'll start moving things around on the screen. Give the nav a links 1.8em of margin. Set their display to inline-block.

7) Looking good! Let's increase the nav's `font-size`, then reposition the whole thing with a float! Set the nav style's `font-size` to 1em and float it right.

Here's what your design should start to look like:

![](/assets/elkwebdesign/elkdesignchapt6.png)


[On to the next lesson!](04_lesson.md)
