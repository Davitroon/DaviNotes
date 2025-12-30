---
layout: ../../layouts/DocsLayout.astro
title: "Java Installation Guide"
---

# Java Installation Guide

To develop applications in Java, you need to install the **JDK** (Java Development Kit). We recommend using the **LTS (Long Term Support)** version, such as Java 17 or Java 21.

## 1. Download & Install

**Windows**

<ol>
  <li>
    Download the installer (x64 Installer) from the 
    <a href="https://www.oracle.com/java/technologies/downloads/" 
       class="doc-link" 
       target="_blank" 
       rel="noopener noreferrer"
       title="Download Java from Oracle Website">
       Oracle Website
    </a> 
    or 
    <a href="https://adoptium.net/" 
       class="doc-link" 
       target="_blank" 
       rel="noopener noreferrer"
       title="Download Java from Eclipse Adoptium">
       Eclipse Adoptium
    </a>.
  </li>
  <li>
    Run the <code>.exe</code> file and follow the on-screen instructions.
  </li>
  <li>
    <strong>Important:</strong> Ensure you check the box that says 
    <strong>"Add to PATH"</strong> or <strong>"Set JAVA_HOME variable"</strong> 
    during installation if available.
  </li>
</ol>

**macOS (via Homebrew)**

If you have Homebrew installed, this is the easiest way. Open your terminal and run:

```bash

    brew install --cask temurin


```

**Linux (Debian/Ubuntu)**

Open your terminal and use `apt` to install the default JDK:

```bash

    sudo apt update
    sudo apt install default-jdk


```

---

## 2. Verify Installation

Once installed, open a new terminal (or Command Prompt) and run the following command to verify that Java is recognized:

```bash

    java --version


```

You should see an output similar to:

```bash

    openjdk 21.0.1 2023-10-17 LTS
    OpenJDK Runtime Environment Temurin-21.0.1+12 (build 21.0.1+12-LTS)
    OpenJDK 64-Bit Server VM Temurin-21.0.1+12 (build 21.0.1+12-LTS, mixed mode)


```

---

## 3. Your First Program

Create a file named `Main.java` and paste the following code:

```java

    public class Main {
        public static void main(String[] args) {
            System.out.println("Hello, Java!");
        }
    }


```

To run it, use the terminal in the same folder:

```bash

    # Compile the file
    javac Main.java

    # Run the compiled program
    java Main

    # Output:
    # Hello, Java!


```
