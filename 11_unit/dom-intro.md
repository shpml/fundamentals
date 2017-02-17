**WDI Fundamentals Unit 11**

---

#####By the end of this unit, you'll be able to:
- Explain what the DOM is & what nodes are 
- Select elements from the DOM 
- Create new elements and attributes programmatically
- Bind events to single and multiple DOM events using vanilla JS
- Capture data from specific events and manipulate or iterate through the data 
- Create a listener for mouse and keyboard events and respond with an action 

---

By now, you should be familiar with all the fundamental JavaScript data types, including objects.

We can use existing objects (or ones we create ourselves) to pass around information and functionality.

Understanding the fundamentals of objects is essential to using JavaScript to build our sites and applications.

Previously, you may have relied on `console.log` and `alert` to give feedback to users, but these will only get you so far.

In this unit, we'll look at how we can provide more meaningful feedback and make our sites more user friendly by allowing users to interact with our site and see its contents update in real time.

Before we get too deep into the DOM (Document Object Model), let's watch a video to better understand how it works in the browser:

<iframe src="//fast.wistia.net/embed/iframe/kbrc8w8c13?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>


## Intro to the DOM

Let's walk through some of the primary aspects of the DOM.

1) The DOM allows you to find elements.

- JavaScript exposes the DOM of browser pages as an object that we can access called "document."

- This allows us to search through and access elements on the page such as links, images, paragraphs, etc.

2) The DOM allows you to _get_ content.

- The DOM makes it easy to access content within a page, especially when you want to find out what information a user has entered into a form field.

- The answers could include email addresses, first and last names, and more.



<img src="http://circuits-assets.generalassemb.ly/prod/asset/4585/Slide-6-Form-Email.svg" width="350px">

3) The DOM allows you to _set_ content.

- The DOM also allows us to dynamically update the content of the HTML elements on our page.

- Maybe we want to change the text of the h1 to read "JavaScript Ninja's Website", or maybe we want to update the src attribute of an image when the user clicks a "next" button. We can dynamically update any of the HTML, text content, or attributes for the elements on our page.

4) The DOM allows you to add animations and effects.

- This is where things start to get fun! Maybe we want a dropdown menu to slide down when a user clicks on an icon. Or, maybe we want a "Success!" message to fade in when our user submits a form.

- Perhaps we want different images to fade in and out as a user scrolls down the page. All of this is possible with JavaScript!


<img src="http://circuits-assets.generalassemb.ly/prod/asset/4586/Slide-7-Sidebar.svg" width="350px">


5) The DOM allows you to create **event listeners**.

- We don't always want the final state of our page to be the same as its initial state.

- JavaScript allows us to react to the user's actions by having the DOM "listen", or "wait," for a user to take an action (trigger an event) before we run a block of code.

To review, the DOM allows us to:

![](http://circuits-assets.generalassemb.ly/prod/asset/4588/Slide-10-4-Reasons.svg)


#### The DOM and the browser
As we've seen, the browser pulls in these HTML documents, parses them, and creates object models of the pages in its memory.

This model is the **Document Object Model (DOM)**.

The DOM is structured like a tree, which we (unsurprisingly) call the **DOM Tree**.

Each element in the HTML document is represented by a **DOM node**.


![](http://circuits-assets.generalassemb.ly/prod/asset/4590/Slide-17-DOM-Tree-Annotated.svg)

You can think of a node as a live object you can access and change using JavaScript.

When the model is updated, those changes are reflected on screen.


> As a note, you may sometimes hear developers use the terms "node" and "element" interchangeably.

> They often say things like "Let's select an element to work with," instead of "Let's select a node to work with."


#### Example

Here's how the DOM Tree structure works within the web page for a simple to-do list:


![](http://circuits-assets.generalassemb.ly/prod/asset/4645/Slide-20.png)


1. Perhaps we want to add a class or update styling to change the background color for an element.
- The DOM allows us to get and set attributes for these nodes.

2. In our to-do list, we can access and change its content — for example if we wanted to change the text in the third `<li>` to read "Return library books — DONE!"
3. We can even add new nodes to the page, or remove ones we no longer want.

#### DOM vs. HTML
#### Inspecting the DOM
It's common for front-end developers to work with the DOM while developing. But, how do they do it?

Two words: Developer tools.

Most browsers offer a developer tools feature which allows users to inspect and play with the DOM.


For example, if you are using a Chrome browser, you can right-click anywhere within the site you're viewing and select "Inspect" to open Developer Tools.

![](http://circuits-assets.generalassemb.ly/prod/asset/5143/inspect_element.png)


Or you can type the following shortcuts:  
**Mac** - Command + Shift + C  
**Windows / Linux** - Ctrl + Shift + C or F12.


#### How is the DOM different from HTML?

When you look at the "elements" panel in developer tools, you're seeing the browser's rendered version of HTML (the DOM).

It should look similar to your normal HTML, but you'll notice it isn't exactly the same.

The DOM is a living model of the page, made up of node objects that can be manipulated with JavaScript.

If your HTML isn't properly structured (e.g. you're missing any required elements) the browser will fix its structure as it renders.


And, if you want to use JS to manipulate the DOM (by adding elements, for example), your DOM will render dynamically. On the other hand, your HTML wouldn't reflect these changes as it is static.

Say we want to use JavaScript to add a fourth list item to the page — "Feed the cat." Then, perhaps we want to change the background-color of the first list item to yellow. And, maybe we want to change the text content of the third list item to "Return library books — DONE!"



Here is what the DOM looks like with our new changes:


![](http://circuits-assets.generalassemb.ly/prod/asset/4651/Slide-48.png)

The DOM has changed quite a bit from our original HTML file.

*   We added a fourth list item that wasn't in our HTML file (Feed the cat)

*   We changed the background color of our first list item to yellow (notice the inline style attribute added to the first list item:

        <li style="background-color: yellow;"> Call Mom </li>

*   We also updated the third list item to read "Return library books - DONE!"



#### Summary

So, the DOM is a (potentially) large object that describes the structure of our content. Because it's an object, we can use standard techniques to get and set data.

In the browser, the DOM is represented by the `document` object. Luckily, JS specifies some built-in methods that make the DOM easier to us.


<iframe src="//fast.wistia.net/embed/iframe/z8rbhaywbt?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>


[Let's get started.](accessing-the-dom.md)
