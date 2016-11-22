**WDI Fundamentals Unit 2**

---

# HTML Cheat Sheet

#### World Wide Web
* An information sharing model built on top of a global system of interconnected computer networks called the internet.

#### Websites
* Collections of files accessible through the world wide web.

#### Clients
* Personal devices such as computers, phones, and tablets that are used to access the web.

#### Servers
* Used to host the files that make up websites and “serve” those files to end users.
    
#### Elements
* The building blocks of HTML. Elements consist of an opening tag, content, and a closing tag.

  * **Headline Elements** are used for important text — like page titles — that describes content that follows. They range in order from the largest (`h1`) to the smallest (`h6`).

      ```html
      <h1>This would make a big headline.</h1>
      ```

  * **Paragraph Elements** use one of the most basic tags in HTML. They indicate blocks of text.

    ```html
     <p>This would add a block of text to a page.</p>
     ```

  * **Anchor Elements** create links. In order to create a working link, we need to add more information to the anchor tag using an (`href`) attribute, which detemines the link's destination.

    ```html
    <a href="www.generalassemb.ly"> This would make this whole sentence a link to General Assembly's homepage.</a>
    ```
    
#### Tags
* HTML syntax used to create elements. They use angle bracket bookends (`< >`) to tell a web browser how to present content.

    * **Heading Tags:** `<h1>` (largest size) through `<h6>` (smallest size) tags title the content that follows.

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
