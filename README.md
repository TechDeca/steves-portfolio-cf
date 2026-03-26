# Steve's Portfolio

A modern personal portfolio website built with React, Vite, Hono, and Cloudflare Workers, featuring D1 database integration.

![Tech Stack](https://imagedelivery.net/wSMYJvS3Xw-n339CbDyDIA/fc7b4b62-442b-4769-641b-ad4422d74300/public)

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Hono** - API framework
- **Cloudflare Workers** - Edge deployment
- **Cloudflare D1** - SQLite database
- **Tailwind CSS** - Styling

## Features

- Hero section with dark/light mode toggle
- About section with resume download
- Skills grid
- Projects section (fetched from D1)
- Experience timeline
- Contact form (saves to D1)
- Fully responsive
- Smooth scroll navigation
- SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+
- Cloudflare account

### Installation

```bash
npm install
```

### Local Development

```bash
npm run dev
```

Your application will be available at [http://localhost:5173](http://localhost:5173).

### D1 Database Setup

The project uses Cloudflare D1 for data persistence. The database is already configured in `wrangler.json`.

To apply migrations locally:

```bash
# Apply schema
npx wrangler d1 execute steves-portfolio-db --local --file=migrations/schema.sql

# Seed initial projects
npx wrangler d1 execute steves-portfolio-db --local --file=migrations/seed.sql
```

To create a remote D1 database:

```bash
npx wrangler d1 create steves-portfolio-db
```

Then update `wrangler.json` with the new database ID.

### Building

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Deployment

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

For remote D1 database, apply migrations:

```bash
npx wrangler d1 execute steves-portfolio-db --remote --file=migrations/schema.sql
npx wrangler d1 execute steves-portfolio-db --remote --file=migrations/seed.sql
```

## API Routes

- `GET /api/projects` - Fetch all projects from D1
- `POST /api/contact` - Submit contact form (saves to D1)
- `GET /api/health` - Health check

## Database Schema

```sql
CREATE TABLE projects (
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

CREATE TABLE messages (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## Monitoring

```bash
npx wrangler tail
```

## License

MIT
