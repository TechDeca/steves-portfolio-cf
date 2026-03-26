export default function About() {
	return (
		<section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
						About Me
					</h2>
					<div className="mt-3 w-12 h-1 bg-blue-600 rounded-full mx-auto" />
				</div>
				<div className="grid md:grid-cols-2 gap-16 items-center">
					<div className="space-y-5">
						<p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
							I'm a full-stack developer who specializes in building modern,
							edge-native applications. My stack centers on React, TypeScript,
							and Cloudflare Workers — tools that let me ship fast, performant
							software at the edge.
						</p>
						<p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
							I care about clean architecture, developer experience, and
							making the web feel instant. When I'm not writing code, I'm
							usually exploring new technologies or contributing to open-source
							projects.
						</p>
						<div className="pt-2">
							<a
								href="/resume.pdf"
								download
								className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:shadow-lg"
							>
								<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
								</svg>
								Download Resume
							</a>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="relative">
							<div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl shadow-blue-500/20">
								SD
							</div>
							<div className="absolute -bottom-3 -right-3 w-64 h-64 rounded-2xl border-2 border-blue-200 dark:border-blue-800/50 -z-10" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
