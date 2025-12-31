---
layout: ../../layouts/DocInfoLayout.astro
title: "PHP Fundamentals"
---

# Functions & Data Handling

Moving beyond basic syntax, this guide focuses on modularity and data management. You will learn how to create reusable code blocks with functions and how to manipulate the two most common data types in web development: Strings and Arrays.

## Table of Contents

<div id="content-table">

- [1. User-defined Functions](#1-user-defined-functions "Jump to user-defined functions section")
- [2. Parameters and Return Values](#2-parameters-and-return-values "Learn about arguments and return values")
- [3. String Manipulation](#3-string-manipulation "See string manipulation techniques")
- [4. Working with Arrays](#4-working-with-arrays "Explore PHP array structures")
    - [4.1. Indexed Arrays](#41-indexed-arrays "Arrays with numeric indexes for ordered data")
    - [4.2. Associative Arrays](#42-associative-arrays "Arrays that use named keys to store values")
    - [4.3. Multidimensional Arrays](#43-multidimensional-arrays "Arrays containing other arrays for complex data structures")
- [5. Common Array Functions](#5-common-array-functions "View built-in array helper functions")

<div>

---

## 1. User-defined Functions

A function is a block of statements that can be used repeatedly in a program. A function will not execute automatically when a page loads; it is executed by a call to the function.

A user-defined function declaration starts with the word `function`.

```php

    <?php
    function writeMessage() {
        echo "Hello, welcome to PHP development!";
    }

    // Calling the function
    writeMessage();
    ?>


```

---

## 2. Parameters and Return Values

Functions become more powerful when they can accept data (arguments) and return results back to the code that called them.

Information can be passed to functions through arguments. An argument is just like a variable.

```php

    <?php
    function familyName($fname) {
        echo "$fname Jaeger.<br>";
    }

    familyName("Eren");
    familyName("Zeke");
    ?>


```

To let a function return a value, use the `return` statement.

```php

    <?php
    function sum($x, $y) {
        $z = $x + $y;
        return $z;
    }

    echo "5 + 10 = " . sum(5, 10);
    ?>


```

---

## 3. String Manipulation

PHP provides a vast library of built-in functions to manipulate strings. Since web development is mostly about outputting text (HTML), these are essential.

These are common **string functions**:

* `strlen()`: Returns the length of a string.
* `str_word_count()`: Counts the number of words in a string.
* `strrev()`: Reverses a string.
* `strpos()`: Searches for a specific text within a string.
* `str_replace()`: Replaces some characters with some other characters in a string.

Example:

```php

    <?php
    $text = "Hello World";

    // Get length
    echo strlen($text); // Outputs: 11

    // Replace text
    echo str_replace("World", "PHP", $text); // Outputs: Hello PHP
    ?>


```

---

## 4. Working with Arrays

An array stores multiple values in one single variable. In PHP, arrays are incredibly flexible and are used everywhere, from configuration files to database results.

### 4.1 Indexed Arrays
Arrays with a numeric index (automatically assigned starting at 0).

```php

    <?php
    $cars = array("Volvo", "BMW", "Toyota");
    
    echo "I like " . $cars[0] . " and " . $cars[1];
    ?>


```

### 4.2 Associative Arrays
Arrays with named keys that you assign to them. This structure is similar to JSON objects or Python dictionaries.

```php

    <?php
    $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

    // Accessing values by key
    echo "Peter is " . $age['Peter'] . " years old.";
    ?>


```

### 4.3 Multidimensional Arrays
Arrays containing one or more arrays.

```php

    <?php
    $contacts = array(
        array("name" => "Peter", "email" => "peter@test.com"),
        array("name" => "Ben", "email" => "ben@test.com"),
    );

    echo $contacts[0]["email"]; // Outputs: peter@test.com
    ?>


```

---

## 5. Common Array Functions

PHP is famous for its extensive array manipulation library.

* `count()`: Returns the number of elements in an array.
* `sort()` / `rsort()`: Sort arrays in ascending or descending order.
* `array_push()`: Inserts one or more elements to the end of an array.
* `in_array()`: Checks if a value exists in an array.

```php

    <?php
    $fruits = ["Apple", "Banana"];

    // Add a new item
    array_push($fruits, "Orange");

    // Check strict existence
    if (in_array("Apple", $fruits)) {
        echo "We have apples!";
    }
    ?>


```