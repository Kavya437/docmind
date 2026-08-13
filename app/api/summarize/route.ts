import { NextResponse } from "next/server";
import { generateSummary } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json(
        { error: "No document text provided." },
        { status: 400 }
      );
    }

    const summary = await generateSummary(text);

    return NextResponse.json({
      summary,
    });
  } catch (error) {
    console.error("SUMMARY API ERROR:", error);

    return NextResponse.json(
      { error: "Failed to generate summary." },
      { status: 500 }
    );
  }
}