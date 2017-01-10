**WDI Fundamentals Unit 5**

---

##![Your Turn](../assets/exercise.png) Your Turn

### Elk Web Design: Part 3

This is the final part of our ELK Design exercise! Here, we'll become more familiar with positioning elements and images using floats. Remember, floats pull whatever element they're applied to out of the normal document flow. They're your secret weapon for positioning HTML elements on a page!

### Instructions
If you don't see the JS Bin below, please refresh the page.

Here's the editor you should use to write your code:

<a class="jsbin-embed" href="http://jsbin.com/luzubuy/embed?html,css,outputheight=600px">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.12"></script>

1) Set your `div`'s font-size to 1.2em, and tell it to only stretch across 50% of the screen's width.

2) Note that the `div`s both have classes applied: `about` and `services`. Set both `div`s to display as inline-block elements.

3) Create CSS rules (selectors) for `.about` and `.services`.

4) Give `.about` a float of left.

5) Give `.services` a float of right.

At this point, you'll notice a few problems with our page:
* The two columns are smushed together.
* The footer is behaving oddly.

6) Let's start with the quickest fix. Give the footer a `clear` value of `both`. Now the footer is in the right place.

7) To fix the columns, first note that `.services` and `.about` take up 50% of the page width each. You have to borrow from the page's width to add a 2% padding on all four sides, so that each `div` keeps a total width of 50%. So, go ahead and add a `width` of 46% and `padding` of 2%.

Fabulous!

8) Now, let's box up and position the four listed services in the right-hand column.

  * Create an `li` rule, and give it a float of left.
  * Set its width to 50% and its height to 6em.

9) Give `li` an outline value of 3px solid #222222.

10) Set its `text-align` to center and `line-height` to 6em.

*Well done! The basics of the multi-column layout are all laid out. All that's left to finish are some visual elements, including color.*

11) Assign `img` a width of 480px.

12) Flip to your HTML, and wrap a new `div` with the class "hero" around the main image.

*Your `img` might freak out, but don't worry. It's because the "hero" `div` is grabbing the default `div` style written for your columns.*

13) Let's prevent that from happening. You need to counteract the styles set in the `div` selector by setting new styles for "hero." Set the "hero" class' width to 100%, its display to block, and its margin to 0.

14) In your HTML, wrap a section around both `div`s; open it after the `</header>` closing tag, and close it before the opening `<footer>` tag.

15) Create a CSS style for the section. Set its background to #222222 and make its color white. Set the section's overflow to auto.

16) Set the `h2` color to pale yellow: #fffebb. Set `h2`'s `border-bottom` to #fffebb as well.

17). Set the `li` color to black and its background to white.

Bravo! Well done.

[Now, take the quiz for Unit 5](10_quiz.md).
