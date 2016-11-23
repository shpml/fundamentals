**WDI Fundamentals Unit 4**

---

# Layout Basics Cheat Sheet

#### Span
* A generic wrapper for any inline content. `span`s are generally used to group small sections of content for styling purposes.

#### Div
* A generic wrapper for any block content. `div`s are used to group other elements together or to provide style to a specific area.

#### Header
* These elements kick off your web page with introductory content such as logos, headlines, titles, and links.

#### Footer
* This element wraps the content at the bottom of your web page. It often contains copyright information, links to career pages, contact information, terms of use, etc.

#### Main
* These elements contain all the primary content — articles, blog posts, images, videos, etc. — between the `<header>` and the `<footer>`.

#### Aside
* These elements contain all the secondary content between the `<header>` and `<footer>`, including supplementary information like recommended stories or archived blog links.

#### Nav
* Any navigational links that help users move around your page should be wrapped in `<nav>` tags.

#### Section
* These elements are used to group the content of a page into related chunks.

#### Article
* These elements are used to contain standalone blocks of text such as news articles, blog posts, etc.

#### Box Model
* Every HTML element on a web page is contained in a box, and the box model dictates what these elements will look like. The model consists of the content, padding, border, and margin.

Here's a diagram to help you remember:

![](../assets/elkwebdesign/boxmodel.png)

#### Content
* The text and images that are included within any element's opening and closing tags.

#### Padding
* The area outside the content but within the border. Padding will extend the `background-color` and contribute to the overall width of an object.

#### Border
* A line of variable thickness, color, and style that surrounds the padding and content.

#### Margin
* The area outside of the border that separates the object from other objects around it. Margin has a transparent `background-color`.

#### Inline Elements
* HTML elements that take up the width of their contents and do not begin with new line. They cannot have an assigned height or width.

#### Block Elements
* HTML elements that break to a new line before and after the element and take up the width of their containers by default (this is often the browser window itself). They can have an assigned padding, margin, height, and width.

#### Span
* Inline elements used to apply CSS to inline HTML.

#### Div
* Block elements used to apply CSS to blocks of HTML. `div`s typically wrap large sections of content on a page. Use semantic elements over `div`s whenever possible.
