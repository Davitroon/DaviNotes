---
layout: ../../layouts/DocInfoLayout.astro
title: "Context API in React"
---

# Context API

In a typical React application, data is passed top-down (parent to child) via props. However, this can become cumbersome for certain types of props (e.g., locale preference, UI theme, or user authentication) that are required by many components within an application.

**Context** provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.



---

## Table of Contents

<div id="content-table">

- [1. The Problem: Prop Drilling](#1-the-problem-prop-drilling "Why do we need Context?")
- [2. How it Works](#2-how-it-works "The three main steps of Context")
- [3. Creating Context](#3-creating-context "Initializing the Context object")
- [4. Providing Context](#4-providing-context "Wrapping the component tree")
- [5. Consuming Context](#5-consuming-context "Accessing data with useContext")

</div>

---

## 1. The Problem: Prop Drilling

"Prop Drilling" occurs when you need to pass data from a high-level component down to a deeply nested component. You end up passing props through intermediate components that **do not need** the data themselves, just to get it to the destination.

* **Without Context**: `App` -> `Layout` -> `Header` -> `UserInfo` (Layout and Header don't care about user info, but must pass it).
* **With Context**: `App` -> `UserInfo` (Direct access).

---

## 2. How it Works

The Context API consists of three main parts:

1.  **The Context Object**: The storage box for your data.
2.  **The Provider**: A component that wraps your app (or a section of it) and "broadcasts" the data.
3.  **The Consumer (Hook)**: The component that subscribes to the context to read the data.

---

## 3. Creating Context

First, we create a Context object using `createContext`. It is common practice to create this in a separate file.

```javascript

    import { createContext } from 'react';

    // 1. Create the Context
    // You can pass a default value (optional), e.g., 'light'
    export const ThemeContext = createContext('light');


```

---

## 4. Providing Context
Every Context object comes with a **Provider** React component. It accepts a `value` prop. Any component that is a child of this Provider can ask for that value later.

```jsx

    import { useState } from 'react';
    import { ThemeContext } from './ThemeContext';

    export default function App() {
        const [theme, setTheme] = useState('dark');

        return (
            // 2. Wrap the tree with the Provider
            // We pass the current state as the value
            <ThemeContext.Provider value={theme}>
                <Toolbar />
                <Footer />
            </ThemeContext.Provider>
        );
    }


```

*Note: In this example, `Toolbar` and `Footer` do not need to receive `theme` as a prop. It is available "in the air" for them.*

---

## 5. Consuming Context
To access the data inside a child component, we use the `useContext` hook. This is much simpler than the older `Context.Consumer` pattern used in class components.

```jsx

    import { useContext } from 'react';
    import { ThemeContext } from './ThemeContext';

    export default function Footer() {
        // 3. Consume the value
        const currentTheme = useContext(ThemeContext);

        return (
            <footer className={currentTheme}>
                <p>Current Theme: {currentTheme}</p>
            </footer>
        );
    }


```

**When to use Context?** Context is powerful but should be used sparingly. It makes component reuse more difficult because it couples components to a specific context.

- **Use Props** for simple data flow (Parent -> Child).

- **Use Context** for "global" data (User, Theme, Language) needed by many components at different nesting levels.