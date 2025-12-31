/**
 * Defines the specific levels of complexity assigned to learning paths. 
 * These string literals are used by UI components to determine the visual styling, such as the color of difficulty badges found on landing pages.
 */
export type DifficultyLevel =
    | "Fundamental"
    | "Beginner"
    | "Intermediate"
    | "Advanced";

/**
 * Represents a high-level grouping of technologies, such as "Frontend" or "Backend". 
 * This structure is used to organize the sidebar navigation and separate content into logical sections on the homepage.
 */
export interface Category {
    category: string;
    items: LanguageItem[];
}

/**
 * Defines the comprehensive metadata for a specific programming language or framework. 
 * This includes visual assets like icons and brand colors, educational metadata like difficulty and prerequisites, and the actual list of topics covered.
 */
export interface LanguageItem {
    title: string;
    desc: string;
    color: string;
    href: string;
    icon: string;
    difficulty: DifficultyLevel;
    prerequisites: string[];
    concepts: Concept[];
}

/**
 * Represents an individual article or topic within a language. 
 * This object maps a specific concept title to its corresponding route in the file system, enabling navigation to the actual markdown content.
 */
export interface Concept {
    title: string;
    desc: string;
    href: string;
}

/**
 * The central static data source for the application. 
 * This array contains the complete hierarchy of categories, languages, and concepts used to populate the sidebar, generate landing pages, and manage routing structure throughout the site.
 */
export const languages: Category[] = [
    {
        category: "Backend",
        items: [
            {
                title: "Java",
                desc: "Build robust, scalable enterprise applications and backend systems",
                color: "#f89820",
                href: "/java",
                icon: "☕",
                difficulty: "Intermediate",
                prerequisites: ["Nothing"],
                concepts: [
                    {
                        title: "Basic Syntax",
                        desc: "Variables, operators and control structures.",
                        href: "/java/basic-syntax",
                    },
                    {
                        title: "Collections",
                        desc: "ArrayList, HashMap and Stream API.",
                        href: "/java/collections",
                    },
                    {
                        title: "Object-Oriented Programming",
                        desc: "Classes, inheritance, polymorphism, and interfaces.",
                        href: "/java/oop",
                    },
                ],
            },
            {
                title: "Python",
                desc: "Versatile language for data science, AI, and web development",
                color: "#3776ab",
                href: "/python",
                icon: "🐍",
                difficulty: "Beginner",
                prerequisites: ["Nothing"],
                concepts: [
                    {
                        title: "Basic Syntax",
                        desc: "Variables, data types, operators, and indentation rules.",
                        href: "/python/basic-syntax",
                    },
                    {
                        title: "Data Structures",
                        desc: "Lists, Tuples, Dictionaries, and Sets.",
                        href: "/python/data-structures",
                    },
                    {
                        title: "Object-Oriented Programming",
                        desc: "Classes, inheritance, and methods.",
                        href: "/python/oop",
                    },
                ],
            },
        ],
    },
    {
        category: "Frontend",
        items: [
            {
                title: "Astro",
                desc: "Build fast websites with modern frontend frameworks",
                color: "#ff5a03",
                href: "/astro",
                icon: "🚀",
                difficulty: "Beginner",
                prerequisites: ["HTML", "CSS", "Basic JavaScript", "Markdown"],
                concepts: [
                    {
                        title: "Components",
                        desc: "Creating reusable UI components using Astro or framework components.",
                        href: "/astro/components",
                    },
                    {
                        title: "Pages & Routing",
                        desc: "How to create pages and manage routes in an Astro project.",
                        href: "/astro/pages-routing",
                    },
                    {
                        title: "Markdown Content",
                        desc: "Generate pages automatically from Markdown files or content collections.",
                        href: "/astro/markdown-content",
                    },
                ],
            },
            {
                title: "React",
                desc: "A powerful library for building reusable and interactive components",
                color: "#61dafb",
                href: "/react",
                icon: "⚛️",
                difficulty: "Intermediate",
                prerequisites: ["HTML", "CSS", "JavaScript"],
                concepts: [
                    {
                        title: "Fundamentals",
                        desc: "Understanding one-way data flow and how components manage their own state.",
                        href: "/react/fundamentals",
                    },
                    {
                        title: "Hooks",
                        desc: "Managing side effects and logic with useState and useEffect.",
                        href: "/react/hooks",
                    },
                    {
                        title: "Context API",
                        desc: "Sharing global data without prop drilling between components.",
                        href: "/react/context",
                    },
                ],
            },
            {
                title: "HTML",
                desc: "The standard markup language for creating web pages and applications",
                color: "#e34c26",
                href: "/html",
                icon: "🌐",
                difficulty: "Fundamental",
                prerequisites: ["Nothing"],
                concepts: [
                    {
                        title: "Elements & Structure",
                        desc: "Understanding tags, attributes, nesting, and the basic DOM tree skeleton.",
                        href: "/html/elements-structure",
                    },
                    {
                        title: "Semantic HTML",
                        desc: "Using meaningful tags (header, article, footer) for better accessibility and SEO.",
                        href: "/html/semantic-html",
                    },
                    {
                        title: "Forms & Inputs",
                        desc: "Collecting user data effectively using form elements, input types, and validation.",
                        href: "/html/forms-inputs",
                    },
                ],
            }
        ],
    },
];