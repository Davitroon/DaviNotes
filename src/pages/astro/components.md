---

layout: ../../layouts/DocInfoLayout.astro
title: "Components in Astro"

---

# Components

Astro components are the fundamental building blocks of an Astro project. They are HTML-only templating components with no client-side runtime overhead by default. Unlike **React** or **Vue** which send JavaScript to the browser, Astro components render to static HTML on the server.

Astro components use the `.astro` file extension and combine a **Component Script** (JavaScript/TypeScript) with a **Component Template** (HTML-like syntax).

---

## Table of Contents

<div id="content-table">

- [1. Component Structure](#1-component-structure "Learn the anatomy of an .astro file")
- [2. Props](#2-props "Passing data to components")
- [3. Layouts & Slots](#3-layouts-slots "Injecting child content into components")
  - [3.1 Creating a Layout](#31-creating-a-layout "How to create reusable layouts in Astro")
  - [3.2 Named Slots](#32-named-slots "Injecting content into specific areas of a layout")
- [4. UI Frameworks](#4-ui-frameworks "Using React, Vue, or Svelte in Astro")
  - [4.1 Importing Components](#41-importing-components "How to use framework components")
  - [4.2 Hydration Directives](#42-hydration-directives "Making components interactive")

</div>

---

## 1. Component Structure

An Astro component consists of two main parts separated by a "code fence" (`---`). This structure is inspired by Markdown frontmatter.

```astro

    ---
    // Component Script (Server-side JavaScript)
    import SomeComponent from './SomeComponent.astro';
    const name = "Astro";
    ---
    
    <div class="container">
        <SomeComponent />
        <h1>Hello {name}!</h1>
    </div>


```

**Key Components**:

- **The Code Fence (`---`)**: Everything inside here runs on the server (or at build time). You can write JavaScript or TypeScript, import other components, fetch data from APIs, or define variables.

- **The Template**: The HTML section below the fence. It supports JavaScript expressions inside curly braces `{}` (similar to JSX), but it produces standard HTML strings.

---

## 2. Props

Props (short for properties) allow you to pass data from a parent component to a child component. In Astro, you access these values using the global `Astro.props` object.

You can also define a TypeScript interface to enforce type safety for your props.

```astro

    ---
    interface Props {
        title: string;
        description?: string; // Optional prop
    }
    
    const { title, description = "Default description" } = Astro.props;
    ---
    
    <div class="card">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>


```
**Usage**:

```astro

    <Card title="My Project" description="Built with Astro" />


```

---

## 3. Layouts & Slots

Layouts are Astro components used to provide a reusable UI structure, such as a header, navigation bar, and footer. They are typically used to wrap pages to ensure a consistent look across the website.

Layouts and Slots work together: The **Layout** defines the shell, and the **Slot** defines where the specific page content is injected.

### 3.1 Creating a Layout

A layout is just a standard Astro component (usually saved in `src/layouts/`). It contains the `<html>`, `<head>`, and `<body>` tags.

The special `<slot />` element acts as a placeholder. When you use the layout on a page, the content of that page is inserted exactly where the `<slot />` tag is placed.

```astro

    ---
    // src/layouts/MainLayout.astro
    const { title } = Astro.props;
    ---
    
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>{title}</title>
      </head>
      <body>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    
        <main>
            <slot />
        </main>
    
        <footer>
            <p>© 2024 My Website</p>
        </footer>
      </body>
    </html>


```

To use a layout, import it into your page component and wrap your content inside it. Everything inside the layout tags is passed to the `<slot />`.

```astro

    ---
    // src/pages/index.astro
    import MainLayout from '../layouts/MainLayout.astro';
    ---
    
    <MainLayout title="Welcome to Astro">
        <h1>Hello, World!</h1>
        <p>This paragraph will appear inside the 'main' tag of the layout.</p>
    </MainLayout>


```

### 3.2 Named Slots

Sometimes you need to inject content into multiple specific places in a layout, not just one. For example, you might want to add a specific `<meta>` tag to the `<head>` only on one page.

You can use the `name` attribute to define specific zones.

**In the Layout:**

```astro

    <head>
        <slot name="head" />
    </head>
    <body>
        <slot /> </body>


```
**In the Page:**

```astro

    <MainLayout title="Special Page">
        
        <meta slot="head" name="description" content="My page description" />
        
        <h1>This is the body content</h1>
        
    </MainLayout>


```

## 4. UI Frameworks

Astro supports "Bring Your Own Framework" (BYOF). You can use components written in **React**, **Vue**, **Svelte**, **Solid**, and others directly inside your Astro pages.

### 4.1 Importing Components

To use a framework component, simply install the integration (e.g., `@astrojs/react`) and import the component inside your `.astro` file.

```astro

    ---
    import Button from '../components/Button.jsx';
    ---
    
    <Button />


```

### 4.2 Hydration Directives

By default, framework components render as static HTML (zero JavaScript). If you need interactivity (like `onClick` handlers or state), you must explicitly tell Astro to load the JavaScript using a **client directive**.

| Directive | Description | Example |
| :--- | :--- | :--- |
| `client:load` | Loads JavaScript immediately on page load. | `<Nav client:load />` |
| `client:idle` | Loads JavaScript once the main thread is free. | `<Chat client:idle />` |
| `client:visible` | Loads JavaScript only when the element enters the viewport. | `<Carousel client:visible />` |

```astro

    ---
    import Counter from '../components/Counter.jsx';
    ---
    
    <Counter client:load />


```