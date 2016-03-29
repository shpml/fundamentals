
##![Your Turn](../assets/exercise.png) Your Turn

In this exercise, you'll write your first hyperlinks: the magical things that you click to get from here to there on the web!

### Instructions

Use the editor provided below to write your code below and see what it renders! Follow the steps below.

<a class="jsbin-embed" href="http://jsbin.com/zevojec/embed?html&height=600px">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.11"></script>

1 . Give your website some content: introduce yourself, mention one social media account (or any website of your choosing), and ask for an email. Something like this should work:

*Hi, I'm awesome.
Follow me on twitter.  
Send me an email.*

2 . Wrap your header in *h1 tags*, and the rest of your content with *paragraph tags*. You'll want to use the paragraph tag on both the second and third line. Remember, HTML tags are reusable, so you can use as many of each kind as you need.

3 . To create a hyperlink, first wrap the text "Follow me" in an *anchor element* (with `<a>` and `</a>`).

4 . The opening `<a>` tag needs a **h**yperlink **r**eference **a**ttribute, so it knows where to go when clicked. Go ahead and link to your to your twitter (or other social media) page. If you aren't on social media, link to any website you want!

example:
`<a href="http://twitter.com/GA">Follow me</a> on twitter.`

5 . Now Wrap an empty *anchor* around the email link. Remember: don't include spaces or punctuation marks between the two anchor tags.

6 . Put mailto: in front of your email address, so the browser knows it's not a web page!
HTML doesn't understand the spaces and line breaks in your code. Element tags can help out! Go ahead and open a level one heading tag at the very beginning.

`Send me an <a href="mailto:me@email.com"> email </a>.`

>Note: HTML pays attention to spaces between tags. Only words should be hyperlinked, not spaces or punctuation.

One more thing! Sometimes you won't know link destinations until you're almost done building a site. In those cases, we use a hash as a placeholder like so:

`Send me an <a href="mailto:me@email.com?subject=hello, awesome!">email</a>.`

*Click on the output button to see what your HTML code renders. It should look like this:*

![](../assets/elkwebdesign/hyperlinks.png)

#### Checkpoint

Make sure you have:

- Made the introductory sentence a top-level heading with a `<h1>` tag and closed it with a `</h1>`tag.
- The rest of the content will be in two paragraphs, or p elements.
- Linked to your twitter (or other social media) page.


You can do a lot of neat things with attributes and links. Let's keep going!

---

[On to the lesson.](08_lesson.md)
