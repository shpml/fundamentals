**WDI Fundamentals Unit 3**
---

#  Classes and IDs

Classes and IDs, also called **selectors**, are ways of targeting the style of specific HTML elements on your page.

So what’s the difference between them? In short, classes allow you to select and style many elements with a particular style, while IDs are only capable of styling a single element. Using these selectors allow you to have flexibility in the way you control the style of individual and groups of elements on the page.

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/ugwfg1gtqw?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

# Benefits of Classes

In the last video, we learned that class and ID selectors allow you additional flexibility and control over styling different elements on your page. You also learned the difference between classes and IDs – styling a group of elements (classes) or just one (IDs).

So what’s the recommended approach when adding these selectors to your elements? The best practice when adding specificity to your CSS is to only do so when necessary, and always think about scalability. How do we follow these practices?

## Use Element Selectors When Appropriate

Ask yourself if you can apply the style to the element selector instead of creating a class or ID. If so, use the element selector to style your elements.

## Don't Use ID Selectors in CSS

You are technically allowed to use CSS ID selectors, but these are almost never used by professional developers because of their specificity. CSS classes give you the ability to reuse styles, and any style specified with an ID isn't reusable. Also, ID selectors can override class selectors, making a codebase more difficult to maintain when it gets larger.

Overall, using class selectors in your CSS will help with the scalability of your design, and help you write cleaner code.

## Using IDs with JavaScript

When writing JavaScript, IDs are valuable to help you access and alter different elements on your page. This process is called DOM Manipulation. You'll learn more about manipulating the DOM once we dive deeper into JavaScript, but remember, when writing CSS, style and select using classes!


#### Checkpoint:

* When would you use a class selector instead of an ID selector?
* How do you add a class attribute?


[On to the next lesson.](04_lesson.md)

---
How is your Fundamentals Experience going? Take a [quick survey](../feedback.md) to give us your feedback!
