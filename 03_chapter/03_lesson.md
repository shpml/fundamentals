**WDI Fundamentals Unit 3**
---

#  Classes and IDs

Using CSS, you can reference and style your HTML by selecting the class and/or ID attributes of specific HTML elements.

What’s the difference between the two? In short, using classes allows you to select and style many elements at once, while using IDs only allows you to style a one element at a time. Using these classes and IDs provides greater flexibility in how you control the design of individual elements and groups of elements on a page.

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/ugwfg1gtqw?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

# Benefits of Classes

In the last video, we learned that classes and IDs allow you additional flexibility and control when styling different elements on your page. We also learned the difference between classes (which style a group of elements) and IDs (which style one element at a time).

So, what’s the recommended approach when adding classes and IDs to your elements? The best practice when adding specificity to your CSS is to only do so when necessary and always think about scalability. How do we follow these practices?

## Use Element Selectors When Appropriate

Ask yourself if you can apply the style to the element selector instead of creating a class or ID. If so, use the element selector to style your elements.

## Don't Use IDs in CSS

You are technically allowed to use CSS IDs, but these are almost never used by professional developers because of their specificity. CSS classes give you the ability to reuse styles, while any style specified with an ID cannot be reused. Also, IDs can override classes, making a code base more difficult to maintain as it gets larger.

In general, using classes in your CSS will help with the scalability of your design and allow you to write cleaner code.

## Using IDs with JavaScript

When writing JavaScript, IDs are valuable for helping you access and alter different elements on your page. This process is known as DOM Manipulation. You'll learn more about manipulating the DOM once we dive deeper into JavaScript, but remember: When writing CSS, use classes to style and select!


#### Checkpoint:

* When would you use a class selector instead of an ID selector?
* How do you add a class attribute?


[On to the next lesson!](04_lesson.md)
