
##![Your Turn](../assets/exercise.png) Your Turn

### Elk Web Design: Part 2

In this second part of the ElK Web Design, we'll be working with web fonts and creating a horizontal navigation bar.

Remember the final design looks like this:

![](/assets/elkwebdesign/elkwebdesign.png)


### Instructions

#### Getting started

You'll be using the code editor below. Copy and paste the code from the previous exercise in so that you have code to work with. As usual, **don't forget to fork and save your JSBin link.** You'll be reusing the code to continue building on the exercise in the next unit.

Take a look at the starter code in the editor below first.

<a class="jsbin-embed" href="http://jsbin.com/tifivo/embed?html,css,outputheight=600px">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.12"></script>

#### Part 1: Web Fonts

We'll  be using external fonts for this challenge. Let's start out by linking external fonts in your HTML. But you can also link to external fonts in your HTML. Let's try it!

1 .Add the following code to the head of your HTML file.

```HTML
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" type="text/css">
```

2 . Now you need to tell CSS where to use the font. Add a font-family declaration of 'Open Sans', sans-serif to your body's style rule. Remember to put 'Open Sans' in quotes so CSS reads them together.

*Nice! You just built a font stack. Font stacks give CSS guidance on what font to use if the preferred font is unavailable. Now, if the Google servers ever go down, your site will display with a default sans-serif font!*

3 . We want all headings bold. So, add a font-weight property to h1, h2 and set it to 800.

Checkpoint: Make all the headers bold by setting the font-weight to 800.


#### Part 2: Navigation

Now, let's put in some content and build out the navigation bar.

1. Start by adding a nav element inside the header, between the h1 and the img.

2. Create three linked menu items inside the nav: "work," "about," and "contact."

4. Wrap placeholder links around them like this:

```HTML
<a href="#">work</a>
```

7 .Now Let's put some rules in place to format our navigation. In your CSS, put two new, empty selectors: nav and nav a.

8 . Rather than resetting all our CSS, let's manually reset the default link state. Set nav a's text-decoration value to none, and set its color to black.

*Add: `text-decoration: none`; to the `nav a` css property to remove the default blue and underlining from links.*

7 . Now, we'll start moving things around on the screen. Give the nav a links 1.8em of margin. And set their display to inline-block.

8 . Looking good! Let's increase the nav's font-size, then reposition the whole thing with a float! Set the nav style's font-size to 1.8em and then, float it right.

What was that? Your very first float! Here's what your design should start looking like:

![](/assets/elkwebdesign/elkdesignchapt6.png)

**Don't forget to save your code!**

[On to the next lesson.](04_lesson.md)
