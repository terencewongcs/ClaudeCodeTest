# Todo List App

A simple todo list application built with Next.js and Supabase.

## Features

- Add, toggle, and delete todo items
- Cloud database persistence with Supabase
- Optimistic UI updates for better user experience
- Loading states and error handling
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier available at https://supabase.com)

### Setup Supabase

1. Create a new project at https://app.supabase.com
2. Go to the SQL Editor and run the schema from `supabase/schema.sql`
3. Go to Project Settings > API to get your project URL and anon key

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 to view the app.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── todos/
│   │       ├── route.ts         # GET all, POST new todo
│   │       └── [id]/
│   │           └── route.ts     # PATCH, DELETE single todo
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── TodoList.tsx             # Main todo list component
└── lib/
    └── supabase.ts              # Supabase client configuration

supabase/
└── schema.sql                   # Database schema
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/todos | Get all todos |
| POST | /api/todos | Create a new todo |
| PATCH | /api/todos/[id] | Toggle todo completion |
| DELETE | /api/todos/[id] | Delete a todo |
