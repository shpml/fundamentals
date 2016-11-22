**WDI Fundamentals Unit 2**

---

##![Your Turn](../assets/exercise.png) Your Turn

In this exercise, you'll write your first **hyperlinks** — those magical, clickable links that take you from one place to another on the web.

When complete, your output should look like this:

![](../assets/elkwebdesign/hyperlinks.png)


### Instructions
If you don't see the JS Bin below, please refresh the page.

Use the editor provided to write your code and see what renders!

<a class="jsbin-embed" href="https://jsbin.com/vuquwe/embed?htmlheight=600px">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?3.35.12"></script>


1) Give your website some content: Introduce yourself, mention a social media account (or a website of your choosing), and ask users to send you an email. Try something like this:

*Hi, I'm awesome.
Follow me on Twitter.  
Send me an email.*

2) Wrap "Hi, I'm awesome." (the first line) in `h1` tags.

3) Wrap the rest of your content with `p` tags. You'll want to use the paragraph tag on both the second and third lines. HTML tags are reusable, so you can use as many of each kind as you need.

4) Wrap the text "Follow me" in an *anchor element* (with `<a>` and `</a>`).

5) The opening `a` tag needs a *hyperlink reference attribute* (`href`) so it knows where to go when clicked. Go ahead and link to your Twitter page (or whichever website you chose).

Example:
`<a href="http://twitter.com/GA">Follow me</a> on twitter.`

> **NOTE** Sometimes you won't know the link destination you want until you've finished coding your site. In those cases, you can substitute a hash symbol as a placeholder like so: `Send me an <a href="#">email</a>.`

6) Now, wrap an empty `a` tag around the word "email" on the second line.

7) Put `mailto:` in front of your email address so the browser knows it's not a web page.

Example:
`Send me an <a href="mailto:me@email.com"> email </a>.`


> **NOTE** HTML pays attention to spaces between tags. Only words should be hyperlinked, not spaces or punctuation.


8) Click on the **Output** button to see what your HTML code renders.


---


#### Checkpoint

Make sure you have:

- Made the introductory sentence a top-level heading with an opening `<h1>` tag and a closing `</h1>`tag.
- Wrapped the rest of the content in two `p` tags.
- Linked to your Twitter profile or another website.
- Created an email link with the proper email address or a placeholder.


You can do a lot of neat things using attributes and links. Let's keep going!

---

[Your turn! Time to take the Unit 2 Quiz. ](06_quiz.md)
