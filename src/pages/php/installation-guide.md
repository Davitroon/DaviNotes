---
layout: ../../layouts/DocInfoLayout.astro
title: "PHP Installation Guide"
---

# PHP Installation Guide

To develop applications in PHP, you need the **PHP Interpreter**. We recommend installing the latest stable version (PHP 8.2 or newer).

## 1. Download & Install

**Windows**

<ol>
  <li>
    Download <strong>XAMPP</strong> (easiest method) from the 
    <a href="https://www.apachefriends.org/" 
       class="doc-link" 
       target="_blank" 
       rel="noopener noreferrer"
       title="Download XAMPP from Apache Friends">
       Apache Friends Website
    </a>.
  </li>
  <li>
    Run the <code>.exe</code> file. You can uncheck "FileZilla" or "Tomcat" during installation to keep it light.
  </li>
  <li>
    <strong>Important:</strong> To use PHP in the terminal, add your PHP folder path (usually <code>C:\xampp\php</code>) to your Windows <strong>Environment Variables (PATH)</strong>.
  </li>
</ol>

**macOS (via Homebrew)**

If you have Homebrew installed, open your terminal and run:

```bash

    brew install php


```
**Linux (Debian/Ubuntu)**

Open your terminal and use apt to install PHP:

```bash

    sudo apt update
    sudo apt install php


```

## 2. Verify Installation

Once installed, open a new terminal (or Command Prompt) and run the following command to verify that PHP is recognized:

```bash

    php -v


```

You should see an output similar to:

```bash

    PHP 8.2.0 (cli) (built: Dec  8 2022 15:31:23) (NTS)
    Copyright (c) The PHP Group
    Zend Engine v4.2.0, Copyright (c) Zend Technologies


```

## 3. Your First Program

Create a file named hello.php and paste the following code:

```php

    <?php
        echo "Hello, PHP!";
    ?>


```
To run it, use the terminal in the same folder:

```bash

    # Run the script directly
    php hello.php

    # Output:
    # Hello, PHP!


```