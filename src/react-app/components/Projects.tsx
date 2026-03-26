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
			<section id="projects" className="py-20 bg-white dark:bg-gray-800">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
						Projects
					</h2>
					<div className="flex justify-center">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
					</div>
				</div>
			</section>
		);
	}

	if (error) {
		return (
			<section id="projects" className="py-20 bg-white dark:bg-gray-800">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12">
						Projects
					</h2>
					<p className="text-red-500">{error}</p>
				</div>
			</section>
		);
	}

	return (
		<section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
					Projects
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
						>
							<div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
								{project.image_url ? (
									<img
										src={project.image_url}
										alt={project.title}
										className="w-full h-full object-cover"
									/>
								) : (
									<span className="text-white text-4xl font-bold">
										{project.title.charAt(0)}
									</span>
								)}
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
									{project.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{parseTechStack(project.tech_stack).map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex gap-4">
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
											className="flex-1 text-center px-4 py-2 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white text-sm font-medium rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 transition-colors"
										>
											GitHub
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
