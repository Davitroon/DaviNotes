---

layout: ../../layouts/DocsLayout.astro
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
- [3. Slots](#3-slots "Injecting child content into components")
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

## 3. Slots

Slots are placeholders that allow you to inject HTML content (children) from a parent component into a specific place within a child component. This is essential for creating wrapper components like Layouts, Cards, or Modals.

**Defining a Slot**:

```astro

    ---
    // Wrapper.astro
    ---
    <div class="wrapper-style">
        <slot />
    </div>


```

**Using the Slot**:

```astro

    <Wrapper>
        <p>This content goes inside the slot!</p>
    </Wrapper>


```
You can also use **Named Slots** when you need to inject content into multiple specific locations within a component (e.g., a header and a footer).

```astro

    <slot name="header" />
    <slot /> ---


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