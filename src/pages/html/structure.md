---
layout: ../../layouts/DocInfoLayout.astro
title: "Structure in HTML"
---

# Structure

HTML (HyperText Markup Language) is the standard markup language for creating the structure of web pages. Unlike programming languages like **Java** or **Python** that handle logic, HTML uses **markup** to define the elements on a page, telling the browser how to display text, images, and other content.

Every web page is essentially a document structured as a tree of objects, known as the **DOM** (Document Object Model).

---

## Table of Contents

<div id="content-table">

- [1. Tags vs Elements](#1-tags-vs-elements "Difference between opening tags, closing tags, and elements")
- [2. Attributes](#2-attributes "Providing additional information to elements")
- [3. Nesting](#3-nesting "Understanding parent-child relationships")
- [4. The Basic Skeleton](#4-the-basic-skeleton "The required structure of every HTML5 document")

</div>

---

## 1. Tags vs Elements

HTML is built using **tags**. A tag is a keyword enclosed in angle brackets, like `<p>`. Most tags come in pairs: an **opening tag** and a **closing tag** (which includes a forward slash `/`).

An **Element** refers to the entire block: the opening tag, the content inside, and the closing tag.

```html

    <p>This is a paragraph.</p>


```

**Void Elements (Self-closing)**

Some elements do not have content and therefore do not need a closing tag. These are called **void** or empty elements.

HTML

```html

    <br>

    <img src="logo.png" alt="Company Logo">
    
    <hr>


```

---

## 2. Attributes
Attributes provide **additional information** about an element. They are always specified in the **opening tag** and usually come in name/value pairs like `name="value"`.

```html

    <a href="https://google.com">Go to Google</a>

    <h1 class="title" id="main-heading">Welcome to DaviNotes</h1>


```

| Attribute | Description | Example |
|-----------|-------------|---------|
| class     | Specifies one or more class names for an element (used by CSS/JS). | `<div class="container">` |
| id        | Specifies a unique id for an element. | `<div id="header">` |
| style     | Specifies an inline CSS style for an element. | `<p style="color:red;">` |
| src       | Specifies the URL of the media file (images, scripts). | `<script src="app.js">` |
| href      | Specifies the URL for a link. | `<a href="page.html">` |

---

## 3. Nesting
HTML elements can be nested inside other elements. This creates a **hierarchy** (Parent > Child) which is crucial for the structure of the webpage.

**Rule of Thumb:** The last tag you open should be the first one you close inside a nested structure.

```html

    <div class="card">
        <h2>Card Title</h2>
        <p>This is a <strong>bold</strong> word inside a paragraph.</p>
    </div>


```

If you nest incorrectly, the browser might try to fix it, but it often leads to broken layouts.


```html

    <p>This is <strong>wrong.</p></strong>


```

---

## 4. The Basic Skeleton
Every HTML document requires a standard boilerplate to ensure browsers render it correctly. 

This structure represents the root of the **DOM Tree**.

```html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Page Title</title>
    </head>
    <body>

        <h1>My First Heading</h1>
        <p>My first paragraph.</p>

    </body>
    </html>


```

**Key Components:**

- `<!DOCTYPE html>`: Tells the browser that this is an HTML5 document.

- `<html>`: The root element. All other elements are descendants of this tag.

- `<head>`: Contains meta-information about the document that is **not displayed** on the page (SEO info, CSS links, title).

- `<body>`: Contains the **visible** page content (headings, paragraphs, images, lists, etc.).