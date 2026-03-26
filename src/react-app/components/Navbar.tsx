import { useState, useEffect } from "react";

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isDark, setIsDark] = useState(() => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("theme");
			if (saved) return saved === "dark";
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
		return true;
	});

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark]);

	const scrollTo = (id: string) => {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: "smooth" });
	};

	const navItems = [
		{ label: "About", id: "about" },
		{ label: "Skills", id: "skills" },
		{ label: "Projects", id: "projects" },
		{ label: "Experience", id: "experience" },
		{ label: "Contact", id: "contact" },
	];

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
					: "bg-transparent"
			}`}
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<button
							onClick={() => scrollTo("hero")}
							className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
						>
							Steve
						</button>
					</div>
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-4">
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollTo(item.id)}
									className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
								>
									{item.label}
								</button>
							))}
						</div>
					</div>
					<div className="flex items-center">
						<button
							onClick={() => setIsDark(!isDark)}
							className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
							aria-label="Toggle dark mode"
						>
							{isDark ? (
								<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
								</svg>
							) : (
								<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
}
