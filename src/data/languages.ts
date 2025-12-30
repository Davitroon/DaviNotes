export type DifficultyLevel = "Fundamental" | "Beginner" | "Intermediate" | "Advanced";

export interface Category {
	category: string;
	items: LanguageItem[];
}

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

export interface Concept {
	title: string;
	desc: string;
	href: string;
}

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
		],
	},
];
