---
layout: ../../layouts/DocInfoLayout.astro
title: "HTML Installation Guide"
---

# HTML Installation Guide

HTML is a **markup language**, so it does not require compilation or installation like traditional programming languages. However, you can set up an environment to write, edit, and view HTML files efficiently.

---

## 1. Required Tools

To start creating and testing HTML, you need:

<ol>
    <li>
        <strong>A Text Editor</strong><br>
        <ul>
            <li><a href="https://code.visualstudio.com/" target="_blank" title="Visual Studio Code Official Site" class="doc-link">Visual Studio Code</a> (recommended)</li>
            <li><a href="https://www.sublimetext.com/" target="_blank" title="Sublime Text Official Site" class="doc-link">Sublime Text</a></li>
            <li><a href="https://atom-editor.cc/" target="_blank" title="Atom Official Site" class="doc-link">Atom</a></li>
            <li><a href="https://notepad-plus-plus.org/" target="_blank" title="Notepad++ Official Site" class="doc-link">Notepad++</a></li>
        </ul>
        Purpose: Write your HTML code with syntax highlighting and optional extensions.
    </li>
    <li>
        <strong>A Web Browser</strong><br>
        Examples:
        <ul>
            <li><a href="https://www.google.com/chrome/" target="_blank" title="Google Chrome Official Site" class="doc-link">Chrome</a></li>
            <li><a href="https://www.firefox.com/en-US/?utm_campaign=SET_DEFAULT_BROWSER" target="_blank" title="Mozilla Firefox Official Site" class="doc-link">Firefox</a></li>
            <li><a href="https://www.microsoft.com/en-us/edge/download?msockid=3eea5b1e799164320b104e0a78ba65f4&form=MA13FJ" target="_blank" title="Microsoft Edge Official Site" class="doc-link">Edge</a></li>
            <li><a href="https://www.apple.com/safari/" target="_blank" title="Safari Official Site" class="doc-link">Safari</a></li>
        </ul>
        Purpose: Open <code>.html</code> files to view and test your webpages.
    </li>
    <li>
        <strong>(Optional) Live Server / Local Server Extension</strong><br>
        In Visual Studio Code, you can install the <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" title="Live Server Extension" class="doc-link">Live Server</a> extension.<br>
        Purpose: Automatically reload your webpage when you save changes, which is helpful for faster development.
    </li>
</ol>

---

## 2. Creating Your First HTML File

1. Open your text editor.

2. Create a new file and save it as `index.html`.

3. Add the basic HTML boilerplate:

```html

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My First HTML Page</title>
    </head>
    <body>
        <h1>Hello, HTML!</h1>
        <p>Welcome to your first webpage.</p>
    </body>
    </html>


```
4. Save the file.

---

## 3. Viewing Your HTML File

- Open the file in a web browser by:

    - Double-clicking the `index.html` file.

    - Or right-click → Open with → Your preferred browser.

- You should see your heading and paragraph rendered as a webpage.

---

## 4. Using a Live Server (Optional)

- If you installed the Live Server extension in VisualStudio Code:

    1. Right-click `index.html`.

    2. Select **"Open with Live Server"**.

    3. Your browser will display the page and refresh automatically on each save.