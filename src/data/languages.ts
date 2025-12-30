export interface LanguageItem {
	title: string;
	desc: string;
	color: string;
	href: string;
	icon: string;
}

export interface Category {
	category: string;
	items: LanguageItem[];
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
			},
			{
				title: "Python",
				desc: "Scripts, Data and Backend",
				color: "#3776ab",
				href: "/python",
				icon: "🐍",
			},
		],
	},
];
