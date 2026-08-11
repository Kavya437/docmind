import { NextRequest, NextResponse } from "next/server";
import { generateSummary } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    const summary = await generateSummary(text);

    return NextResponse.json({ summary });
  } catch (error) {
    console.error("FULL ERROR:");
    console.dir(error, { depth: null });

    return NextResponse.json(
      { error: "Failed to generate summary." },
      { status: 500 }
    );
  }
}