**WDI Fundamentals Unit 10**

---

#####By the end of this unit, you'll be able to:
- Describe what an object is and how it differs from an array
- Create an object with properties and methods

---


# Objects


In this unit, our focus is objects, an exciting aspect of JavaScript that ties into many of the concepts you've already learned.

Once you get to know objects, you'll realize how much easier your coding life can be.

Before we get started, watch this short video providing an overview of how objects in programming relate to real-world objects:

<iframe src="//fast.wistia.net/embed/iframe/lwjshtw79q?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>


## The limitations of arrays
So far, we've learned about fairly simple data types: strings, numbers, booleans, and arrays.

However, as our applications become more complex, we need more structure in our code.

The arrays we've seen so far store and manage their elements by their indices.

This is a convenient way of managing elements, but it also has some disadvantages.

Watch this short video comparing and contrasting arrays and objects:

<iframe src="//fast.wistia.net/embed/iframe/m8d1oq04br?seo=false" title="Wistia video player" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="360"></iframe>

#### Easier access to data

As mentioned in the video, objects are often called **associative arrays**, as they associate keys with values.

As you start building applications, you'll encounter many situations where you'll want to associate keys to values.

Objects are extremely useful when we want to easily access data.

Let's take a look at an example where it would be helpful to associate keys with values to easily access data.

Let's say we are developing a music-streaming website. We want to store information about each artist. Using a regular array, we would store this info like so:

```js
var artist = ["Michael", "Jackson", 1958, 13];
```

There are only a handful of values in this array, but there is no context for any of them.

What does the number 13 refer to? How old Michael Jackson was when he sang his very first hit song? The number of best selling albums he made?

It's difficult to tell because we have no clear references for each data point.

Take a look at how we could represent the artist with an object. Don't worry about syntax for now, we'll cover that soon. Just use the following example to get a feel for how to associate keys with values.

```js
var artist = {
  firstName: "Michael",
  lastName: "Jackson",
  birthYear: 1958,
  numberOneHits: 13
};
```

By associating keys with values, we can more accurately represent our artist object.

Now, we know at a glance what 13 is &mdash; the number of number one hits Michael Jackson had!


---


In the next lesson you'll get practice creating objects. Ready? [Let's get started.](creating-objects.md)
