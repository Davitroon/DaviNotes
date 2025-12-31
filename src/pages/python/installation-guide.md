---
layout: ../../layouts/DocInfoLayout.astro
title: "Python Installation Guide"
---

# Python Installation Guide

Python is a powerful, high-level programming language known for its simplicity and readability. Whether you are into web development, data science, or automation, Python is an essential tool.

Follow the steps below to install Python on your operating system.

---

## 1. Windows

The easiest way to install Python on Windows is via the official installer.

<ol style="color:#a1a1aa">
  <li>
    Go to the 
    <a href="https://www.python.org/downloads/" 
       class="doc-link" 
       target="_blank" 
       rel="noopener noreferrer"
       title="Official Python Website">
       official Python website
    </a>.
  </li>
  <li>
    Click on the button <strong>Download Python 3.x.x</strong> (latest version).
  </li>
  <li>
    Run the downloaded executable file.
  </li>
  <li>
    <strong>IMPORTANT:</strong> Before clicking "Install Now", make sure to check the box that says:
    <blockquote>
      <strong>Add Python.exe to PATH</strong>
    </blockquote>
    <em>If you miss this step, you won't be able to run Python from the command line.</em>
  </li>
  <li>
    Click <strong>Install Now</strong> and wait for the process to finish.
  </li>
</ol>

### Verify Installation

Open Command Prompt (cmd) or PowerShell and type:

```bash

    python --version


```

---

## 2. macOS

macOS often comes with a system version of Python, but it is recommended to install the latest version separately to avoid conflicts with system tools.

Visit the Python Downloads for macOS.

Download the macOS 64-bit universal2 installer.

Open the package and follow the installation wizard instructions.

Alternatively, if you use **Homebrew**, you can install it via terminal:

```bash

    brew install python


```

**Verify** Installation

On macOS, you usually need to use `python3` instead of `python`:

```bash

    python3 --version


```

---

## 3. Linux (Ubuntu/Debian)

Most Linux distributions come with Python pre-installed. However, to ensure you have the latest version or to install `pip` (the package manager), use the terminal.

Update your package list and install Python:

Bash

```bash

    sudo apt update
    sudo apt install python3 python3-pip


```

**Verify Installation**

```bash

    python3 --version


```
