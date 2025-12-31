---
layout: ../../layouts/DocInfoLayout.astro
title: "Pages & Routing in Astro"
---

# Pages & Routing

Astro uses **file-based routing**, a strategy where the layout of your files in the `src/pages/` directory directly mirrors the URL structure of your built site. 

Unlike Single Page Applications (SPAs) that often require a complex router configuration file, Astro handles routing automatically based on your file names. It supports `.astro`, `.md`, `.mdx`, `.html`, and `.js`/`.ts` files as pages.

---

## Table of Contents

<div id="content-table">

- [1. File-Based Routing](#1-file-based-routing "Understanding how files map to URLs")
- [2. Static Routes](#2-static-routes "Creating standard pages")
- [3. Dynamic Routes](#3-dynamic-routes "Generating pages from data")
  - [3.1 The [param] Syntax](#31-the-param-syntax "Using brackets for dynamic segments")
  - [3.2 getStaticPaths()](#32-getstaticpaths "Defining paths for static builds")
- [4. 404 Error Page](#4-404-error-page "Handling missing pages")

</div>

---

## 1. File-Based Routing

Astro looks for supported file types inside the `src/pages/` directory. Each file automatically becomes a route on your website.

**Mapping Examples**:

- `src/pages/index.astro`  ->  `mysite.com/`
- `src/pages/about.astro`  ->  `mysite.com/about`
- `src/pages/blog/post.md` ->  `mysite.com/blog/post`

Files starting with an underscore (e.g., `_Hidden.astro`) are ignored by the router, which is useful for co-locating components or styles that shouldn't be pages themselves.

---

## 2. Static Routes

Static routes are specific files that correspond to a single page. You can use standard HTML, Markdown, or Astro components.

```astro

    ---
    // src/pages/contact.astro
    const pageTitle = "Contact Us";
    ---
    
    <html>
      <head><title>{pageTitle}</title></head>
      <body>
        <h1>Get in touch</h1>
        <p>Email us at hello@example.com</p>
      </body>
    </html>


```

If you use a directory named `index.astro`, it will act as the root page for that folder.

```astro

    # This structure:
    src/pages/
      ├── services/
      │   ├── index.astro
      │   └── design.astro
      
    # Results in these URLs:
    mysite.com/services
    mysite.com/services/design


```

---

## 3. Dynamic Routes

Dynamic routes allow you to create many pages from a single file layout. This is essential for content like blog posts, product pages, or user profiles where the structure is the same but the data changes.

### 3.1 The [param] Syntax

To create a dynamic route, use square brackets `[]` in the filename. The text inside the brackets becomes a parameter that you can read in your code.

For example, a file named `src/pages/dogs/[dog].astro` will match URLs like `/dogs/clifford` or `/dogs/rover`.

### 3.2 getStaticPaths()

Because Astro is a static site generator by default, it needs to know **exactly** which pages to build at compilation time. You must export a `getStaticPaths()` function to define all possible routes.

```astro

    ---
    // src/pages/dogs/[dog].astro
    
    export function getStaticPaths() {
      // Return an array of objects with params
      return [
        { params: { dog: 'clifford' } },
        { params: { dog: 'rover' } },
        { params: { dog: 'spot' } },
      ];
    }
    
    // Access the parameter for the current page
    const { dog } = Astro.params;
    ---
    
    <h1>Good boy, {dog}!</h1>


```
**Key Concepts**:

- [cite_start]`params`: Matches the bracket name in the filename (e.g., `{ dog: ... }` matches `[dog].astro`). [cite: 1]
- `props`: You can also pass data directly to the page component for each route.

---

## 4. 404 Error Page

You can create a custom 404 error page by creating a file named `404.astro` (or `404.md`) in the root of `src/pages/`.

Most deploy services (like Netlify, Vercel, or GitHub Pages) will automatically look for this file and display it when a user visits a URL that does not exist.

```astro

    ---
    // src/pages/404.astro
    import Layout from '../layouts/MainLayout.astro';
    ---
    
    <Layout title="Not Found">
        <div class="error-container">
            <h1>404</h1>
            <p>Oops! The page you are looking for doesn't exist.</p>
            <a href="/">Go back home</a>
        </div>
    </Layout>


```