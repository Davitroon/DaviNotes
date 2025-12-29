---

layout: ../../layouts/DocsLayout.astro
title: "Basic Syntax in Java"

---

# Basic Syntax

Java is a strongly typed language and case sensitive. All code must be inside a class.

---

## “Hello World” Structure

```java

    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello World!");
        }
    }
    
```
---

## Variables and Data Types
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

### Logical Operators

| Operator | Description | Example |
|----------|------------|---------|
| `&&`     | AND (Y)    | `x < 5 && x < 10` |
| `\|\|`   | OR (O)     | `x < 5 \|\| x < 10` |
| `!`      | NOT (No)   | `!(x < 5 && x < 10)` |