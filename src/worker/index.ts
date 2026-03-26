import { Hono } from "hono";
import { cors } from "hono/cors";

interface Project {
	id: number;
	title: string;
	slug: string;
	description: string | null;
	tech_stack: string | null;
	live_url: string | null;
	github_url: string | null;
	image_url: string | null;
	created_at: string;
}

interface Message {
	id: number;
	name: string;
	email: string;
	message: string;
	created_at: string;
}

const ADMIN_PASSWORD = "tomAdmin123";

const app = new Hono<{ Bindings: Env }>();

app.use("/*", cors());

app.get("/api/health", (c) => c.json({ status: "ok", timestamp: new Date().toISOString() }));

app.get("/api/projects", async (c) => {
	try {
		const DB = c.env.DB;
		const results = await DB.prepare(
			"SELECT * FROM projects ORDER BY created_at DESC"
		).all<Project>();
		return c.json({ success: true, data: results.results });
	} catch (error) {
		console.error("Error fetching projects:", error);
		return c.json({ success: false, error: "Failed to fetch projects" }, 500);
	}
});

app.post("/api/contact", async (c) => {
	try {
		const body = await c.req.json<{ name: string; email: string; message: string }>();
		
		if (!body.name || !body.email || !body.message) {
			return c.json({ success: false, error: "Missing required fields" }, 400);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(body.email)) {
			return c.json({ success: false, error: "Invalid email format" }, 400);
		}

		const DB = c.env.DB;
		const result = await DB.prepare(
			"INSERT INTO messages (name, email, message) VALUES (?, ?, ?)"
		).bind(body.name, body.email, body.message).run();

		if (result.success) {
			return c.json({ success: true, message: "Message sent successfully" });
		} else {
			return c.json({ success: false, error: "Failed to save message" }, 500);
		}
	} catch (error) {
		console.error("Error saving message:", error);
		return c.json({ success: false, error: "Failed to send message" }, 500);
	}
});

app.post("/api/admin/login", async (c) => {
	try {
		const body = await c.req.json<{ password: string }>();
		
		if (body.password === ADMIN_PASSWORD) {
			return c.json({ success: true, authenticated: true });
		} else {
			return c.json({ success: false, error: "Invalid password" }, 401);
		}
	} catch (error) {
		console.error("Error during login:", error);
		return c.json({ success: false, error: "Login failed" }, 500);
	}
});

app.get("/api/admin/messages", async (c) => {
	const authHeader = c.req.header("Authorization");
	
	if (authHeader !== ADMIN_PASSWORD) {
		return c.json({ success: false, error: "Unauthorized" }, 401);
	}

	try {
		const DB = c.env.DB;
		const results = await DB.prepare(
			"SELECT * FROM messages ORDER BY created_at DESC"
		).all<Message>();
		return c.json({ success: true, data: results.results });
	} catch (error) {
		console.error("Error fetching messages:", error);
		return c.json({ success: false, error: "Failed to fetch messages" }, 500);
	}
});

app.delete("/api/admin/messages/:id", async (c) => {
	const authHeader = c.req.header("Authorization");
	const messageId = c.req.param("id");
	
	if (authHeader !== ADMIN_PASSWORD) {
		return c.json({ success: false, error: "Unauthorized" }, 401);
	}

	try {
		const DB = c.env.DB;
		const result = await DB.prepare(
			"DELETE FROM messages WHERE id = ?"
		).bind(messageId).run();

		if (result.success) {
			return c.json({ success: true, message: "Message deleted" });
		} else {
			return c.json({ success: false, error: "Failed to delete message" }, 500);
		}
	} catch (error) {
		console.error("Error deleting message:", error);
		return c.json({ success: false, error: "Failed to delete message" }, 500);
	}
});

export default app;
