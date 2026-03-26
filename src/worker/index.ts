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

export default app;
