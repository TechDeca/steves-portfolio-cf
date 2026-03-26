import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

interface Message {
	id: number;
	name: string;
	email: string;
	message: string;
	created_at: string;
}

export default function AdminDashboard() {
	const [messages, setMessages] = useState<Message[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const auth = localStorage.getItem("adminAuth");
		if (!auth) {
			navigate("/admin");
			return;
		}

		fetch("/api/admin/messages", {
			headers: { Authorization: auth },
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					setMessages(data.data);
				} else {
					setError(data.error);
				}
			})
			.catch((err) => {
				setError("Failed to fetch messages");
				console.error(err);
			})
			.finally(() => setLoading(false));
	}, [navigate]);

	const handleDelete = async (id: number) => {
		const auth = localStorage.getItem("adminAuth");
		if (!confirm("Delete this message?")) return;

		try {
			const res = await fetch(`/api/admin/messages/${id}`, {
				method: "DELETE",
				headers: { Authorization: auth || "" },
			});
			const data = await res.json();

			if (data.success) {
				setMessages(messages.filter((m) => m.id !== id));
			} else {
				alert(data.error);
			}
		} catch {
			alert("Failed to delete message");
		}
	};

	const handleLogout = () => {
		localStorage.removeItem("adminAuth");
		navigate("/admin");
	};

	const formatDate = (dateStr: string) => {
		return new Date(dateStr).toLocaleString();
	};

	if (loading) {
		return (
			<div className="min-h-screen bg-gray-900 flex items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-gray-900 flex items-center justify-center">
				<div className="text-red-500">{error}</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-900">
			<header className="bg-gray-800 border-b border-gray-700">
				<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
					<h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
					<div className="flex gap-4">
						<Link to="/" className="text-blue-400 hover:text-blue-300">
							View Portfolio
						</Link>
						<button
							onClick={handleLogout}
							className="text-gray-400 hover:text-white"
						>
							Logout
						</button>
					</div>
				</div>
			</header>

			<main className="max-w-7xl mx-auto px-4 py-8">
				<h2 className="text-2xl font-bold text-white mb-6">
					Messages ({messages.length})
				</h2>

				{messages.length === 0 ? (
					<p className="text-gray-400">No messages yet.</p>
				) : (
					<div className="space-y-4">
						{messages.map((msg) => (
							<div
								key={msg.id}
								className="bg-gray-800 border border-gray-700 rounded-lg p-6"
							>
								<div className="flex justify-between items-start mb-3">
									<div>
										<h3 className="text-lg font-semibold text-white">
											{msg.name}
										</h3>
										<a
											href={`mailto:${msg.email}`}
											className="text-blue-400 hover:text-blue-300 text-sm"
										>
											{msg.email}
										</a>
									</div>
									<div className="flex items-center gap-3">
										<span className="text-gray-500 text-sm">
											{formatDate(msg.created_at)}
										</span>
										<button
											onClick={() => handleDelete(msg.id)}
											className="text-red-400 hover:text-red-300 text-sm"
										>
											Delete
										</button>
									</div>
								</div>
								<p className="text-gray-300 whitespace-pre-wrap">{msg.message}</p>
							</div>
						))}
					</div>
				)}
			</main>
		</div>
	);
}
