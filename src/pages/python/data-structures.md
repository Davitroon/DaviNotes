---
layout: ../../layouts/DocInfoLayout.astro
title: "Data Structures in Python"
---

# Data Structures

Python provides four built-in data types used to store collections of data. Unlike **Java**, where you often need to import specific classes like `ArrayList` or `HashMap`, these structures are built directly into the core language syntax.

Choosing the right structure depends on whether you need the data to be ordered, changeable (mutable), or unique.

---

## Table of Contents

<div id="content-table">

- [1. Lists](#1-lists "Ordered and mutable collections")
- [2. Tuples](#2-tuples "Ordered and immutable collections")
- [3. Dictionaries](#3-dictionaries "Key-Value pairs (HashMaps)")
- [4. Sets](#4-sets "Unordered collections of unique elements")

</div>

---

## 1. Lists

Lists are the most versatile data structure in Python. They are **ordered**, **mutable** (changeable), and allow duplicate members. They are similar to `ArrayList` in Java but can hold mixed data types.

**Syntax**: Square brackets `[]`.

```python

    # Creating a list
    fruits = ["apple", "banana", "cherry"]
    
    # Accessing items (Zero-based index)
    print(fruits[0])  # Output: apple
    
    # Modifying the list
    fruits.append("orange")  # Adds to the end
    fruits[1] = "blueberry"  # Changes the second item
    
    # Slicing (Getting a sub-list)
    print(fruits[1:3]) # Output: ['blueberry', 'cherry']


```


---

## 2. Tuples

Tuples are similar to lists, but they are **immutable**. Once a tuple is created, you cannot change, add, or remove items. They are faster than lists and are used for data that should not change (like coordinates or configuration constants).

**Syntax**: Round brackets `()`.

```python

    # Creating a tuple
    coordinates = (10, 20)
    
    # Accessing items works the same as lists
    print(coordinates[0])
    
    # This would throw an Error:
    # coordinates[0] = 15  <-- TypeError: 'tuple' object does not support item assignment
    
    # Unpacking (Assigning values to variables)
    x, y = coordinates
    print(x)  # Output: 10


```


---

## 3. Dictionaries

Dictionaries store data values in `key: value` pairs. They are **ordered** (since Python 3.7), **mutable**, and do not allow duplicate keys. This is Python's implementation of a Hash Map. They are similar to Java and JavaScript objects.

**Syntax**: Curly braces `{}` with colons `:`.

```python

    # Creating a dictionary
    student = {
        "name": "John",
        "age": 25,
        "courses": ["Math", "CompSci"]
    }
    
    # Accessing values
    print(student["name"])  # Output: John
    print(student.get("age"))
    
    # Adding/Updating pairs
    student["grade"] = "A"   # New key-value pair
    student["age"] = 26      # Updates existing key


```

---

## 4. Sets

Sets are collections that are **unordered**, **unindexed**, and **do not allow duplicate members**. They are mathematically useful for operations like unions, intersections, and finding unique values.

**Syntax**: Curly braces `{}` (but without colons).

```python

    # Creating a set
    unique_ids = {101, 102, 103, 102} 
    
    # Duplicates are automatically removed
    print(unique_ids)  # Output: {101, 102, 103}
    
    # Checking for existence (very fast)
    if 101 in unique_ids:
        print("ID found!")
        
    # Adding items
    unique_ids.add(104)


```