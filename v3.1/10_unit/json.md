**WDI Fundamentals Unit 10**

---

# JSON

**JSON (JavaScript Object Notation)** is a lightweight, text-based data format that's based on JavaScript.

Because it's text—and looks like JavaScript—JSON is both easy for us to read and write AND easy for programs to parse and generate.

JSON is completely language-independent, but it uses conventions familiar to programmers of the "C" family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.

These properties make JSON an ideal language for data interchange.

The JSON syntax closely resembles the object literal notation we met earlier in this unit. 

However, it's not an object — just plain text data.

We cannot transfer actual objects over a network, so we send text, and the receiving browser converts this text into objects.

We use JSON to transfer data between applications and JavaScript.

#### Syntax

To keep everything consistent, all JSON code must follow a number of strict conventions (stricter even than normal JavaScript!) in order to be syntactically correct. Take a look:

```js
{
  "name": "Sasha Li",
  "occupation": "Web Developer",
  "location": "San Francisco",
  "age": 43
}
```

JSON rules include:

- Property names must be double-quoted strings (not single quotes).
- Trailing commas are forbidden.
- Leading zeros are prohibited.
- In numbers, a decimal point must be followed by at least one digit.
- Most characters are allowed in strings; however, certain characters (such as ', ", \, and newline/tab) must be "escaped" with a preceding backslash (\\) in order to be read as characters (as opposed to JSON control code).
- All strings must be double-quoted.
- No comments allowed!

#### Converting JavaScript Objects to JSON

Although sending and receiving JSON objects is beyond the scope of Fundamentals, let's see how we can convert our JavaScript objects into a JSON format that's ready to send to an outside application.

We mentioned before that, although JSON looks like our object literals, it is just plain text data and not an object.

If we want to send JavaScript objects from a browser to another application, we can use `JSON.stringify()` to convert our objects into JSON format.

Check out our JavaScript object:

```js
var favoriteMovie = {
  title: 'Thelma and Louise',
  director: 'Ridley Scott',
  year: 1991,
  imdb: 7.4
};

favoriteMovie = JSON.stringify(favoriteMovie);
```

- Here, we call `JSON.stringify()`, passing in our object, `favoriteMovie`, as an argument. We store the results back in the `favoriteMovie` variable.
- Our `favoriteMovie` variable now holds a JSON string.

#### Converting JSON to JavaScript Objects

Now let's talk about converting JSON to JavaScript objects.

We can use `JSON.parse()` to process a string containing JSON data. The action converts the JSON data into a JavaScript object.

Here's what that looks like:

```js
var favoriteMovie = {
  "title": "Thelma and Louise",
  "director": "Ridley Scott",
  "year": 1991,
  "imdb": 7.4
};

favoriteMovie = JSON.parse(favoriteMovie);
```

- We call `JSON.parse()` to process the string and convert it into a JavaScript object.
- Our `favoriteMovie` variable now holds a JavaScript object we can manipulate.

## Summary

In this lesson, we learned about JSON, a text-based data format with a syntax that closely resembles the literal notation of objects.

We can now convert our objects into JSON format, and convert our JSON into JavaScript objects.

This will come in handy when we want to send and receive data from our applications.

---
[Feeling Confident? Test yourself.](json-exercise.md)
