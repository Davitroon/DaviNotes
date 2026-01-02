<h1 align="center">DaviNotes</h1>

<p align="center">
<em>A friendly space to explore, learn, and understand programming through visual notes.</em>
</p>

<div align="center">

<img src="https://img.shields.io/badge/Astro-FF5F00?style=for-the-badge&logo=astro&logoColor=white">


<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

<img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css&logoColor=white">

<img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" />


</div>

---

## 📚 Table of Contents
- [📝 Description](#-description "Learn more about the game's concept and purpose")
- [⚙️ Installation](#️-installation "Instructions to install and run the project locally")
- [🕹️ How to Use](#%EF%B8%8F-how-to-use "Step-by-step guide on how to use the documentation")
- [🔧 Game Architecture](#-game-architecture "Understand the structure and logic behind the game")
- [🧠 Technologies](#-technologies "See which technologies were used to build the project")
- [🔗 API](#-api "Information about the Truth or Dare API used in this project")

---


## 📝 Description

Originally conceived as an academic assignment, **DaviNotes** evolved into a comprehensive personal knowledge base. It functions as a structured documentation hub for the technologies and programming languages I have worked with.

The main objective is to guide the user through different technologies in a basic and visual way. The information is organized into specific pages to facilitate understanding, covering aspects such as difficulty levels, recommended prerequisites, and key concepts.

---

## ⚙️ Installation

To run this project locally, you will need **Node.js** installed. This project uses the standard Astro setup.

1. **Clone the repository:**

```bash
    git clone https://github.com/your-username/davinotes.git
    cd davinotes
```

2. **Install dependencies:**

```bash
    npm install
```

3. **Start the development server:**

```bash
    npm run dev
```

Open your browser and navigate to `http://localhost:4321`.

---

## 🕹️ How to Use

Navigating through DaviNotes is intuitive and designed for quick access to information:

- **Home Page:** Upon loading the site, you will see a categorized grid of buttons/cards representing different technologies (e.g., Java, Python, React, HTML).

- **Technology Overview:** Clicking on a technology card takes you to its specific DocIndexLayout. Here you will find:

    - **Difficulty Level:** An estimate of the learning curve.

    - **Prerequisites:** Concepts recommended before starting.

    - **Key Concepts:** A list of fundamental topics available for reading.

- **Documentation Pages:** Inside a topic (e.g., "Basic Syntax" or "Hooks"), you can read the detailed documentation.

---

## 🔧 Architecture

The project is structured using **Astro's** file-based routing system. It leverages a component-based architecture to separate layout logic from content.

**File Structure Overview:**

```plaintext
    C:.
    ├───components      # UI components (Breadcrumbs, Sidebar, InfoBox, etc.)
    ├───data            # Static data sources (languages.ts)
    ├───layouts         # Page wrappers (HomeLayout, DocInfoLayout)
    ├───pages           # Languages docs
    │   ├───astro       
    │   ├───html        
    │   ├───java        
    │   ├───python      
    │   └───react       
    ├───styles          # Global and layout-specific CSS
    └───utils           # Utility functions (colors, sorting, etc.)
```

**Key Components:**

- `DocIndexLayout.astro:` A dynamic layout that serves as the "Landing Page" for a specific language. It accepts props like `language`, `description`, and `color` to dynamically theme the UI (buttons, text highlights) and fetch data from `languages.ts`.

- `DocInfoLayout.astro:` The main wrapper for documentation content. It includes the `ClientRouter` (for View Transitions), the `SideBar`, and `Breadcrumbs`, ensuring the navigation state persists across page loads.

- `SideBar.astro:` Handles the navigation menu, allowing users to browse through the hierarchy of documentation pages.

---

## 🧠 Technologies

This project is built with modern web standards, focusing on performance and type safety.

| Technology | Description |
|------------|-------------|
| ![Astro](https://img.shields.io/badge/Astro-Core-FF5F00?logo=astro&logoColor=white) | The core web framework used for its performance and content-focused approach. |
| ![TypeScript](https://img.shields.io/badge/TypeScript-Logic-007ACC?logo=typescript&logoColor=white) | Used for logic, components, and ensuring type safety across the project (interfaces for props, data structures). |
| ![CSS](https://img.shields.io/badge/CSS-Styling-1572B6?logo=css3&logoColor=white) | Custom vanilla CSS variables and scoping are used for styling. |
| ![View Transitions](https://img.shields.io/badge/View%20Transitions-SPA-6E5494?logo=astro&logoColor=white) | Provides a SPA-like feel (smooth fading, persistent sidebar) while maintaining the benefits of a multi-page application using Astro ClientRouter. |
| ![Markdown](https://img.shields.io/badge/Markdown-Content-000000?logo=markdown&logoColor=white) | Used for the actual documentation content, making it easy to write and format technical notes. |



Status: 🚧 In Development The project is continuously updated as I learn new libraries, languages, and technologies.