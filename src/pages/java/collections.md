---
layout: ../../layouts/DocInfoLayout.astro
title: "Collections in Java"
---

# Java Collections Framework

In Java, handling groups of objects is essential. While the **Collections Framework** is the standard for dynamic data, it is important to understand the fundamental structures (like Arrays) and specific behaviors (like Stacks and Queues) to choose the right tool for the job.

---

## Table of Contents

<div id="content-table">

- [1. Basic Structures](#1-basic-structures "Learn the fundamental data structures in Java")
  - [A) Arrays](#a-arrays "Understand fixed-size arrays and their pros/cons")
  - [B) Stacks and Queues](#b-stacks-and-queues "Explore LIFO and FIFO processing with stacks and queues")
- [2. ArrayList](#2-arraylist "Learn about dynamic lists and ArrayList usage")
- [3. HashMap](#3-hashmap "Understand key-value mapping and fast lookups with HashMap")
- [4. Stream API](#4-stream-api "Discover how to process collections declaratively with Streams")
- [5. Other Collections](#5-other-collections "Research the different Java collections.")

</div>

---

## 1. Basic Structures

Before diving into the Collections Framework, it is crucial to understand the alternatives and how Java differs from other languages.

### A) Arrays

An array is a container object that holds a fixed number of values of a single type.  

- **Pros:** Extremely fast due to contiguous memory and low overhead.  
- **Cons:** Fixed in size (you cannot add more elements once created).  

Unlike Python (`list`) or JavaScript (`[]`), which have dynamic arrays by default, in Java an `int[]` is static; for dynamic resizing, you must use `ArrayList`.


```java

    public class Main {
        public static void main(String[] args) {
            // Standard Array (Fixed size of 5)
            int[] numbers = new int[5];
            numbers[0] = 10;
            // numbers.add(20); // ERROR: Cannot add elements, only overwrite.
        }
    }


```

### B) Stacks and Queues

These define _how_ elements are added and removed.

- **Stack (Last-In, First-Out):** Like a stack of plates. The last one you put on top is the first one you take off.

```java

    java import java.util.Stack;

    public class Main {
        public static void main(String[] args) {
            Stack<String> history = new Stack<>();

            // 1. Add elements (Push)
            history.push("Home Page");
            history.push("Settings");
            history.push("Profile"); // This is at the top

            // 2. View top element (Peek)
            System.out.println("Current: " + history.peek()); // Prints: Profile

            // 3. Remove top element (Pop)
            String lastVisited = history.pop(); // Removes "Profile"

            System.out.println("Going back to: " + history.peek()); // Prints: Settings
        }
    }


```

- **Queue (First-In, First-Out):** Like a line at a supermarket. The first person to arrive is the first to be served.

```java

    import java.util.LinkedList; 
    import java.util.Queue;

    public class Main {
        public static void main(String[] args) {
            // We use LinkedList to implement the Queue interface
            Queue<String> printerQueue = new LinkedList<>();

            // 1. Add elements (Offer)
            printerQueue.offer("Document_A.pdf");
            printerQueue.offer("Photo_B.jpg");

            // 2. Process elements (Poll)
            // "Document_A.pdf" was added first, so it comes out first
            System.out.println("Printing: " + printerQueue.poll());

            // 3. Check what is next
            System.out.println("Next in line: " + printerQueue.peek()); // Prints: Photo_B.jpg
        }
    }


```

---

## 2. ArrayList

Part of the Collections Framework. It wraps a standard array but handles resizing automatically. It is more similar to Python and JavaScript lists.

- **Pros:** Reading data (access by index `get(i)` is instant).
- **Cons:** Inserting data in the middle (requires shifting all subsequent elements).

```java

    import java.util.ArrayList;

    public class Main {
        public static void main(String[] args) {
            // Dynamic list creation
            ArrayList<String> languages = new ArrayList<>();

            // It grows automatically
            languages.add("Java");
            languages.add("Python");
            languages.add("C++");

            System.out.println(languages.get(0)); // Prints: Java
        }
    }


```

---

## 3. HashMap

Stores data in key-value pairs, using a hashing function to map keys to specific buckets in memory, which makes retrieval extremely fast, similar to `std::unordered_map` in C++.  

- **Pros:** Fast lookups by key regardless of the data size.  
- **Cons:** Does not maintain any order of elements, and hash collisions can slightly degrade performance.

```java

    import java.util.HashMap;

    public class Main {
        public static void main(String[] args) {
            // Map: Key (String) -> Value (Integer)
            HashMap<String, Integer> scores = new HashMap<>();

            scores.put("Player1", 1500);
            scores.put("Player2", 3000);

            // Instant lookup by key
            System.out.println(scores.get("Player1")); // Prints: 1500
        }
    }


```

---

## 4. Stream API

Introduced in Java 8, Streams (Functional Processing) allow you to process collections declaratively (saying _what_ you want, not _how_ to do it).

- **Pros:** Cleaner code, easy parallelization (`parallelStream()`).
- **Cons:** Slightly slower for very small loops, harder to debug than a `for` loop.

```java

    import java.util.Arrays;
    import java.util.List;

    public class Main {
        public static void main(String[] args) {
            List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");

            // Filter names starting with 'A' and print them
            names.stream()
                .filter(name -> name.startsWith("A"))
                .map(String::toUpperCase)
                .forEach(System.out::println);

            // Output: ALICE
        }
    }


```

---

## 5. Other Collections

Java offers a vast ecosystem of data structures beyond what we have covered. The image below illustrates the full hierarchy of the Java Collections Framework, showing how different interfaces (Set, List, Queue, Map) relate to each other.

<div class="doc-img">

![Java Collections Hierarchy](/images/java-collections.webp "Image credit: akcoding.com")



</div>



We have only explored the **most common** and superficial layers.

<p>If you wish to deepen your knowledge, we highly recommend exploring the <a href="https://docs.oracle.com/en/java/" class="doc-link" target="_blank" rel="noopener noreferrer" title="Visit the official Java documentation for in-depth information">Official Java Documentation</a>.</p>