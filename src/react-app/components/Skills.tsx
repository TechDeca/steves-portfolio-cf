const skillCategories = [
	{
		title: "Frontend",
		skills: [
			{ name: "React", icon: "⚛️" },
			{ name: "TypeScript", icon: "📘" },
			{ name: "Tailwind CSS", icon: "🎨" },
			{ name: "Vite", icon: "⚡" },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "Hono", icon: "🔥" },
			{ name: "Node.js", icon: "🟢" },
			{ name: "REST APIs", icon: "🔌" },
			{ name: "GraphQL", icon: "◼️" },
		],
	},
	{
		title: "Infrastructure",
		skills: [
			{ name: "Cloudflare Workers", icon: "☁️" },
			{ name: "D1 / SQLite", icon: "🗄️" },
			{ name: "PostgreSQL", icon: "🐘" },
			{ name: "Git", icon: "📚" },
		],
	},
];

export default function Skills() {
	return (
		<section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
						Skills & Technologies
					</h2>
					<p className="mt-3 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
						The tools and technologies I use to bring ideas to life.
					</p>
					<div className="mt-3 w-12 h-1 bg-blue-600 rounded-full mx-auto" />
				</div>
				<div className="grid md:grid-cols-3 gap-8">
					{skillCategories.map((category) => (
						<div
							key={category.title}
							className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800"
						>
							<h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-5">
								{category.title}
							</h3>
							<div className="space-y-3">
								{category.skills.map((skill) => (
									<div
										key={skill.name}
										className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
									>
										<span className="text-2xl w-8 text-center">{skill.icon}</span>
										<span className="text-sm font-medium text-gray-700 dark:text-gray-300">
											{skill.name}
										</span>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
