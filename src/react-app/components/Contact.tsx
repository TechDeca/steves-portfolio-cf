import { useState } from "react";

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.name || !formData.email || !formData.message) {
			setErrorMessage("All fields are required");
			setStatus("error");
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			setErrorMessage("Please enter a valid email address");
			setStatus("error");
			return;
		}

		setStatus("loading");

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const data = await res.json();

			if (data.success) {
				setStatus("success");
				setFormData({ name: "", email: "", message: "" });
			} else {
				setErrorMessage(data.error || "Failed to send message");
				setStatus("error");
			}
		} catch {
			setErrorMessage("Failed to send message. Please try again.");
			setStatus("error");
		}
	};

	return (
		<section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors">
			<div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
						Get in Touch
					</h2>
					<p className="mt-3 text-gray-500 dark:text-gray-400">
						Have a project in mind or just want to say hello? I'd love to hear
						from you.
					</p>
					<div className="mt-3 w-12 h-1 bg-blue-600 rounded-full mx-auto" />
				</div>
				{status === "success" && (
					<div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl border border-green-200 dark:border-green-800/40 text-sm">
						Message sent successfully! I'll get back to you soon.
					</div>
				)}
				{status === "error" && (
					<div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl border border-red-200 dark:border-red-800/40 text-sm">
						{errorMessage}
					</div>
				)}
				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
							placeholder="Your name"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
							placeholder="your@email.com"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows={5}
							value={formData.message}
							onChange={handleChange}
							className="block w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none outline-none"
							placeholder="Tell me about your project..."
							required
						/>
					</div>
					<button
						type="submit"
						disabled={status === "loading"}
						className="w-full px-8 py-3.5 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/25"
					>
						{status === "loading" ? "Sending..." : "Send Message"}
					</button>
				</form>
			</div>
		</section>
	);
}
