# Caráter Ranking

Caráter Ranking is a web application for creating collaborative tier lists with friends. It allows users to create rankings, add entries, vote across different tiers, and view the resulting classifications.

## Tech Stack

- Node.js
- Express
- PostgreSQL
- Docker Compose

## Running Locally

Create the environment file:

```bash
cp .env.example .env
```

Install the dependencies:

```bash
npm install
```

Start the PostgreSQL database:

```bash
docker compose up -d
```

Run the application:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.
