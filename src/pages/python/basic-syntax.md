---

layout: ../../layouts/DocsLayout.astro 
title: "Basic Syntax in Python"

---

# Basic Syntax

Python is an interpreted, high-level, and dynamically typed language known for its readability.  
Unlike **Java** or **C++**, Python does not use braces `{}` to define blocks of code, nor does it require semicolons `;` to end statements.

Python focuses on simplicity, using Indentation to define the structure and hierarchy of the code.

## Table of Contents
<div id="content-table">

- [1. Structure](#1-structure "Learn about indentation and Python code structure")
- [2. Variables](#2-variables "Overview of Python variables")
- [3. Operators](#3-operators "Arithmetic, logical and comparison operators in Python")
- [4. Control Structures](#4-control-structures "Manage program flow using conditions and loops")
  - [4.1 Conditional Statements](#41-conditional-statements "Using if, elif and else statements")
  - [4.2 Loops](#42-loops "Repeating code blocks using for or while loops")
    - [A) For Loops](#a-for-loops "Iterate over sequences or ranges of numbers")
    - [B) While Loops](#b-while-loops "Loop while a condition is true")

</div>


## 1. Structure

In Python, indentation is not just for aesthetics; it is a syntactical requirement. Instead of curly braces, whitespace (usually 4 spaces) determines the scope of loops, functions, and classes.

**Comments** start with a hash symbol (#). Python ignores the rest of the line after this symbol.

```python

    # This is a comment
    # Python uses indentation to define blocks
    if 5 > 2:
        print("Five is greater than two!")  # This line is inside the if block
        
    print("This is outside the block")


```
**Key Rules**:
- **Consistency**: You must use the same number of spaces for the same block of code.
- **Colon** (`:`): Control structures (like `if`, `for`, `def`) always end with a colon, signaling that an indented block follows.
- **No Semicolons**: You do not need to end lines with ;.

## 2. Variables

Python is **dynamically typed**, so you do not need to declare variable types before using them. The type is inferred at runtime based on the assigned value. Variable names are case-sensitive and usually follow the `snake_case` convention (lowercase words separated by underscores).

- **Numbers**: `int`, `float`, `complex`
- **Strings**: Text enclosed in single `'` or double `"` quotes
- **Booleans**: `True` or `False`

Example:

```python

    # Numbers
    x = 5           # int
    y = 3.14        # float
    z = 1j          # complex

    # String
    name = "Python"

    # Boolean
    is_active = True

    # Dynamic typing
    x = "Now I'm a string"


```

You can create **multiline strings** in Python using triple quotes (`"""` or `'''`). This is useful for long texts that span several lines.
```python

    x = """This is a
    very long text,
    so it can be written across multiple lines."""


```


## 3. Operators

Operators are used to perform operations on variables and values. Python uses English keywords for logical operations, making the code read like a sentence.

**Arithmetic Operators**

```python

    x = 10
    y = 3

    print(x + y)   # Addition
    print(x ** y)  # Exponentiation (10 to the power of 3)
    print(x // y)  # Floor Division (result is 3, removes decimal)


```

**Logical Operators**

Unlike Java (which uses `&&,` `||,` `!`), Python uses `and`, `or`, and `not`.

| Operator | Description | Example |
| :--- | :--- | :--- |
| `and` | Returns `True` only if **both** statements are true. | `x < 5 and x < 10` |
| `or` | Returns `True` if **at least one** of the statements is true. | `x < 5 or x < 4` |
| `not` | Reverses the result, returns `False` if the result is true. | `not(x < 5)` |


```python

    age = 25
    has_license = True

    if age > 18 and has_license:
        print("You can drive.")
        
    if not has_license:
        print("You cannot drive.")


```

## 4. Control Structures
Control structures manage the flow of the program based on logic and iteration. In Python, these structures rely heavily on *indentation and colons* (`:`) rather than the curly braces `{}` found in Java or C++. 

Additionally, parentheses `()` around conditions are optional and typically omitted for cleaner syntax.

### 4.1 Conditional Statements

Python uses `if`, `elif` (short for "else if"), and `else` keywords.

```python

    temperature = 28

    if temperature > 30:
        print("It's hot outside")
    elif temperature > 20:
        print("It's a nice day")
    else:
        print("It's cold")


```

Python also supports a short form of conditional using a ternary expression. It is useful to assign a value based on a condition in a single line.

```python

    admin = true;

    # Using ternary operator
    message = "Welcome, admin!" if admin == true else "Access denied"

    print(ticket)  # Output: Welcome, admin!


```
### 4.2 Loops

Python provides two main types of loops to handle iteration.

#### A) For Loops
Unlike Java's traditional `for (int i=0; i<10; i++)`, the Python `for` loop acts more like a "for-each" loop. It iterates over items of a sequence (like a list or a string) or a range of numbers.

```python

    # Iterating over a range of numbers (0 to 4)
    # range(5) generates numbers 0, 1, 2, 3, 4
    for i in range(5):
        print(i)

    # Iterating over a list
    colors = ["red", "green", "blue"]
    for color in colors:
        print("Current color: " + color)


```
#### B) While Loops

The while loop executes a set of statements as long as a condition is true.

```python

    count = 0

    while count < 3:
        print("Count is:", count)
        count += 1  # Note: Python does not have the '++' operator


```