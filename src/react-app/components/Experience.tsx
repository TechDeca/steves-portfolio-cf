const experiences = [
	{
		title: "Senior Full-Stack Developer",
		company: "Tech Company",
		period: "2023 - Present",
		description:
			"Leading development of cloud-native applications using React, TypeScript, and Cloudflare Workers. Architecting edge-first solutions for high-traffic products.",
	},
	{
		title: "Full-Stack Developer",
		company: "Startup Inc",
		period: "2021 - 2023",
		description:
			"Built and shipped multiple production web applications using modern JavaScript frameworks. Owned features end-to-end from database schema to UI.",
	},
	{
		title: "Junior Developer",
		company: "Web Agency",
		period: "2019 - 2021",
		description:
			"Developed responsive websites and web applications for a range of clients. Learned to ship fast and iterate based on feedback.",
	},
];

export default function Experience() {
	return (
		<section id="experience" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
						Experience
					</h2>
					<div className="mt-3 w-12 h-1 bg-blue-600 rounded-full mx-auto" />
				</div>
				<div className="relative">
					<div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 dark:bg-gray-800" />
					<div className="space-y-10">
						{experiences.map((exp, index) => (
							<div key={index} className="relative pl-10">
								<div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 ring-4 ring-gray-50 dark:ring-gray-950" />
								<div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors">
									<div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
										<h3 className="text-base font-bold text-gray-900 dark:text-white">
											{exp.title}
										</h3>
										<span className="text-sm text-gray-400 dark:text-gray-500">
											at {exp.company}
										</span>
									</div>
									<span className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2.5 py-0.5 rounded-full mb-3">
										{exp.period}
									</span>
									<p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
										{exp.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
