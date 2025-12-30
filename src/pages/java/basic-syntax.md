---
layout: ../../layouts/DocsLayout.astro
title: "Basic Syntax in Java"
---

# Basic Syntax

Java is a strongly typed language and case sensitive. All code must be inside a class.  
Unlike languages like **Python** or **JavaScript**, Java requires explicit type declarations, enforces class-based structure, and does not allow free-floating functions outside classes.

---

## Table of Contents

<div id="content-table">

- [1. “Hello World” Structure](#hello-world "Learn the basic Java program structure")
- [2. Variables and Data Types](#variables-data-types "Overview of Java primitive and reference types")
- [3. Control Structures](#control-structures "Learn how to control program flow in Java")
  - [3.1 Conditional Statements](#conditional-statements "Using if and else statements")
  - [3.2 Switch Statement](#switch-statement "Selecting code blocks based on a variable")
  - [3.3 Loops](#loops "Repeating code blocks with for or while loops")
    - [A) For Loop](#for-loop "Loop when number of iterations is known")
    - [B) While Loop](#while-loop "Loop while a condition is true")
- [4. Logical Operators](#logical-operators "Combining or negating boolean expressions")

</div>


---

## 1. “Hello World” Structure

This example illustrates the fundamental structure of a Java program, where all code is organized into classes and execution starts from the `main` method.

```java

    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }


```

---

## 2. Variables and Data Types

There are primitive types and reference types (objects).

- **int**: Whole numbers (ej: `10`, `-5`)

- **double**: Decimals (ej: `5.99`)

- **boolean**: Logical values (`true`, `false`)

- **char**: A single character (ej: `'A'`)

- **String**: Text string (ej: `"Hello"`)

```java

    int age = 25;
    double price = 19.99;
    boolean isDeveloper = true;
    String name = "David";


```

---

## 3. Control Structures

Control structures define the flow of execution in a Java program, allowing the code to make decisions, repeat actions, or execute different blocks based on conditions.

### 3.1 Conditional Statements

Conditional statements allow the program to execute different blocks of code depending on whether a condition is `true` or `false`.

```java

    int x = 10;

    if (x > 5) {
        System.out.println("x is greater than 5");
    } else {
        System.out.println("x is 5 or less");
    }


```

### 3.2 Switch Statement

The `switch` statement selects one of many code blocks to execute based on the value of a variable.

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

    for (int i = 0; i < 5; i++) {
        System.out.println(i);
    }


```

#### B) While Loop

The `while` loop repeats a block of code as long as a specified condition remains true.

```java

    int i = 0;

    while (i < 5) {
        System.out.println(i);
        i++;
    }


```

---

## 4. Logical Operators

Logical operators are used to combine, evaluate, or negate boolean expressions (`true` or `false`) in Java, and are commonly used in control structures such as `if`, `while`, or `for` to make decisions based on multiple conditions.

| Operator | Description | Example              |
| -------- | ----------- | -------------------- |
| `&&`     | AND (Y)     | `x < 5 && x < 10`    |
| `\|\|`   | OR (O)      | `x < 5 \|\| x < 10`  |
| `!`      | NOT (No)    | `!(x < 5 && x < 10)` |

```java

    int age = 20;
    boolean hasPermission = true;

    if (age >= 18 && hasPermission) {
        System.out.println("Acceso permitido");
    }


```
