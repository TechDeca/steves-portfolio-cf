const skills = [
	{ name: "React", icon: "⚛️" },
	{ name: "TypeScript", icon: "📘" },
	{ name: "Vite", icon: "⚡" },
	{ name: "Hono", icon: "🔥" },
	{ name: "Cloudflare Workers", icon: "☁️" },
	{ name: "D1", icon: "🗄️" },
	{ name: "Tailwind CSS", icon: "🎨" },
	{ name: "Node.js", icon: "🟢" },
	{ name: "PostgreSQL", icon: "🐘" },
	{ name: "Git", icon: "📚" },
	{ name: "REST APIs", icon: "🔌" },
	{ name: "GraphQL", icon: "◼️" },
];

export default function Skills() {
	return (
		<section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
					Skills & Technologies
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
					{skills.map((skill) => (
						<div
							key={skill.name}
							className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all cursor-default"
						>
							<div className="text-3xl mb-2">{skill.icon}</div>
							<div className="text-sm font-medium text-gray-900 dark:text-white text-center">
								{skill.name}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
