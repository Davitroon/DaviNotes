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
				desc: "POO, Streams and Spring Boot",
				color: "#f89820",
				href: "/java",
				icon: "☕",
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
				desc: "Scripts, Data and Backend",
				color: "#3776ab",
				href: "/python",
				icon: "🐍",
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
];
