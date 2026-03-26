-- Migration: create tables
-- Created by Wrangler

CREATE TABLE IF NOT EXISTS projects (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	title TEXT NOT NULL,
	slug TEXT UNIQUE NOT NULL,
	description TEXT,
	tech_stack TEXT,
	live_url TEXT,
	github_url TEXT,
	image_url TEXT,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS messages (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	message TEXT NOT NULL,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
