import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// GET all todos
export async function GET() {
  const { data, error } = await supabase
    .from("todos")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST a new todo
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { text } = body;

  if (!text || typeof text !== "string" || text.trim() === "") {
    return NextResponse.json(
      { error: "Text is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("todos")
    .insert([{ text: text.trim(), completed: false }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
