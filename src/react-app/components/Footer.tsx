export default function Footer() {
	return (
		<footer className="py-10 bg-gray-950 text-gray-500 transition-colors border-t border-gray-800">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
					<div className="flex items-center gap-3">
						<span className="font-bold text-white text-sm">
							Steve<span className="text-blue-500">.</span>
						</span>
						<span className="text-gray-700">|</span>
						<p className="text-sm">
							&copy; {new Date().getFullYear()} All rights reserved.
						</p>
					</div>
					<div className="flex gap-5">
						<a
							href="https://github.com/TechDeca"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm hover:text-white transition-colors"
						>
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/stevedeca"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm hover:text-white transition-colors"
						>
							LinkedIn
						</a>
						<a
							href="https://twitter.com/techdeca"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm hover:text-white transition-colors"
						>
							Twitter
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
