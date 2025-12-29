---

layout: ../../layouts/DocsLayout.astro
title: "Collections in Java"

---

# Java Collections Framework

Collections are dynamic data structures that allow us to store groups of objects. Unlike arrays, their size is not fixed.

---

## ArrayList (Lists)

It's like an array that grows automatically. Ideal for quick access by index.

```java

    import java.util.ArrayList;

    ArrayList<String> languages = new ArrayList<>();
    languages.add("Java");
    languages.add("Python");
    languages.add("C++");

    System.out.println(languages.get(0)); // Prints: Java


```

---

## HashMap (Dictionaries)
Stores data in key-value pairs.

```java

    import java.util.HashMap;

    HashMap<String, Integer> grades = new HashMap<>();
    notas.put("Math", 9);
    notas.put("Programming", 10);

    System.out.println(notas.get("Programming")); // Prints: 10


```

---

## Streams API (Java 8+)
Allows collections to be processed functionally (filter, map, reduce).

```java

    lenguajes.stream()
        .filter(l -> l.startsWith("J"))
        .forEach(System.out::println);


```