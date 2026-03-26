export default function Hero() {
	const scrollTo = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<div className="space-y-6">
					<div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
						Full-Stack Developer
					</div>
					<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
						Hi, I'm <span className="text-blue-600 dark:text-blue-400">Steve</span>
					</h1>
					<p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
						Building modern, edge-native applications with React, TypeScript, and Cloudflare
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
						<button
							onClick={() => scrollTo("projects")}
							className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all hover:scale-105 hover:shadow-lg"
						>
							View Projects
						</button>
						<button
							onClick={() => scrollTo("contact")}
							className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-all"
						>
							Contact Me
						</button>
					</div>
				</div>
				<div className="mt-12 flex justify-center gap-6">
					<a
						href="https://github.com/TechDeca"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
					>
						<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
							<path
								fillRule="evenodd"
								d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
								clipRule="evenodd"
							/>
						</svg>
					</a>
					<a
						href="https://linkedin.com/in/stevedeca"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
					>
						<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
						</svg>
					</a>
					<a
						href="https://twitter.com/techdeca"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
					>
						<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
							<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
}
