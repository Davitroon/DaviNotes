---
layout: ../../layouts/DocsLayout.astro
title: "Object-Oriented Programming"
---

# Object-Oriented Programming (OOP)

Object-Oriented Programming is the core paradigm of Java. Unlike procedural programming, which focuses on functions and logic, OOP organizes software design around **data**, or **objects**, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

---

## Table of Contents

<div id="content-table">

1. [Classes and Objects](#1-classes-and-objects "Learn about Java classes and objects")
2. [Inheritance](#2-inheritance "Understand how inheritance works in Java")
3. [Polymorphism](#3-polymorphism "Explore polymorphism concepts and usage")
4. [Interfaces](#4-interfaces "Discover how to define and implement interfaces")

</div>

---

## 1. Classes and Objects

A **Class** is the blueprint or prototype from which objects are created. It represents the set of properties or methods that are common to all objects of one type. An **Object** is a specific instance of a class with actual values.

| Concept | Description |
| :--- | :--- |
| **Class** | The logical template (e.g., "Car"). It defines the structure. |
| **Object** | The physical instance created from the class (e.g., "That Red Toyota"). |
| **Attribute** | Variables within a class that represent the state (e.g., color, speed). |
| **Method** | Functions within a class that represent behavior (e.g., `startEngine`). |

### Example

```java

    // 1. The Class 
    public class Car {
        // Attributes
        String brand;
        String model;
        int year;

        // Constructor (Initializes the object)
        public Car(String brand, String model, int year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }

        // Method (Behavior)
        public void startEngine() {
            System.out.println("The " + brand + " " + model + " engine is starting...");
        }
    }

    // 2. Usage (Creating Objects)
    public class Main {
        public static void main(String[] args) {
            // Instantiation
            Car myCar = new Car("Toyota", "Corolla", 2022);
            
            myCar.startEngine(); // Output: The Toyota Corolla engine is starting...
        }
    }


```

---

## 2. Inheritance

Inheritance is a mechanism where a new class acquires the properties and behaviors of an existing class. The class that inherits is called the **Subclass** (child), and the class being inherited from is the **Superclass** (parent). We use the `extends` keyword.

- **Reusability**: You don't have to rewrite code.

- **Hierarchy**: Establishes a relationship between classes.

**Example**

```java

    // Parent Class (Superclass)
    public class Vehicle {
        protected String brand = "Generic Brand";

        public void honk() {
            System.out.println("Tuut, tuut!");
        }
    }

    // Child Class (Subclass)

    public class SportsCar extends Vehicle {
        private String modelName = "Mustang";

        public void showDetails() {
            // Can access 'brand' because it extends Vehicle
            System.out.println("Brand: " + brand + ", Model: " + modelName);
        }
    }

    public class Main {
        public static void main(String[] args) {
            SportsCar myFastCar = new SportsCar();
            
            myFastCar.honk();        // Inherited method
            myFastCar.showDetails(); // Own method
        }
    }


```

---

## 3. Polymorphism

Polymorphism means "many forms". It allows us to perform a single action in different ways. In Java, this mainly happens via **Method Overriding** (runtime polymorphism). It allows a subclass to provide a specific implementation of a method that is already provided by its parent class. We use the `@Override` keyword.

**Example**

Notice how the `animalSound()` method behaves differently depending on the specific object, even if the variable type is `Animal`.

```java

    class Animal {
        public void animalSound() {
            System.out.println("The animal makes a sound");
        }
    }

    class Pig extends Animal {
        @Override
        public void animalSound() {
            System.out.println("The pig says: Wee Wee");
        }
    }

    class Dog extends Animal {
        @Override
        public void animalSound() {
            System.out.println("The dog says: Bow Wow");
        }
    }

    public class Main {
        public static void main(String[] args) {
            Animal myAnimal = new Animal();
            Animal myPig = new Pig();
            Animal myDog = new Dog();

            myAnimal.animalSound(); // Output: The animal makes a sound
            myPig.animalSound();    // Output: The pig says: Wee Wee
            myDog.animalSound();    // Output: The dog says: Bow Wow
        }
    }


``` 

---

## 4. Interfaces
An **Interface** is a completely "abstract class" that is used to group related methods with empty bodies. It acts as a **contract**: if a class implements an interface, it must provide the code for all methods defined in that interface.

- Use `interface` to define it.

- Use `implements` to use it.

Java does not support multiple inheritance of classes, but it supports **multiple implementation of interfaces**.

**Example**

```java

    // Define the interface (The Contract)
    interface ElectricVehicle {
        void chargeBattery(); // No body, just signature
        int getBatteryLevel();
    }

    // Implement the interface
    class Tesla implements ElectricVehicle {
        private int batteryLevel;

        public Tesla(int level) {
            this.batteryLevel = level;
        }

        // Must implement this method
        @Override
        public void chargeBattery() {
            this.batteryLevel = 100;
            System.out.println("Battery fully charged.");
        }

        // Must implement this method
        @Override
        public int getBatteryLevel() {
            return this.batteryLevel;
        }
    }

    public class Main {
        public static void main(String[] args) {
            Tesla myTesla = new Tesla(50);
            System.out.println("Level: " + myTesla.getBatteryLevel() + "%");
            
            myTesla.chargeBattery();
        }
    }


```