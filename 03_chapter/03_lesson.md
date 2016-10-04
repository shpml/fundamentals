**WDI Fundamentals Unit 3**
---

#Classes and IDs

Classes and IDs, also called **selectors**, are ways of targeting the style of specific HTML elements on your page.

So what’s the difference between them? In short, classes allow you to style many elements with a particular style, while IDs are only capable of styling a single element. Using these selectors allows you flexibility and control of styling individual, as well as groups, of elements on your page.

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/ugwfg1gtqw?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

#Benefits of Classes

In the last video, we learned that class and ID selectors allow you additional flexibility and control over styling different elements on your page. You also learned the difference between classes and IDs– styling a group of elements (classes) or just one (IDs).

So what’s the recommended approach when adding these selectors to your elements? The best practice when adding specificity to your CSS is to only do so when necessary, and always think about scalability. How do we follow these practices?

## Use Element Selectors
Ask yourself if you can apply the style to the element selector instead of creating a class or ID. If so, use the element selector to style your elements.

## Don't Use ID's in CSS
Although ID's are technically allowed in CSS, they are almost never used by profession developers because of their specificity. ID selectors have the ability to override class selectors– making maintenance of a large codebase difficult. Using classes will help with the scalability of your design, and help you write cleaner code.

## Using ID's in JavaScript
In JavaScript, ID's are valuable to help you access and alter different elements on your page. This process is called DOM Manipulation. You'll learn more about manipulating the DOM once we dive deeper into JavaScript.


#### Checkpoint:

* When would you choose a class over an ID?
* How do you add a class attribute?


[On to the next lesson.](04_lesson.md)
