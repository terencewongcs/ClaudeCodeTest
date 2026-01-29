import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// PATCH - update a todo (toggle completed status)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const { completed } = body;

  if (typeof completed !== "boolean") {
    return NextResponse.json(
      { error: "Completed status is required" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("todos")
    .update({ completed })
    .eq("id", params.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// DELETE a todo
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { error } = await supabase
    .from("todos")
    .delete()
    .eq("id", params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
