---
layout: ../../layouts/DocInfoLayout.astro
title: "Semantic tags in HTML"
---

# Semantic HTML

Semantic HTML means writing HTML that reinforces the **meaning** of the information in web pages and web applications rather than just defining its presentation or look. Semantic HTML introduces meaning to the web page rather than just presentation.

For example, a `<b>` tag tells the browser to make text bold (presentation), while a `<strong>` tag tells the browser that the text is important (meaning).

Using semantic tags is crucial for **Accessibility** (screen readers rely on them to navigate) and **SEO** (search engines use them to understand content hierarchy).

---

## Table of Contents

<div id="content-table">

- [1. Why Semantics Matter](#1-why-semantics-matter "Moving away from div soup")
- [2. Structural Elements](#2-structural-elements "Header, Nav, Main, and Footer")
- [3. Content Containers](#3-content-containers "Article, Section, and Aside")
- [4. Text Semantics](#4-text-semantics "Strong, Emphasis, and Headings")

</div>

---

## 1. Why Semantics Matter

In the past, developers used `<div>` tags for everything, creating what is known as "div soup." While this works visually with CSS, it provides no information about the content to machines.

**Non-Semantic Approach**:
Generic containers that say nothing about what is inside.

```html

    <div id="header">
        <div class="nav">...</div>
    </div>
    <div class="main-content">
        <div class="article">...</div>
    </div>
    <div id="footer">...</div>


```

---

## 2. Structural Elements

These elements define the macro-structure of a web page. They act as landmarks that help assistive technology navigate the document.

- `<header>`

Represents introductory content, typically a group of introductory aids or navigational aids. It usually contains the logo, search form, and author name.

- `<nav>`

A section of a page whose purpose is to provide navigation links, either within the current document or to other documents.

- `<main>`

Specifies the main content of a document. The content inside `<main> `should be unique to the document. It should not contain content that is repeated across documents (like sidebars or site-wide footers).

- `<footer>`

Typically contains the author of the document, copyright information, links to terms of use, contact information, etc.

Example of a full layout:

```html  

    <body>
        <header>
            <h1>DaviNotes</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>
        </header>

        <main>
            <h1>Understanding Semantics</h1>
            <p>This is the primary content of the page.</p>
        </main>

        <footer>
            <p>&copy; 2024 DaviNotes</p>
        </footer>
    </body>


```

---

### 3. Content Containers

When organizing content inside `<main>`, choose the tag that best represents the relationship of that content.

**`<article>` vs `<section>`**

- `<article>`: Represents a self-contained composition that can be independently distributed or reused (e.g., blog post, news story, product card). It can include `<section>` or `<aside>` inside.
- `<section>`: Represents a thematic grouping of content, usually with a heading (`h1`–`h6`). It is not independent like `<article>`; it’s part of the surrounding context.

**Example:**

```html

    <article>
        <h2>The History of HTML</h2>
        <p>HTML was created by Tim Berners-Lee...</p>

        <section>
            <h3>The Early Days</h3>
            <p>In 1991, the first version...</p>
        </section>

        <aside>
            <p>Did you know? HTML stands for HyperText Markup Language.</p>
        </aside>
    </article>


```

---

## 4. Text Semantics

Using the correct tags for text ensures that the hierarchy and emphasis are communicated effectively to all users.

<table>
    <thead>
        <tr>
            <th>Tag</th>
            <th>Description</th>
            <th>Semantic Meaning</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>&lt;h1&gt; - &lt;h6&gt;</td>
            <td>Headings</td>
            <td>Defines the outline/hierarchy of the page. &lt;h1&gt; is the most important.</td>
        </tr>
        <tr>
            <td>&lt;strong&gt;</td>
            <td>Strong</td>
            <td>Indicates that its contents have strong importance, seriousness, or urgency.</td>
        </tr>
        <tr>
            <td>&lt;em&gt;</td>
            <td>Emphasis</td>
            <td>Indicates stress emphasis (changes the tone of the sentence).</td>
        </tr>
        <tr>
            <td>&lt;blockquote&gt;</td>
            <td>Quotation</td>
            <td>Indicates that the enclosed text is an extended quotation.</td>
        </tr>
        <tr>
            <td>&lt;time&gt;</td>
            <td>Time</td>
            <td>Represents a specific period in time (machine-readable).</td>
        </tr>
    </tbody>
</table>


**Presentation vs Meaning:**

Do not use `<b>` just to make text bold. Use CSS for styling. Use `<strong>` if the text is actually important.

```html

    <b>This is bold</b>
    <i>This is italic</i>

    <strong>Warning: Do not unplug.</strong>
    <em>I really mean it.</em>
    
    <p>Published on <time datetime="2024-03-15">March 15th</time></p>


```