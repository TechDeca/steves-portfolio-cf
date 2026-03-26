import { useState, useEffect } from "react";

interface Project {
	id: number;
	title: string;
	slug: string;
	description: string | null;
	tech_stack: string | null;
	live_url: string | null;
	github_url: string | null;
	image_url: string | null;
	created_at: string;
}

export default function Projects() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetch("/api/projects")
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					setProjects(data.data);
				} else {
					setError(data.error || "Failed to load projects");
				}
			})
			.catch((err) => {
				setError("Failed to load projects");
				console.error(err);
			})
			.finally(() => setLoading(false));
	}, []);

	const parseTechStack = (techStack: string | null): string[] => {
		if (!techStack) return [];
		try {
			return JSON.parse(techStack);
		} catch {
			return [];
		}
	};

	if (loading) {
		return (
			<section id="projects" className="py-24 bg-white dark:bg-gray-900">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-16">
						Projects
					</h2>
					<div className="flex justify-center">
						<div className="animate-spin rounded-full h-10 w-10 border-2 border-gray-300 border-t-blue-600"></div>
					</div>
				</div>
			</section>
		);
	}

	if (error) {
		return (
			<section id="projects" className="py-24 bg-white dark:bg-gray-900">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-16">
						Projects
					</h2>
					<p className="text-red-500">{error}</p>
				</div>
			</section>
		);
	}

	return (
		<section id="projects" className="py-24 bg-white dark:bg-gray-900 transition-colors">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
						Projects
					</h2>
					<p className="mt-3 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
						A selection of things I've built recently.
					</p>
					<div className="mt-3 w-12 h-1 bg-blue-600 rounded-full mx-auto" />
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5"
						>
							<div className="aspect-[16/10] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
								{project.image_url ? (
									<img
										src={project.image_url}
										alt={project.title}
										className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
									/>
								) : (
									<div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
										<span className="text-white/60 text-4xl font-bold">
											{project.title.charAt(0)}
										</span>
									</div>
								)}
							</div>
							<div className="p-5">
								<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
									{project.title}
								</h3>
								<p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-1.5 mb-5">
									{parseTechStack(project.tech_stack)
										.slice(0, 4)
										.map((tech) => (
											<span
												key={tech}
												className="px-2.5 py-0.5 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-400 text-xs rounded-full font-medium"
											>
												{tech}
											</span>
										))}
									{parseTechStack(project.tech_stack).length > 4 && (
										<span className="px-2.5 py-0.5 text-gray-400 dark:text-gray-500 text-xs font-medium">
											+{parseTechStack(project.tech_stack).length - 4}
										</span>
									)}
								</div>
								<div className="flex gap-3">
									{project.live_url && (
										<a
											href={project.live_url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
										>
											Live Demo
										</a>
									)}
									{project.github_url && (
										<a
											href={project.github_url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
										>
											Source
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
