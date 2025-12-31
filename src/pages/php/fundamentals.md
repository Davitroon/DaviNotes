---
layout: ../../layouts/DocInfoLayout.astro
title: "PHP Fundamentals"
---

# PHP Fundamentals

This guide introduces the core building blocks of PHP. Unlike client-side languages like JavaScript, PHP code is executed on the server, generating HTML that is sent to the client.

## Table of Contents

<div id="content-table">

- [1. Basic Syntax](#1-basic-syntax "Introduction to PHP syntax")
    - [1.1. Embedding PHP in HTML](#11-embedding-php-in-html "How to insert PHP code within HTML documents")
- [2. Variables and Constants](#2-variables-and-constants "Defining and using variables and constants in PHP")
    - [2.1. Variable Rules](#21-variable-rules "Rules for naming and using PHP variables")
    - [2.2. Defining Constants](#22-constants "How to create and use constants in PHP")
- [3. Data Types](#3-data-types "Overview of PHP data types")
- [4. Operators](#4-operators "Using arithmetic, comparison, and logical operators in PHP")
- [5. Control Structures](#5-control-structures "Managing the flow of code with conditions and loops")
    - [5.1. Conditional Statements](#51-conditional-statements "Using if, elseif, else to control execution")
    - [5.2. Loops](#52-loops "Repeating code blocks using loops")


</div>

---

## 1. Basic Syntax

A PHP script can be placed anywhere in the document. A PHP file normally contains HTML tags and some PHP scripting code.

PHP code is enclosed in special start and end processing instructions that allow you to jump into and out of "PHP mode."

```php

    <?php
    // PHP code goes here
    echo "Hello, World!";
    ?>


```

Every PHP statement must end with a semicolon (`;`). Missing semicolons are the most common syntax error for beginners.

**Comments** can be written in three ways:

```php

    <?php
    // This is a single-line comment

    # This is also a single-line comment

    /*
    This is a multiple-lines comment block
    that spans over several lines
    */
    ?>


```

### 1.1. Embedding PHP in HTML

PHP code can be directly inserted into an HTML document. This allows you to mix HTML structure with dynamic PHP content.

```html

    <!DOCTYPE html>
    <html>
    <head>
        <title>My PHP Page</title>
    </head>
    <body>
        <h1>Welcome to my website</h1>
        <p>
            <?php
            $name = "Alice";
            echo "Hello, " . $name . "!";
            ?>
        </p>
    </body>
    </html>


```

In this example, the PHP code is embedded within the HTML `<p>` tag, generating dynamic content while keeping the HTML structure intact. This is one of the most common ways PHP is used in web development.

---

## 2. Variables and Constants

In PHP, variables are loosely typed, meaning you do not need to declare the data type before using it.

### 2.1. Variable Rules
* A variable starts with the `$` sign, followed by the name of the variable.
* A variable name must start with a letter or the underscore character.
* Variable names are **case-sensitive** (`$age` and `$AGE` are two different variables).

```php

    <?php
    $txt = "Learning PHP";
    $x = 5;
    $y = 10.5;
    
    echo $txt;
    echo $x + $y; // Outputs: 15.5
    ?>


```

### 2.2. Constants
Constants are like variables except that once they are defined, they cannot be changed or undefined. They do not use the `$` prefix.

```php

    <?php
    // Using define()
    define("SITE_URL", "https://mysite.com");

    // Using const keyword (modern way)
    const MAX_USERS = 50;

    echo SITE_URL;
    ?>


```
---

## 3. Data Types

PHP supports several data types to store different kinds of information.

1. **String**: A sequence of characters (`"Hello"`).
2. **Integer**: Non-decimal number (`10`, `-5`).
3. **Float**: Number with a decimal point (`3.14`).
4. **Boolean**: Represents two states: `true` or `false`.
5. **Array**: Stores multiple values in one single variable.
6. **NULL**: A variable that has no value assigned to it.

    <?php
    $string = "Hello world";
    $int = 5985;
    $float = 10.365;
    $is_active = true;
    $colors = array("Red", "Green", "Blue");
    $empty = null;
    ?>

---

## 4. Operators

Operators are used to perform operations on variables and values.

### Arithmetic Operators
Standard math operations: `+`, `-`, `*`, `/`, and `%` (Modulus/Remainder).

### Comparison Operators
These are crucial in logic flow. Note the difference between `==` and `===`.

* `==`: Equal (values are equal).
* `===`: Identical (values **and** types are equal).
* `!=`: Not equal.
* `>` / `<`: Greater than / Less than.

```php

    <?php
    $x = 100;  
    $y = "100";

    var_dump($x == $y); // returns true because values are equal
    var_dump($x === $y); // returns false because types are different (int vs string)
    ?>


```
### Logical Operators
Used to combine conditional statements:
* `&&` (And)
* `||` (Or)
* `!` (Not)

---

## 5. Control Structures

Control structures allow you to dictate the flow of execution in your script based on conditions or loops.

### 5.1. Conditional Statements

Conditional statements allow your PHP code to execute different blocks based on conditions. The most common statement is `if...elseif...else`.


```php

    <?php
    $t = date("H");

    if ($t < "10") {
        echo "Have a good morning!";
    } elseif ($t < "20") {
        echo "Have a good day!";
    } else {
        echo "Have a good night!";
    }
    ?>


```

PHP also provides a shorthand for simple `if...else` conditions called the **ternary operator**.  
It has the following syntax:

```php

    condition ? value_if_true : value_if_false;


```


### 5.2. Loops
Loops execute a block of code as long as a specified condition is true.

**While Loop:**

```php

    <?php
    $x = 1;

    while($x <= 5) {
        echo "The number is: $x <br>";
        $x++;
    }
    ?>


```
**Foreach Loop:**
The `foreach` loop works only on arrays and objects, and is used to loop through each key/value pair in an array. This is extremely common in PHP backend development.

```php

    <?php
    $colors = array("red", "green", "blue", "yellow");

    foreach ($colors as $value) {
        echo "$value <br>";
    }
    ?>


```