import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
	const [password, setPassword] = useState("");
	const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");

		try {
			const res = await fetch("/api/admin/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ password }),
			});
			const data = await res.json();

			if (data.success && data.authenticated) {
				localStorage.setItem("adminAuth", password);
				navigate("/admin/dashboard");
			} else {
				setErrorMessage(data.error || "Invalid password");
				setStatus("error");
			}
		} catch {
			setErrorMessage("Login failed. Please try again.");
			setStatus("error");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-900">
			<div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
				<h2 className="text-2xl font-bold text-white mb-6 text-center">
					Admin Login
				</h2>
				{status === "error" && (
					<div className="mb-4 p-3 bg-red-900/50 text-red-300 rounded-lg text-sm">
						{errorMessage}
					</div>
				)}
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-300 mb-1"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
							placeholder="Enter admin password"
							required
						/>
					</div>
					<button
						type="submit"
						disabled={status === "loading"}
						className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-colors"
					>
						{status === "loading" ? "Logging in..." : "Login"}
					</button>
				</form>
				<div className="mt-4 text-center">
					<a href="/" className="text-blue-400 hover:text-blue-300 text-sm">
						Back to Portfolio
					</a>
				</div>
			</div>
		</div>
	);
}
