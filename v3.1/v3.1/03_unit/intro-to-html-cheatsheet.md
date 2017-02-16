**WDI Fundamentals Unit 3**

---

# HTML Cheat Sheet

#### Elements
* The building blocks of HTML. Consists of a start tag, content, and end tag.

  * **Heading Elements** are used for important text — like page titles — that describe content that comes after it. They range in order from the largest (`h1`) to the smallest (`h6`).

      ```html
      <h1>This would make a big headline</h1>
      ```

  * **Paragraph Elements** use one of the most common tags in HTML. They indicate blocks of text.

    ```html
     <p>This would add a block of text to a page</p>
     ```

  * **Anchor Elements** create links. In order to make a working link, we need to add more information to the anchor tag using an (`href`) attribute that detemines the link's destination.

    ```html
    <a href="http://www.generalassemb.ly"> This would make this whole sentence a link to General Assembly's home page.</a>
    ```

#### Tags
* HTML syntax used to create elements. They use angle bracket bookends (`< >`) to tell a web browser how to present content.

    * **Heading Tags:** `<h1>` (largest size) through `<h6>` (smallest size) titles the content that follows it.

    * **Paragraph Tags:** `<p>` tags indicate blocks of text.

    * **Anchor tags:** `<a>` tags create links.

#### HTML Attribute
* Adds information to an HTML element. An HTML tag can have one or many attributes. Attributes are always included in the opening tag. They are preceded by a space, include the name of the attribute, an equal sign, and a value in quotes.

#### HTML Boilerplate

In order to organize tags properly, start with a set of structural elements called the HTML boilerplate. It should look like this:

```html
<!DOCTYPE html>
<html>
     <head>

     </head>
     <body>

     </body>
</html>
```

---

[Practice your expertise with the Unit 3 Assignment!](intro-to-html-assignment.md)
