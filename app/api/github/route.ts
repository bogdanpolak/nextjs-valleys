import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    { name: "elotes", ingredients: ["corn", "mayonnaise"], prepTime: 35 },
  ];
  return NextResponse.json({ data });
}
