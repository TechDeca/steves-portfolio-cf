export default function Footer() {
	return (
		<footer className="py-8 bg-gray-900 dark:bg-gray-950 text-gray-400 transition-colors">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
					<p>&copy; {new Date().getFullYear()} Steve. All rights reserved.</p>
					<div className="flex gap-6">
						<a
							href="https://github.com/TechDeca"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white transition-colors"
						>
							GitHub
						</a>
						<a
							href="https://linkedin.com/in/stevedeca"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white transition-colors"
						>
							LinkedIn
						</a>
						<a
							href="https://twitter.com/techdeca"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white transition-colors"
						>
							Twitter
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
