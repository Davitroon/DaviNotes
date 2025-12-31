---
layout: ../../layouts/DocInfoLayout.astro
title: "React's fundamentals"
---

# Fundamentals

React is built around the concept of reusable components. To make these components dynamic and interactive, React uses two distinct types of data: **Props** and **State**.

Understanding the difference between them is crucial because it dictates how data flows through your application. While **Props** allow you to pass data down the component tree (like arguments in a function), **State** allows a component to create and manage its own internal data (like local variables that trigger a re-render).



---

## Table of Contents

<div id="content-table">

- [1. JSX Fundamentals](#1-jsx-fundamentals "Structure, Lists, and Events")
- [2. Props](#2-props "Passing data from parent to child")
- [3. State](#3-state "Managing changing data within a component")
- [4. One-Way Data Flow](#4-one-way-data-flow "Understanding the direction of data")

</div>

---

## 1. JSX Fundamentals

JSX (JavaScript XML) it's what you will be working with in React, it allows you to write HTML-like syntax inside JavaScript. While it looks familiar, there are key structural differences you must follow.

### A) The Structure Rules
1.  **Single Parent:** A component must return a single wrapping element. If you don't want a `<div>`, use a **Fragment** (`<>...</>`).
2.  **CamelCase Attributes:** Since `class` is a reserved word in JS, use `className`. Events use camelCase too (`onClick`).
3.  **Closing Tags:** All tags must close (e.g., `<img />` or `<br />`).

```jsx

    // A simple component showing dynamic data
    export default function UserCard() {
        const username = "Alex";
        const isActive = true;

        return (
            <div className="card">
                {/* Curly braces {} allow JavaScript execution */}
                <h2>Welcome, {username}</h2>
                
                {/* Conditional rendering using Ternary Operator */}
                <p>Status: {isActive ? "Online" : "Offline"}</p>
            </div>
        );
    }


```

### B) Rendering Lists
React uses array methods like `.map()` to convert data into elements. You must provide a unique `key` prop for performance.

```jsx

    const fruits = ["Apple", "Banana", "Orange"];

    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );


```

### C) Handling Events
Unlike HTML strings (`onclick="do()"`), React accepts the actual function reference.

```jsx

    function Button() {
        const handleClick = () => alert("Clicked!");

        return (
            // ✅ Correct: Pass the function
            // ❌ Wrong: handleClick() would run immediately
            <button onClick={handleClick}>Click Me</button>
        );
    }


```

---

## 2. Props

Short for "Properties", **Props** are the mechanism used to pass data from a parent component down to a child component. They make components reusable by allowing them to be configured dynamically.

**Key Rule:** A component cannot change its own props. They are read-only.

In this example, the `Welcome` component receives a `name` prop to render a personalized message.

```jsx

    // 1. Child Component
    // Destructuring { name } from the props object
    function Welcome({ name, role }) {
        return (
            <div className="card">
                <h2>Hello, {name}!</h2>
                <p>Role: {role}</p>
            </div>
        );
    }

    // 2. Parent Component
    export default function App() {
        return (
            <main>
                {/* Passing specific data to each instance */}
                <Welcome name="Alice" role="Frontend Dev" />
                <Welcome name="Bob" role="Designer" />
            </main>
        );
    }


```

---

## 3. State
**State** is the internal memory of a component. Unlike props, state is **changeable**. When the state of a component changes, React automatically re-renders that component (and its children) to reflect the new data in the UI.

In modern React (Functional Components), we use the `useState` hook to define state.

*Note: We will dive deeper into Hooks in the next section, but `useState` is essential here to demonstrate the concept.*

```jsx

    import { useState } from 'react';

    export default function Counter() {
        // Syntax: [currentValue, functionToUpdateIt] = useState(initialValue)
        const [count, setCount] = useState(0);

        return (
            <div>
                <p>Current count: {count}</p>

                {/* Event listener changes state */}
                <button onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div>
        );
    }


```

**What happens here?**

1. The component initializes with `count` at `0`.

2. The user clicks the button.

3. `setCount` updates the value.

4. React detects the change and re-paints the UI with the new number.

---

## 4. One-Way Data Flow

React enforces a **Unidirectional Data Flow** (One-Way Data Binding). This means data has only one way to be transferred to other parts of the application: **Downwards**.

-  **Parent to Child**: Data is sent via **Props**.

- **Child to Parent**: Data cannot flow up directly. Instead, the parent passes a function to the child. The child calls that function to request a change.

This ensures that the source of truth remains clear and debugging is easier.

```jsx

    // CHILD Component
    function ButtonChild({ onButtonClick }) {
        // The child doesn't know what happens, it just executes the function
        return (
            <button onClick={onButtonClick}>
                Click me to update Parent!
            </button>
        );
    }

    // PARENT Component
    export default function Parent() {
        const [message, setMessage] = useState("Waiting...");

        // This function lives in the parent
        const handleUpdate = () => {
            setMessage("Child clicked the button!");
        };

        return (
            <div>
                <h1>Parent says: {message}</h1>
                
                {/* We pass the FUNCTION as a prop */}
                <ButtonChild onButtonClick={handleUpdate} />
            </div>
        );
    }


```