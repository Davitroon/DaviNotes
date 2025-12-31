---
layout: ../../layouts/DocInfoLayout.astro
title: "Forms in HTML"
---

# Forms

Forms are the primary method for collecting data from users on a website. Whether it is a login screen, a search bar, or a checkout page, forms enable interaction between the client (browser) and the server.

Building a form involves creating controls (like text boxes and buttons) and defining how and where that data should be sent when submitted.

---

## Table of Contents

<div id="content-table">

- [1. The Form Element](#1-the-form-element "Understanding action and method attributes")
- [2. Input Types](#2-input-types "Common input fields like text, password, and email")
  - [2.1 Button Types](#21-button-types "Difference between submit, button, and reset")
- [3. Labels & Accessibility](#3-labels--accessibility "Linking labels to inputs for screen readers")
- [4. Basic Validation](#4-basic-validation "Using built-in HTML attributes to enforce rules")

</div>

---

## 1. The Form Element

The `<form>` element acts as a container for all input controls. It defines **where** the data goes and **how** it is sent.

```html

    <form action="/submit-data" method="POST">
   
    </form>


```

**Key Attributes:**

- `action:` The URL where the form data will be sent for processing.

- `method:` The HTTP method used to send the data.

    - `GET:` Appends data to the URL (good for search, bad for passwords).

    - `POST:` Sends data in the request body (secure, good for submitting data).
    
---

## 2. Input Types
The `<input>` element is the most versatile form element. It changes its behavior significantly based on the `type` attribute.

**Common Input Types:**

<table>
    <thead>
        <tr>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>text</td>
            <td>A standard single-line text field.</td>
        </tr>
        <tr>
            <td>password</td>
            <td>Hides characters (displays dots or asterisks).</td>
        </tr>
        <tr>
            <td>email</td>
            <td>Validates that the text is an email address.</td>
        </tr>
        <tr>
            <td>number</td>
            <td>Restricts input to numeric values.</td>
        </tr>
        <tr>
            <td>checkbox</td>
            <td>Allows selecting multiple options.</td>
        </tr>
        <tr>
            <td>radio</td>
            <td>Allows selecting only one option from a set.</td>
        </tr>
        <tr>
            <td>submit</td>
            <td>A button that submits the form.</td>
        </tr>
    </tbody>
</table>

**Other Form Controls:**

Besides` <input>`, there are other tags for specific data entry:

- `<textarea>`: For multi-line text (comments, bios).

- `<select> `& `<option>`: For dropdown menus.

- `<button>`: A clickable button (can submit or trigger JS).

```html 

    <form>
        <input type="text" name="username" placeholder="Enter Username">

        <input type="password" name="password" placeholder="Secret">

        <select name="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select>

        <button type="submit">Login</button>
    </form>


```
**Note:** The `name` attribute is crucial. Without it, the browser doesn't know what to call the data when sending it to the server.

### 2.1 Button Types

The `<button>` element can have different `type` attributes that define their behavior:

<table>
  <thead>
    <tr>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>submit</td>
      <td>Submits the form data to the server (default for <code>button</code>).</td>
    </tr>
    <tr>
      <td>button</td>
      <td>A generic button that does not submit the form. Often used with JavaScript.</td>
    </tr>
    <tr>
      <td>reset</td>
      <td>Resets all form fields to their initial values.</td>
    </tr>
  </tbody>
</table>


**Example:**

```html

    <form id="myForm">
        <input type="text" name="username" placeholder="Username">

        <!-- Submit button sends username input data -->
        <button type="submit">Submit</button>

        <!-- Reset button resets username input value -->
        <button type="reset">Clear</button>

        <!-- Button that triggers JS, does not submit -->
        <button type="button" onclick="alert('Clicked!')">Click Me</button>
    </form>


```


**Tip:** Always specify `type="button"` for buttons that should not submit the form. Otherwise, a `<button>` without a type defaults to `submit`, which can cause unexpected form submissions.


---

## 3. Labels & Accessibility

Every input field should have an associated `<label>`. This is vital for accessibility (screen readers read the label when the input is focused) and usability (clicking the label focuses the input).

You link them using the `for` attribute on the label and the `id` on the input.

```html    

    <div class="form-group">
        <label for="user-email">Email Address:</label>
        <input type="email" id="user-email" name="email">
    </div>


```

---

## 4. Basic Validation

HTML5 introduced built-in validation attributes, allowing you to catch errors before the data is even sent to the server.

- `required`: The field cannot be left empty.

- `minlength` / `maxlength`: Restricts character count.

- `min` / `max`: Restricts numeric range.

- `pattern`: Uses Regex for custom validation.

```html

    <form action="/signup" method="POST">
        <label for="age">Age (18+):</label>
        <input 
            type="number" 
            id="age" 
            name="age" 
            min="18" 
            max="99" 
            required
        >
        
        <button type="submit">Verify</button>
    </form>


```

If the user tries to submit `15` or leaves it empty, the browser will block the submission and show a default error message.