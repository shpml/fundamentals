**WDI Fundamentals Unit 5**
---

# Semantic Elements

**Semantic elements** group and organize content with descriptive names that clearly imply the purpose of the content around which they are wrapped. Structuring your HTML with semantic elements will improve your page in a number of ways.

1 . Organization: if you ever need to update your code, finding the specific block for which you're looking will be easier.
2 . Optimization: search engines like Google will have an easier time understanding the content on your sire, so your site will be easier for others to find.
3 . Accessibility: screen readers - devices that read the content on websites for persons with vision and reading disabilities - can more easily navigate your site, making it more accessible for everyone.

The first three semantic elements you should know are `<header>` `<footer>`, `<main>` and `<aside>`. These establish the beginning, end, primary and secondary content of your page.

<header> </header>
These elements kick off your page with introductory content like logos, headlines, titles, and links.


#### `<footer> </footer>`
This element wraps the content at the bottom of your web page. It often contains copyright information, links to career pages, contact information, terms of use, etc.

#### `<main> </main>`
These elements contain all the primary content — articles, blog posts, images, videos, etc. — between the <header> and <footer>.

#### `<aside> </aside>`
These elements contain all the secondary content between the `<header>` and `<footer>`. They wrap secondary content and supplemental information, like recommended stories or archived links.

While these elements provide a fundamental structure for your page, but they definitely lack specificity! Thus, after adding your `<header>`, `<main>`, `<aside>`, and `<footer>` elements, you'll need to nest several additional semantic elements within those to further organize your page.

These additional semantic elements include:

#### `<nav> </nav>`
Any navigational links that help users get around your page should be wrapped in <nav> tags.

#### `<section> </section>`
These elements are used to group the content of a page into related chunks. Section tags would work okay for this example page; however, there's an even better semantic element available...

#### `<article> </article>`
These elements are used to contain standalone blocks of text, such as news articles, blog posts, etc.

Let's take a look at how the semantic elements in our example image might be coded in HTML:

![](../assets/elkwebdesign/semantic2.png)

![](../assets/elkwebdesign/semantic.png)

You may have noticed that certain elements, particularly `<section>`, `<nav>`, and `<article>` repeated several times throughout the page. That's perfectly fine; however, if that's the case in your code, make sure to add class or ID attributes to each one to ensure it's easy to find and manipulate.


Other than `<main>`, which should only appear once in an HTML page, semantic elements can recur as many times as necessary throughout your page. You'll often find nesting certain semantic elements within other semantic elements can help with organization. For example, a long `<article>` element might be broken down with several `<section>` elements or even its own `<header>` and `<footer>` elements nested inside.

As you continue to build web pages, you’ll find that organizing your code with clear semantic elements will make creating content, developing styles, and fixing bugs all much easier.
