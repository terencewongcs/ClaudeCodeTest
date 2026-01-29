-- Supabase Schema for Todo List Application
-- Run this SQL in the Supabase SQL Editor to create the required tables

-- Create the todos table
CREATE TABLE IF NOT EXISTS todos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    text TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for faster sorting
CREATE INDEX IF NOT EXISTS idx_todos_created_at ON todos(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE todos ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations for anonymous users
-- Note: For production, you should implement proper authentication
CREATE POLICY "Allow all operations for anonymous users" ON todos
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- Grant access to the anon role
GRANT ALL ON todos TO anon;
GRANT ALL ON todos TO authenticated;
