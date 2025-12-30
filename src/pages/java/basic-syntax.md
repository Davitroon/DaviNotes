---
layout: ../../layouts/DocsLayout.astro
title: "Basic Syntax in Java"
---

# Basic Syntax

Java is a strongly typed, case-sensitive language where object-oriented principles are enforced. Unlike loosely typed languages like **Python** or **JavaScript**, Java requires explicit type declarations and a strict class-based structure.

All executable code in Java must reside inside a **Class**. There are no "free-floating" functions; everything belongs to an object or a class blueprint.

---

## Table of Contents

<div id="content-table">

- [1. Structure](#1-structure "Learn the basic Java program structure")
- [2. Variables and Data Types](#2-variables-data-types "Overview of Java primitive and reference types")
- [3. Control Structures](#3-control-structures "Learn how to control program flow in Java")
  - [3.1 Conditional Statements](#31-conditional-statements "Using if and else statements")
  - [3.2 Switch Statement](#32-switch-statement "Selecting code blocks based on a variable")
  - [3.3 Loops](#33-loops "Repeating code blocks with for or while loops")
    - [A) For Loop](#a-for-loop "Loop when number of iterations is known")
    - [B) While Loop](#b-while-loop "Loop while a condition is true")
- [4. Logical Operators](#4-logical-operators "Combining or negating boolean expressions")

</div>

---

## 1. Structure

Every Java application has an entry point called the `main` method. This example illustrates the skeleton of any Java program.

```java

    public class Main {
        // The entry point of the application
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }


```

**Key Components**:

- `class Main`: Defines the blueprint. The file name must match this class name (e.g., `Main.java`).

- `public static void main`: The specific method signature the Java Virtual Machine (JVM) looks for to start the program.

- `System.out.println`: The standard command to print text to the console.

---

## 2. Variables and Data Types

Java handles data in two ways: **Primitive Types** (store simple values directly) and **Reference Types** (store addresses to complex objects).

**Primitive Types**

These are the building blocks of data in Java.

- `int`: Whole numbers (e.g., `10`, `-5`).

- `double`: Decimal numbers (e.g., `5.99`).

- `boolean`: True or false values (logic).

- `char`: A single Unicode character (e.g., `'A'`).

**Reference Types**

- `String`: A sequence of characters. Unlike primitives, Strings are objects and have methods (like `.length()` or `.toUpperCase()`).

- `Class`: Any created class

Example

```java

    // Primitives
    int age = 25;
    double price = 19.99;
    boolean isDeveloper = true;
    char grade = 'A';

    // Reference Type
    String name = "David"; // Stored in the Heap memory


```

---

## 3. Control Structures

Control structures determine the direction of the program execution based on decisions and loops.

### 3.1 Conditional Statements

Conditional statements allow the program to execute different blocks of code depending on whether a condition is `true` or `false`.

```java

    int age = 21;

    if (age > 80) {
        System.out.println("You're too old to ride the roller coaster");

    } else if (age < 14>) {
        System.out.println("You're too young to ride the roller coaster");
    
    } else {
        System.out.println("Everything is fine, have fun!");
    }


```

### 3.2 Switch Statement

The `switch` statement selects one of many code blocks to execute based on the value of a variable. It is often cleaner than using many `else if` statements.

```java

    int day = 3;

    switch (day) {
        case 1:
            System.out.println("Monday");
            break;

        case 2:
            System.out.println("Tuesday");
            break;

        default:
            System.out.println("Another day");
    }


```

### 3.3 Loops

Loops are used to repeat a block of code while a condition is met.

#### A) For Loop

The `for` loop is used when the number of iterations is known in advance.

```java

    // Syntax: for (initialization; condition; update)
    for (int i = 0; i < 5; i++) {
        System.out.println("Iteration: " + i);
    }


```

#### B) While Loop

The `while` loop loops through a block of code as long as a specified condition is `true`. Use this when the number of iterations is unknown.

```java

    int i = 0;

    while (i < 5) {
        System.out.println(i);
        i++; // Don't forget to increment, or the loop will never end!
    }


```

---

## 4. Logical Operators

Logical operators are used to combine, evaluate, or negate boolean expressions (`true` or `false`) in Java, and are commonly used in control structures such as `if`, `while`, or `for` to make decisions based on multiple conditions.

| Operator | Description | Example |
| :--- | :--- | :--- |
| `&&` (AND) | Returns `true` only if **both** statements are true. | `x < 5 && x < 10` |
| `\|\|` (OR) | Returns `true` if **at least one** of the statements is true. | `x < 5 \|\| x < 10` |
| `!` (NOT) | Reverses the result, returns `false` if the result is true. | `!(x < 5 && x < 10)` |

```java

    int age = 20;
    boolean hasTicket = true;

    // Both conditions must be true to enter
    if (age >= 18 && hasTicket) {
        System.out.println("Access granted");
    }


```
