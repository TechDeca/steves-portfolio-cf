export default function About() {
	return (
		<section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
					About Me
				</h2>
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6 text-gray-600 dark:text-gray-300">
						<p className="text-lg leading-relaxed">
							I'm a passionate full-stack developer with expertise in building modern,
							edge-native applications. I specialize in React, TypeScript, and Cloudflare
							Workers, creating performant and scalable solutions.
						</p>
						<p className="text-lg leading-relaxed">
							With several years of experience in web development, I love turning complex
							problems into simple, beautiful, and intuitive designs. When I'm not coding,
							you can find me exploring new technologies or contributing to open-source
							projects.
						</p>
						<div className="pt-4">
							<a
								href="/resume.pdf"
								download
								className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
							>
								<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
								Download Resume
							</a>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
							SD
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
