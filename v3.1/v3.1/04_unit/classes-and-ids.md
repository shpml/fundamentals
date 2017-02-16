**WDI Fundamentals Unit 4**
---

# Classes and IDs

Using CSS, you can reference and style your HTML by selecting the class and/or ID attributes of specific HTML elements.

What's the difference between the two? In short, using classes allows you to select and style _groups of elements_ with a particular style, while using an ID only allows for an _individual element_ to be styled. Using classes and IDs allows you to have flexibility in how you control the design of individual elements and groups of elements on the page.

<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="//fast.wistia.net/embed/iframe/ugwfg1gtqw?seo=false&videoFoam=true" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

## Benefits of Classes

In this video, we learned that classes and IDs allow you additional flexibility and control over styling different elements on your page. We also learned the difference between classes (used to style groups of elements) and IDs (used to style just one element).

So what's the recommended approach when adding classes and IDs to your elements? 

The best practice when adding specificity to your CSS is to only do so when necessary, and always think about scalability. How do we follow these practices?

## Use Element Selectors When Appropriate

Ask yourself if you can apply the style to the element selector instead of creating a class or ID. If so, use the element selector to style your elements. Think general and only get more specific if you need to!

```css
a {
	text-decoration: none;
	color: #00A6B3;
}
```

## Use IDs Sparingly in CSS

You are technically allowed to use IDs to style elements in CSS, but they are almost never used by professional developers because of their specificity. 

CSS classes give you the ability to reuse styles, and any style specified with an ID isn't reusable. Also, IDs can override classes, making a codebase more difficult to maintain when it gets larger.

In general, using classes in your CSS will help with the scalability of your design and help you write cleaner code.

## Using IDs with JavaScript

When writing JavaScript, IDs are valuable to help you access and alter different elements on your page. This process is called DOM Manipulation. You'll learn more about manipulating the DOM once we dive deeper into JavaScript, but remember: When writing CSS, use classes to style and select!


#### Checkpoint:

* When would you use a class selector instead of an ID selector?
* How do you add a class attribute?


---

[On to the next lesson.](linking-html-and-css.md)
