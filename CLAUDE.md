# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site built with React + Hono, deployed to Cloudflare Workers with a D1 (SQLite) database. The frontend is a single-page app; the backend serves API routes and static assets from the same Worker.

## Commands

- **Dev server**: `npm run dev` (Vite dev server, default port 5173)
- **Build**: `npm run build` (TypeScript check + Vite bundle)
- **Deploy**: `npm run deploy` (builds then deploys via Wrangler)
- **Lint**: `npm run lint` (ESLint with TypeScript + React plugins)
- **Type check**: `npm run check` (tsc --noEmit across all tsconfig references)
- **Generate CF types**: `npm run cf-typegen` (regenerates `worker-configuration.d.ts`)

### D1 Database

- **Create DB**: `npx wrangler d1 create steves-portfolio-db`
- **Run migrations**: `npx wrangler d1 execute steves-portfolio-db --file=./migrations/schema.sql` (add `--local` for local dev)
- **Seed data**: `npx wrangler d1 execute steves-portfolio-db --file=./migrations/seed.sql` (add `--local` for local dev)

No test framework is configured.

## Architecture

### Two-entry-point Worker

- **Backend** (`src/worker/index.ts`): Hono app that serves API routes and falls through to static assets. The D1 database is accessed via the `DB` binding on the Hono context (`c.env.DB`).
- **Frontend** (`src/react-app/main.tsx`): React 19 SPA using React Router DOM. Vite builds it to `dist/client/`, which Wrangler serves as a single-page application via the `assets` config.

### API Routes (all under `/api/`)

| Route | Auth | Purpose |
|-------|------|---------|
| `GET /api/health` | No | Health check |
| `GET /api/projects` | No | List projects from D1 |
| `POST /api/contact` | No | Submit contact form → D1 messages table |
| `POST /api/admin/login` | No | Validate admin password |
| `GET /api/admin/messages` | Yes | List contact messages |
| `DELETE /api/admin/messages/:id` | Yes | Delete a message |

Admin auth uses a plaintext password in the `Authorization` header (stored in localStorage on the client).

### Frontend Routing

- `*` (catch-all) → Portfolio homepage (Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer)
- `/admin` → AdminLogin
- `/admin/dashboard` → AdminDashboard

### Database (D1)

Two tables: `projects` (portfolio entries with JSON `tech_stack` column) and `messages` (contact form submissions). Migrations live in `migrations/`.

### Styling

Tailwind CSS 4 with dark mode (class-based toggle, persisted to localStorage).
