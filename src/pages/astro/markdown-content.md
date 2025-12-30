---
layout: ../../layouts/DocsLayout.astro
title: "Markdown Content in Astro"
---

# Markdown Content

Astro treats **Markdown** (`.md`) as a first-class citizen. It allows you to create pages directly from Markdown files or manage complex content structures using **Content Collections**.

This makes Astro an excellent choice for content-heavy sites like blogs, documentation, and portfolios, without needing a database or a complex CMS.

---

## Table of Contents

<div id="content-table">

- [1. Markdown Pages](#1-markdown-pages "Creating routes from .md files")
- [2. Frontmatter & Layouts](#2-frontmatter-layouts "Adding metadata and styling")
- [3. Content Collections](#3-content-collections "Type-safe content management")
  - [3.1 Configuration](#31-configuration "Defining collections in config.ts")
  - [3.2 Querying Content](#32-querying-content "Fetching data with getCollection")

</div>

---

## 1. Markdown Pages

The simplest way to create a page is to add a `.md` file to your `src/pages/` directory.  Just like `.astro` files, the file path determines the URL.

```markdown

    # File: src/pages/welcome.md
    
    # Hello World
    
    This is my first Markdown page in Astro.
    It will be accessible at `mysite.com/welcome`.

```

Astro comes with built-in support for GitHub Flavored Markdown, meaning features like tables and code blocks work out of the box.

---

## 2. Frontmatter & Layouts

Markdown files support **Frontmatter**, a YAML block at the very top of the file used to define metadata like titles, dates, or tags.

Crucially, you can use the special `layout` property in the frontmatter to wrap your Markdown content in an Astro Layout component.

```markdown

    ---
    layout: ../layouts/BlogPostLayout.astro
    title: "My First Post"
    author: "Astro Learner"
    date: "2024-01-01"
    ---
    
    # Introduction
    
    This content will be injected into the `<slot />` of the BlogPostLayout.

```

**Accessing Frontmatter in Layouts**:

When you assign a layout, the frontmatter data is passed to the layout component via `Astro.props`.

```markdown

    ---
    // src/layouts/BlogPostLayout.astro
    const { frontmatter } = Astro.props;
    ---
    
    <html>
      <head><title>{frontmatter.title}</title></head>
      <body>
        <h1>{frontmatter.title}</h1>
        <p>Written by: {frontmatter.author}</p>
        <slot /> </body>
    </html>


```

---

## 3. Content Collections

For larger projects, creating individual pages in `src/pages` can become messy. **Content Collections** allow you to organize your Markdown (or MDX) files in the `src/content/` folder and query them like a database. 

### 3.1 Configuration

To use collections, you create a `config.ts` file inside `src/content/`. This allows you to define a schema using **Zod** to validate your frontmatter (ensuring every post has a title, date, etc.).

```markdown

    // src/content/config.ts
    import { z, defineCollection } from 'astro:content';
    
    const blogCollection = defineCollection({
      type: 'content',
      schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        draft: z.boolean().optional(),
      }),
    });
    
    export const collections = {
      'blog': blogCollection,
    };


```
### 3.2 Querying Content

Instead of importing files manually, you use the `getCollection` function to retrieve your content. This is typically done inside a dynamic route (like `src/pages/blog/[...slug].astro`) to generate pages for all your entries.

```markdown

    ---
    // src/pages/blog/[...slug].astro
    import { getCollection } from 'astro:content';
    
    // 1. Generate a new path for every collection entry
    export async function getStaticPaths() {
      const blogEntries = await getCollection('blog');
      return blogEntries.map(entry => ({
        params: { slug: entry.slug }, props: { entry },
      }));
    }
    
    // 2. Render the specific entry
    const { entry } = Astro.props;
    const { Content } = await entry.render();
    ---
    
    <h1>{entry.data.title}</h1>
    <Content />


```