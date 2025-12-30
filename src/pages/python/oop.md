---
layout: ../../layouts/DocsLayout.astro
title: "Object-Oriented Programming in Python"
---

# Object-Oriented Programming

Python is a multi-paradigm language, but it fully supports Object-Oriented Programming (OOP). Everything in Python is an object, from numbers to functions.

Unlike **Java**, where all code must strictly reside inside a class, Python allows you to mix procedural scripts with class-based structures. However, the core concepts—Classes, Objects, Inheritance, and Polymorphism—remain the same.

---

## Table of Contents

<div id="content-table">

- [1. Classes](#1-classes "Defining blueprints and instances")
- [2. The init Method](#2-the-init-method "Constructors in Python")
- [3. Methods and Self](#3-methods-and-self "Understanding the instance reference")
- [4. Inheritance](#4-inheritance "Extending classes")
- [5. Polymorphism](#5-polymorphism "Using the same interface with different classes")


</div>

---

## 1. Classes

A **Class** is a blueprint for creating objects (a particular data structure), providing initial values for state (attributes) and implementations of behavior (methods).

**Syntax**: Use the `class` keyword. Class names typically use `PascalCase`.

```python 

    class Car:
        brand = "Toyota"  # Class Attribute
    
    # Creating an Object (Instantiation)
    # Unlike Java, no 'new' keyword is needed
    my_car = Car()
    
    print(my_car.brand)


```


---

## 2. The `init` Method

The `init` method is a special method similar to a **Constructor** in Java. It is automatically called when a new instance of the class is created. It is used to initialize the object's attributes.

```python 

    class Person:
        # The constructor
        def __init__(self, name, age):
            self.name = name  # Instance Attribute
            self.age = age
    
    # Creating objects with arguments
    p1 = Person("Alice", 30)
    
    print(p1.name)
    print(p1.age)


```


---

## 3. Methods and Self

**Methods** are functions defined inside the body of a class. They are used to define the behaviors of an object.

### The `self` Parameter
In Java, the reference to the current object (`this`) is implicit. In Python, it is **explicit**. The first parameter of any instance method must be `self` (though you can name it anything, `self` is the strong convention).

When you call a method like `p1.greet()`, Python automatically passes `p1` as the `self` argument.

```python 

    class Person:
        def __init__(self, name):
            self.name = name
    
        # Instance method
        def greet(self):
            print("Hello, my name is " + self.name)
    
    p1 = Person("David")
    p1.greet()


```
---

## 4. Inheritance

Inheritance allows us to define a class that inherits all the methods and properties from another class.

* **Parent class** (Base class): The class being inherited from.
* **Child class** (Derived class): The class that inherits.

**Syntax**: Pass the parent class in parentheses after the child class name.

```python 

    # Parent Class
    class Animal:
        def speak(self):
            print("Animal makes a sound")
    
    # Child Class inherits from Animal
    # Java equivalent: class Dog extends Animal
    class Dog(Animal):
        def speak(self):
            print("Bark")
            
    d = Dog()
    d.speak()  # Output: Bark


```

### The `super()` Function
To call a method from the parent class (for example, to extend the constructor), use `super()`.

```python

    class Student(Person):
        def __init__(self, name, graduation_year):
            # Call the Parent constructor
            super().__init__(name)
            self.graduation_year = graduation_year


```

---

## 5. Polymorphism

Polymorphism allows different classes to be treated through the same interface. In Python, this is **dynamic**: as long as an object implements the required method, it can be used interchangeably with other objects that implement the same method.

Unlike Java, where polymorphism often relies on **interfaces** or **inheritance**, Python uses **duck typing**: "If it walks like a duck and quacks like a duck, it can be treated as a duck."

```python

    class Cat:
        def speak(self):
            print("Meow")

    class Dog:
        def speak(self):
            print("Bark")

    def make_speak(animal):
        animal.speak()  # Works for any object with a 'speak' method

    make_speak(Cat())  # Output: Meow
    make_speak(Dog())  # Output: Bark


```