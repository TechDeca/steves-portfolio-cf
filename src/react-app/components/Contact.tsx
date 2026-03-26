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
		<section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors">
			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
					Contact Me
				</h2>
				{status === "success" && (
					<div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
						Message sent successfully! I'll get back to you soon.
					</div>
				)}
				{status === "error" && (
					<div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg">
						{errorMessage}
					</div>
				)}
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							htmlFor="name"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
							placeholder="Your name"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
							placeholder="your@email.com"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700 dark:text-gray-300"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows={5}
							value={formData.message}
							onChange={handleChange}
							className="mt-1 block w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
							placeholder="Your message..."
							required
						/>
					</div>
					<button
						type="submit"
						disabled={status === "loading"}
						className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors hover:shadow-lg"
					>
						{status === "loading" ? "Sending..." : "Send Message"}
					</button>
				</form>
			</div>
		</section>
	);
}
