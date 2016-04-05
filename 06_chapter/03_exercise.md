
##![Your Turn](../assets/exercise.png) Your Turn

Learn the basics of laying out a webpage while building a small business website for ELK Design!

### Instructions

The final design is based on a project by FEWD graduate, Lauren Kathe, and looks like this:

![](/assets/elkwebdesign/elkwebdesign.png)

#### Getting started

Take a look at the starter code in the editor below first.
Then click on the "Output" button to see what you're dealing with!


<a class="jsbin-embed" href="http://jsbin.com/mihixa/1/embed?html,css&height=600px">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.11"></script>

#### Step 1: Web Fonts

We'll  be using external fonts for this challenge. Let's start out by linking external fonts in your HTML. But you can also link to external fonts in your HTML. Let's try it!

1 .  Add <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" type="text/css"> to the head of your HTML file.

There are three parts to loading up a web font with HTML. The href tells the browser where the font is. We want the Open Sans font, in two weights: 400 for body text, and 800 for headings like this:

```HTML
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400,800" rel="stylesheet" type="text/css">
```

2 . Now you need to tell CSS where to use the font. Add a font-family declaration of 'Open Sans', sans-serif to your body's style rule. Remember to put 'Open Sans' in quotes so CSS reads them together.


*Nice! You just built a font stack. Font stacks give CSS guidance on what font to use if the preferred font is unavailable. Now, if the Google servers ever go down, your site will display with a default sans-serif font!*


3 . We want all headings bold. So, add a font-weight property to h1, h2 and set it to 800.

Checkpoint: Make all the headers bold by setting the font-weight to 800.


#### Navigation

Now, let's put in some content and build out the navigation bar@ The HTML bones of the navigation go in the header.

1. Start by adding the nav element.

2. Open and close a nav element inside the header, between the h1 and the img.

3. Here are the three nav items that you should add:
```HTML
<nav>
home
work
contact
</nav>
```

4. Wrap placeholder links around them like this:

```
<a href="#">work</a>
```

5 . Create three linked menu items inside the nav: "work," "about," and "contact."

6 . Let's put some rules in place to format our navigation. Rather than resetting all our CSS, let's manually reset the default link state. This CSS removes default blue and underlining from links.
* Put two new, empty selectors in your CSS: nav and nav a.
* Set nav a's text-decoration value to none, and set its color to black.

7 . Now, we'll start moving things around on the screen.

* Give the nav a links 1.8em of margin.
* And set their display to inline-block.

Looking good!

8 .Let's increase the nav's font-size, then reposition the whole thing with a float!

* Set the nav style's font-size to 1.8em.
* Then, float it right.

What was that? Your very first float!
