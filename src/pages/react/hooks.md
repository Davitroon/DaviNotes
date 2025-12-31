---
layout: ../../layouts/DocInfoLayout.astro
title: "Hooks in React"
---

# Hooks

Introduced in React 16.8, **Hooks** are functions that allow you to "hook into" React state and lifecycle features from function components. Before Hooks, managing state and complex logic required Class components.

Hooks allow you to reuse stateful logic without changing your component hierarchy. They always start with the prefix `use` (e.g., `useState`, `useEffect`).

---

## Table of Contents

<div id="content-table">

- [1. What are Hooks?](#1-what-are-hooks "Brief overview of functional components superpowers")
- [2. useState](#2-usestate "Managing local state in functional components")
- [3. useEffect](#3-useeffect "Handling side effects like data fetching or subscriptions")
- [4. useMemo](#4-usememo "Caching expensive calculations with memoization")
- [5. useCallback](#5-usecallback "Memoizing functions to prevent unnecessary re-renders")
- [6. Rules of Hooks](#6-rules-of-hooks "Mandatory rules for using Hooks")

</div>

---

## 1. What are Hooks?

Hooks provide a direct API to the React concepts you already know: props, state, context, refs, and lifecycle. However, they package these concepts in a way that allows you to split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.

**Key Characteristics**:

- **Opt-in**: You can use Hooks in a few components without rewriting existing code.
- **Backward Compatible**: Hooks do not contain any breaking changes.
- **Functions only**: Hooks do not work inside Classes.

---

## 2. useState

The `useState` Hook lets you add React state to function components. It corresponds to `this.state` and `this.setState` in classes.

**Syntax**: `const [state, setState] = useState(initialValue);`

This Hook returns a pair: the **current state value** and a **function** that lets you update it.

```jsx

    import { useState } from "react";

    export default function TextInput() {
        // Declare a new state variable, which we'll call "text"
        const [text, setText] = useState("Hello");

        return (
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <p>You typed: {text}</p>
            </div>
        );
    }


```

---

## 3. useEffect

The `useEffect` Hook lets you perform side effects in function components. Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API.

By default, `useEffect` runs after the **first render** and after every update.

```jsx

    import { useState, useEffect } from "react";

    function PageTitle() {
        const [count, setCount] = useState(0);

        // Similar to componentDidMount and componentDidUpdate:
        useEffect(() => {
            // Update the document title using the browser API
            document.title = `You clicked ${count} times`;
        });

        return <button onClick={() => setCount(count + 1)}>Click me</button>;
    }


```

You can tell React to **skip** applying an effect if certain values haven't changed between re-renders. To do this, pass an array as an optional second argument to useEffect.

```jsx

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]); // Only re-run the effect if 'count' changes


```

**Common Patterns:**

- `[prop, state]`: Runs on mount AND when any item in the array changes.

- `[]` (Empty array): Runs **only once** on mount (like `componentDidMount`).

- No array: Runs on **every** render.

Some effects require **cleanup** (e.g., closing a WebSocket connection or clearing a timer) to prevent memory leaks. To do this, you return a function from your effect.

```jsx

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Tick...");
        }, 1000);

        // This function is called when the component unmounts
        return () => {
            clearInterval(timer);
            console.log("Timer cleared");
        };
    }, []);


```

---

## 4. useMemo

The `useMemo` hook returns a **memoized value**. It is used to cache the result of an expensive calculation (like filtering a massive array or a complex math operation).

**The Problem:** Without `useMemo`, complex functions run on **every** render, even if the data hasn't changed.
**The Solution:** `useMemo` checks if the dependencies changed. If not, it returns the cached result immediately.

**Syntax:** `const cachedValue = useMemo(calculateValue, [dependencies]);`

```jsx

    import { useState, useMemo } from "react";

    export default function ExpensiveComponent() {
        const [count, setCount] = useState(0);
        const [darkTheme, setDarkTheme] = useState(false);

        // 1. Simulating a slow function
        const expensiveCalculation = (num) => {
            console.log("Computing...");
            for (let i = 0; i < 1000000000; i++) {} // Artificial delay
            return num * 2;
        };

        // 2. Using useMemo
        // This will ONLY run when 'count' changes.
        // Changing the theme will NOT trigger the loop again.
        const calculatedValue = useMemo(() => {
            return expensiveCalculation(count);
        }, [count]);

        return (
            <div style={{ background: darkTheme ? "#333" : "#FFF" }}>
                <h2>Calculated: {calculatedValue}</h2>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
            </div>
        );
    }


```

---

## 5. useCallback

The `useCallback` hook returns a memoized function.

In JavaScript, functions are objects. Every time a component re-renders, all functions inside it are recreated (they get a new memory address). This is usually fine, but it causes problems if:

1. You pass the function as a prop to a child component wrapped in `React.memo`.

2. The function is used in a dependency array of `useEffect`.

**Syntax:** `const cachedFn = useCallback(fn, [dependencies]);`

In this example, `ChildComponent` is optimized to only re-render if props change. Without `useCallback`, the `handleClick` prop would change on every parent render, forcing the child to re-render unnecessarily.

```jsx

    import { useState, useCallback, memo } from "react";

    // A child component that only updates when props change
    const ChildButton = memo(({ onClick }) => {
        console.log("Child rendered");
        return <button onClick={onClick}>Click Child</button>;
    });

    export default function Parent() {
        const [count, setCount] = useState(0);

        // WITHOUT useCallback: This function is recreated on every render.
        // const handleClick = () => console.log("Clicked");

        // WITH useCallback: React keeps the same function reference
        // unless the dependency array changes.
        const handleClick = useCallback(() => {
            console.log("Clicked");
        }, []); // Empty dependency = function never changes

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={() => setCount(count + 1)}>Re-render Parent</button>

                {/* Even if Parent re-renders, ChildButton stays cached */}
                <ChildButton onClick={handleClick} />
            </div>
        );
    }


```

---

## 6. Rules of Hooks

Hooks are JavaScript functions, but they impose two additional rules:

1. **Only Call Hooks at the Top Level:** Don’t call Hooks inside loops, conditions, or nested functions. Always use Hooks at the top level of your React function. This ensures that Hooks are called in the same order each time a component renders.

2. **Only Call Hooks from React Functions:** Call Hooks from React function components or from custom Hooks. Do not call them from regular JavaScript functions.

```jsx

    // ❌ WRONG
    if (userName !== '') {
        useEffect(() => { ... }); // Error! Order of hooks might change
    }

    // ✅ CORRECT
    useEffect(() => {
        if (userName !== '') { ... } // Logic inside the hook is fine
    });


```
