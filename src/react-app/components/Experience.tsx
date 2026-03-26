const experiences = [
	{
		title: "Senior Full-Stack Developer",
		company: "Tech Company",
		period: "2023 - Present",
		description: "Leading development of cloud-native applications using React, TypeScript, and Cloudflare Workers.",
	},
	{
		title: "Full-Stack Developer",
		company: "Startup Inc",
		period: "2021 - 2023",
		description: "Built and maintained multiple web applications using modern JavaScript frameworks.",
	},
	{
		title: "Junior Developer",
		company: "Web Agency",
		period: "2019 - 2021",
		description: "Developed responsive websites and web applications for various clients.",
	},
];

export default function Experience() {
	return (
		<section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
					Experience
				</h2>
				<div className="relative">
					<div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>
					<div className="space-y-12">
						{experiences.map((exp, index) => (
							<div
								key={index}
								className={`relative flex items-center ${
									index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
								}`}
							>
								<div className="absolute left-4 sm:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 ring-4 ring-white dark:ring-gray-900"></div>
								<div
									className={`ml-12 sm:ml-0 sm:w-1/2 ${
										index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
									}`}
								>
									<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
										<span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
											{exp.period}
										</span>
										<h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
											{exp.title}
										</h3>
										<p className="text-gray-600 dark:text-gray-300 font-medium">
											{exp.company}
										</p>
										<p className="text-gray-500 dark:text-gray-400 mt-2">
											{exp.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
