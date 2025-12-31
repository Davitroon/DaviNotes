---
layout: ../../layouts/DocInfoLayout.astro
title: "Forms & Server Interaction"
---

# Forms & Server Interaction

The real power of PHP lies in its ability to interact with the user. This section covers how to capture data sent from HTML forms, how to distinguish between data transmission methods, and most importantly, how to process that data securely.

## Table of Contents

<div id="content-table">

- [1. The Superglobals](#1-the-superglobals "Understand $_GET and $_POST variables")
- [2. Handling Form Submissions](#2-handling-form-submissions "How to access form data")
- [3. Security: Sanitization & Validation](#3-security-sanitization--validation "Prevent XSS and validate inputs")
- [4. Complete Form Example](#4-complete-form-example "A full working example")

<div>

---

## 1. The Superglobals

PHP uses special global variables called **superglobals** to hold data regarding the request. The two most important ones for form handling are `$_GET` and `$_POST`.

### The $_GET Variable
Data sent via HTTP GET method:
* Parameters are visible in the URL (e.g., `process.php?name=John`).
* It has limits on the amount of information sent (about 2000 characters).
* **Best for:** Search forms, pagination, or non-sensitive data retrieval.

```php

    // Data sent by process.php?name=John&age=25

    <?php
    if (isset($_GET['name']) && isset($_GET['age'])) {
        echo "Name: " . $_GET['name'] . "<br>";
        echo "Age: " . $_GET['age'];
    }
    ?>


```

### The $_POST Variable
Data sent via HTTP POST method:
* Parameters are **not** visible in the URL (sent in the HTTP message body).
* No specific limits on the amount of information.
* **Best for:** Login forms, submitting articles, or uploading files.

```php

    // Data sent by a HTML form

    <?php
    if (isset($_POST['email'])) {
        echo "Email received: " . htmlspecialchars($_POST['email']);
    }
    ?>


```
---

## 2. Handling Form Submissions

To process a form, you typically check which method was used to request the page and then access the associative array keys that match your HTML input names.

### HTML Form Setup
Notice the `method` and `action` attributes.

```html

    <form action="welcome.php" method="post">
        Name: <input type="text" name="fname">
        E-mail: <input type="text" name="email">
        <input type="submit">
    </form>


```

### PHP Processing (welcome.php)
You access the data using `$_POST['name_of_input']`.

```php

    <?php
    // Check if the form was submitted via POST
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        // Collect value of input field
        $name = $_POST['fname'];
        
        if (empty($name)) {
            echo "Name is empty";
        } else {
            echo "Hello, " . $name;
        }
    }
    ?>


```

---

## 3. Security: Sanitization & Validation

**Never trust user input**. This is the golden rule of backend development. Hackers can inject scripts (XSS) if you output user data directly.

### Sanitization (Cleaning)
Sanitization removes illegal characters or encodes them so they aren't executed by the browser. The most common function is htmlspecialchars().

```php

    <?php
    $raw_input = "<script>alert('Hacked');</script>";
    
    // Converts special characters to HTML entities
    // < becomes &lt;, > becomes &gt;
    $safe_input = htmlspecialchars($raw_input);
    
    echo $safe_input; // Outputs the text safely without running the script
    ?>


```

### Validation (Checking)
Validation ensures the data matches the expected format (e.g., is it a real email?).

```php

    <?php
    $email = $_POST["email"];

    // Remove all illegal characters from email
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format"; 
    } else {
        echo "Email is valid";
    }
    ?>


```

---

## 4. Complete Form Example
This example combines HTML and PHP in a single file (often called a "self-processing form").

```php

    <?php
    $name = "";
    $nameErr = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["name"])) {
            $nameErr = "Name is required";
        } else {
            // Sanitize input
            $name = htmlspecialchars($_POST["name"]);
        }
    }
    ?>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
        Name: <input type="text" name="name" value="<?php echo $name; ?>">
        
        <span class="error">* <?php echo $nameErr;?></span>
        
        <br><br>
        <input type="submit" name="submit" value="Submit">
    </form>

    <?php
    if ($name) {
        echo "<h2>Your Input:</h2>";
        echo "Welcome back, " . $name;
    }
    ?>


```