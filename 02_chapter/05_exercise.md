**WDI Fundamentals Unit 2**

---

##![Your Turn](../assets/exercise.png) Your Turn

In this exercise, you'll write your first **hyperlinks**: the magical things that you click to get from here to there on the web!

When complete, your output should look like this:

![](../assets/elkwebdesign/hyperlinks.png)


### Instructions

Use the editor provided below to write your code and see what renders!

<a class="jsbin-embed" href="https://jsbin.com/vuquwe/embed?htmlheight=600px">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.35.12"></script>


1 . Give your website some content: introduce yourself, mention one social media account (or any website of your choosing), and ask for an email. Something like this should work:

*Hi, I'm awesome.
Follow me on twitter.  
Send me an email.*

2 . Wrap the first line, "Hi, I'm awesome" in *h1 tags*.

3 . Wrap the rest of your content with *paragraph tags*. You'll want to use the paragraph tag on both the second and third line. HTML tags are reusable, so you can use as many of each kind as you need!

4 . Wrap the text "Follow me" in an *anchor element* (with `<a>` and `</a>`).

5 . The opening `<a>` tag needs a **h**yperlink **r**eference **a**ttribute, so it knows where to go when clicked. Go ahead and link to your to your twitter (or other social media) page. If you aren't on social media, link to any website you want!

Example:
`<a href="http://twitter.com/GA">Follow me</a> on twitter.`

> **NOTE** One more thing! Sometimes you won't know link destinations until you're almost done building a site. In those cases, we use a hash as a placeholder like so: `Send me an <a href="#">email</a>.`

5 . Now, wrap an empty *anchor* around the word "email" on the second line.

6 . Put `mailto`: in front of your email address, so the browser knows it's not a web page!

`Send me an <a href="mailto:me@email.com"> email </a>.`

> **NOTE** HTML pays attention to spaces between tags. Only words should be hyperlinked, not spaces or punctuation.



Click on the **OUTPUT** button to see what your HTML code renders.


---


#### Checkpoint

Make sure you have:

- Made the introductory sentence a top-level heading with a `<h1>` tag and closed it with a `</h1>`tag.
- The rest of the content will be in two paragraphs, or p elements.
- Linked to your twitter (or other social media) page.
- Created an email link with the proper email or placeholder.


You can do a lot of neat things with attributes and links. Let's keep going!

---

[On to the lesson.](08_lesson.md)
