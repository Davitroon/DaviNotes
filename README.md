DaviNotes
DaviNotes is a personal documentation project built to serve as a visual guide for various programming languages and technologies.

📝 Description

Originally conceived as an academic assignment, DaviNotes evolved into a comprehensive personal knowledge base. It functions as a structured documentation hub for the technologies and programming languages I have worked with.

The main objective is to guide the user through different technologies in a basic and visual way. The information is organized into specific pages to facilitate understanding, covering aspects such as difficulty levels, recommended prerequisites, and key concepts.

⚙️ Installation

To run this project locally, you will need Node.js installed. This project uses the standard Astro setup.

Clone the repository:

Bash

git clone https://github.com/your-username/davinotes.git
cd davinotes
Install dependencies:

Bash

npm install
Start the development server:

Bash

npm run dev
Open your browser and navigate to http://localhost:4321.

🕹️ How to Play (Usage)

Navigating through DaviNotes is intuitive and designed for quick access to information:

Home Page (index.astro): Upon loading the site, you will see a categorized grid of buttons/cards representing different technologies (e.g., Java, Python, React, HTML).

Technology Overview: Clicking on a technology card takes you to its specific DocIndexLayout. Here you will find:

Difficulty Level: An estimate of the learning curve.

Prerequisites: Concepts recommended before starting.

Key Concepts: A list of fundamental topics available for reading.

Documentation Pages: Inside a topic (e.g., "Basic Syntax" or "Hooks"), you can read the detailed documentation.

Navigation:

Use the Sidebar to jump between different languages or topics.

Use the Breadcrumbs to track your location.

Use the Search/Back buttons for easy navigation.

🔧 Architecture

The project is structured using Astro's file-based routing system. It leverages a component-based architecture to separate layout logic from content.

File Structure Overview:

Plaintext

C:.
├───components      # UI components (Breadcrumbs, Sidebar, InfoBox, etc.)
├───data            # Static data sources (languages.ts)
├───layouts         # Page wrappers (HomeLayout, DocInfoLayout)
├───pages           # Routes
│   ├───astro       # Astro-specific docs
│   ├───html        # HTML-specific docs
│   ├───java        # Java-specific docs
│   ├───python      # Python-specific docs
│   └───react       # React-specific docs
├───styles          # Global and layout-specific CSS
└───utils           # Utility functions (colors, sorting, etc.)
Key Components:

DocIndexLayout.astro: A dynamic layout that serves as the "Landing Page" for a specific language. It accepts props like language, description, and color to dynamically theme the UI (buttons, text highlights) and fetch data from languages.ts.

DocInfoLayout.astro: The main wrapper for documentation content. It includes the ClientRouter (for View Transitions), the SideBar, and Breadcrumbs, ensuring the navigation state persists across page loads.

SideBar.astro: Handles the navigation menu, allowing users to browse through the hierarchy of documentation pages.

🧠 Technologies

This project is built with modern web standards, focusing on performance and type safety.

Astro: The core web framework used for its performance and content-focused approach.

TypeScript: Used for logic, components, and ensuring type safety across the project (interfaces for props, data structures).

CSS: Custom vanilla CSS variables and scoping are used for styling.

View Transitions (Astro ClientRouter): Provides a SPA-like feel (smooth fading, persistent sidebar) while maintaining the benefits of a multi-page application.

Markdown (.md): Used for the actual documentation content, making it easy to write and format technical notes.

Status: 🚧 In Development The project is continuously updated as I learn new libraries, languages, and technologies.