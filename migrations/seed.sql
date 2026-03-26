-- Migration: seed initial projects
-- Created by Wrangler

INSERT INTO projects (title, slug, description, tech_stack, live_url, github_url, image_url) VALUES 
('Cloudflare Portfolio', 'cloudflare-portfolio', 'A modern portfolio website built with React, Vite, Hono, and Cloudflare Workers. Features D1 database integration and edge-native architecture.', '["React","TypeScript","Vite","Hono","Cloudflare Workers","D1","Tailwind CSS"]', 'https://steves-portfolio.pages.dev', 'https://github.com/TechDeca/steves-portfolio-cf', ''),
('Task Management API', 'task-management-api', 'A RESTful API for task management with authentication, built on Cloudflare Workers using Hono. Supports CRUD operations with D1 persistence.', '["Hono","TypeScript","Cloudflare Workers","D1","JWT"]', 'https://task-api.example.com', 'https://github.com/TechDeca/task-api', ''),
('E-Commerce Dashboard', 'ecommerce-dashboard', 'A responsive admin dashboard for e-commerce platforms with real-time analytics, product management, and order tracking.', '["React","TypeScript","Tailwind CSS","Chart.js"]', 'https://dashboard.example.com', 'https://github.com/TechDeca/ecommerce-dashboard', ''),
('Real-time Chat App', 'realtime-chat', 'A WebSocket-powered chat application supporting real-time messaging, rooms, and user presence indicators.', '["React","TypeScript","Socket.io","Node.js","Express"]', 'https://chat.example.com', 'https://github.com/TechDeca/realtime-chat', ''),
('Weather Dashboard', 'weather-dashboard', 'An interactive weather application with location-based forecasts, 7-day predictions, and severe weather alerts.', '["React","TypeScript","OpenWeather API","Chart.js"]', 'https://weather.example.com', 'https://github.com/TechDeca/weather-dashboard', '');
