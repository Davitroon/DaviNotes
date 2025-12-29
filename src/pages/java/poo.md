---

layout: ../../layouts/DocsLayout.astro
title: "Object-Oriented Programming"

---

# POO in Java

Object-Oriented Programming is the main paradigm of Java. It is based on classes and objects.

---

## Fundamental Concepts

1.  **Class**: It is the “mold” or template..
2.  **Object**: It is the instance created from the template..

---

### Example of a Class

```java

    public class Coche {
        // Attributes
        String brand;
        String model;
        
        // Constructor
        public Car(String brand, String model) {
            this.brand = brand;
            this.model = model;
        }
        
        // Method
        public void start() {
            System.out.println("The " + brand + " is starting...");
        }
    }


```

---

### Inheritance (extends)

Allows a child class to inherit attributes and methods from a parent class.

```java

    public class SportCar extends Car {
        boolean turbo = true;

        // Polymorphism (Overwriting)
        @Override
        public void start() {
            System.out.println("The sports car takes off with power");
        }
    }


```